FROM node:10.19.0-alpine
RUN apk add --update --no-cache tzdata bash curl
WORKDIR /var/www
COPY . ./
RUN mv entrypoint.sh /sbin/entrypoint.sh
RUN chmod +x /sbin/entrypoint.sh

RUN npm install 
ENTRYPOINT ["/sbin/entrypoint.sh"]