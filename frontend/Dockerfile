FROM node:10

WORKDIR /usr/local/app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]