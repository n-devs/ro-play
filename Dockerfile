FROM node:18

WORKDIR /ro-play

# COPY package*.json ./
COPY . .


CMD [ "node", "serve.js" ]