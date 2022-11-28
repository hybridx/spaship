FROM node:18

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN sudo chown -R 1004760000:0 /app
EXPOSE 2345
CMD [ "npm", "run", "start:prod"]
