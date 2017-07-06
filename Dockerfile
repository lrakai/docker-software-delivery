FROM node:6
EXPOSE 3000
EXPOSE 8080
COPY ./src /app
WORKDIR /app

RUN npm install --production && npm run build
CMD ["NODE_ENV=production", "npm", "start"]