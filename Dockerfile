FROM node:latest
MAINTAINER leowakelkamp@gmail.com
ADD app.js .
CMD ["node", "app.js"]
