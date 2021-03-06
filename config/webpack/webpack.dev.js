const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
