FROM alpine:3.17
#!Change project name
WORKDIR /usr/webdriverio_v8_quickstart
COPY package*.json ./
COPY . .
RUN apk add nodejs-current npm
RUN npm install
#install browser drivers
RUN apk add firefox
RUN apk add chromium
#jdk11 for allure-report support
RUN apk add openjdk11
ENV export JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:/bin/java::")
