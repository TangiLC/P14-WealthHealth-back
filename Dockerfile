FROM node:lts-alpine

ADD . /app/
WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE 3003

CMD ["npm", "start"]
