FROM node:18

RUN useradd -u 0 1004760000
USER 1004760000
WORKDIR /app
COPY . .
RUN mkdir spaship_uploads && mkdir root
RUN npm install
RUN npm run build
RUN chown -R 1004760000:0 /app
EXPOSE 2345
CMD [ "npm", "run", "start:prod"]
