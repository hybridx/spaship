FROM node:18

WORKDIR /app
COPY . .
RUN mkdir app/spaship_uploads && mkdir app/root
RUN npm install
RUN npm run build
RUN chown -R 1004760000:0 /app
EXPOSE 2345
CMD [ "npm", "run", "start:prod"]
