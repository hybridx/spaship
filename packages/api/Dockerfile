FROM node:18

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 2345
CMD [ "npm", "run", "start:prod"]
