FROM node:19-alpine

RUN mkdir app && mkdir app/spaship_uploads && mkdir app/root

ADD . /app
WORKDIR /app

RUN ls && npm install
RUN npm run build

EXPOSE 2345

CMD [ "npm", "run", "start:prod"]
