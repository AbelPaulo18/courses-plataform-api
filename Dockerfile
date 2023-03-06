FROM node:18

WORKDIR /usr/courses-api

COPY package.json ./

RUN npm install -g yarn -f

RUN yarn

COPY . .

EXPOSE 5000

CMD ["yarn", "start:dev"]