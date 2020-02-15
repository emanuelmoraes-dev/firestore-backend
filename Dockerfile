FROM node:12-alpine
WORKDIR /usr/src/app
ADD . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3886