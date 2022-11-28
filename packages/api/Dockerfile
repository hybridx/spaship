FROM ubuntu:20.04

RUN apt-get update
RUN apt-get --force-yes upgrade  -y
RUN apt-get dist-upgrade
RUN apt-get install sudo

RUN sudo apt-get install --yes curl
RUN sudo apt update
RUN sudo curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN sudo apt-get --force-yes install -y nodejs
RUN sudo apt-get install --yes build-essential
RUN sudo apt-get update

RUN mkdir app && mkdir app/spaship_uploads && mkdir app/root

ADD . /app
WORKDIR /app

RUN find . -name "node_modules" -exec rm -rf '{}' +

RUN useradd group -u 1004760000 --create-home --user-group  # <--- Create a user
COPY --chown=group . /app
USER 1004760000

RUN npm cache clean --force
RUN chmod -R 777 /app
RUN chmod -R 777 ~/.npm
RUN ls && npm install
RUN npm run build

EXPOSE 2345

CMD [ "npm", "run", "start:prod"]
