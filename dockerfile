FROM node:latest
ADD app.js .
CMR ["node", "app.js"]