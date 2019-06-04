FROM node:10

WORKDIR /usr/local/app

COPY package.json .

RUN yarn && yarn build

COPY . .

CMD ["yarn", "start"]