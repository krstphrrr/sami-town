FROM node:21.7-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node ./src .

RUN npm i 

EXPOSE 3000

CMD ["npm", "start"]