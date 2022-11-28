FROM node:18


WORKDIR /app
COPY . .
RUN mkdir spaship_uploads && mkdir root
RUN npm install
RUN npm run build
RUN useradd -u 1004760000 1004760000
USER 1004760000
RUN SUDO chown -R 1004760000:1004760000 /app
EXPOSE 2345
CMD [ "npm", "run", "start:prod"]
