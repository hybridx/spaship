FROM node:18-alpine

ADD . /app
WORKDIR /app

RUN npm install

EXPOSE 2345

CMD [  "npm", "run", "start"]
