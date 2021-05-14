
FROM node:12.13.1

RUN npm install webpack -g

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

ENV NODE_ENV=production
ENV PORT=2001

CMD ["npm", "start" ]
EXPOSE 2001
