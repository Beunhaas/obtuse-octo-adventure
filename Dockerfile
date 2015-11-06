FROM node:latest
MAINTAINER leowakelkamp@gmail.com
ADD app.js .
CMR ["node", "app.js"]
