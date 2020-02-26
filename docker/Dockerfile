FROM node:12-alpine
USER root
WORKDIR /usr/src/app
ADD . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3886