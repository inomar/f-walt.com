FROM node:10

WORKDIR /usr/local/app

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "start"]