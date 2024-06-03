FROM node:18

WORKDIR /ro-play

COPY package*.json ./
COPY serve.js ./


CMD [ "node", "serve.js" ]