/* eslint-disable prefer-arrow-callback, func-names */
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const fs = require('fs');

const app = express();
app.use(helmet());

const PORT = process.env.PORT || 9909;
const hostname = '0.0.0.0';

const { log } = console;

const compressions = [
  {
    encoding: 'br',
    extension: 'br',
  },
  {
    encoding: 'gzip',
    extension: 'gz',
  },
];

const serveCompressed = (contentType) => (req, res, next) => {
  const acceptedEncodings = req.acceptsEncodings();
  // use first compression which is supported
  // and where file exists
  const compression = compressions.find((comp) => (
    acceptedEncodings.indexOf(comp.encoding) !== -1
    && fs.existsSync(`./dist/${req.url}.${comp.extension}`)
  ));

  if (compression) {
    req.url = `${req.url}.${compression.extension}`;
    res.set('Content-Encoding', compression.encoding);
    res.set('Content-Type', contentType);
  }

  next();
};

app.get('*.js', serveCompressed('text/javascript'));
app.use(express.static(`${__dirname}/dist`));

app.get('*', function (req, res) {
  return res.sendFile(path.resolve(`${__dirname}/dist`, 'index.html'));
});

app.listen(PORT, hostname, function () {
  log(`Node Server Running on ${hostname}:${PORT}`);
});
