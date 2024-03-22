FROM node:20

WORKDIR /the/workdir/path

COPY package*.json .

RUN npm install

COPY . . 

CMD ["npm","run","dev"]


