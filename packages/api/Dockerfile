FROM node:18-alpine3.16


RUN addgroup allusers && adduser -S -G allusers 1004760000
WORKDIR /app
COPY . .
RUN mkdir spaship_uploads && mkdir root
RUN npm install
RUN npm run build
RUN chown -R 755 .
EXPOSE 2345
USER 1004760000
CMD [ "npm", "run", "start:prod"]
