FROM node:18-alpine as base

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000