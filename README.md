# WDIO/v8 Quickstart

## This project is a quickstart for [WebdriverIO](https://webdriver.io/) v8 framework. It is based on [Selenium Webdriver](https://selenium.dev/).

It can be used to test web applications in its current state. Docker config as well as Allure reporter are also available.

### Prerequisites
 - Node.js 16.13.0 or higher
 - [npm](https://www.npmjs.com/) 8.15.1 or higher
 - Open JDK 11 or higher (https://adoptopenjdk.net/)

### Clone repository
 - Run `git clone git@github.com:eurostyle/webdriverio_v8_quickstart.git`

### Local installation
 - Navigate to the project root directory
 - Run `npm install` to install dependencies
 - Run `npm run wdio` to run example tests
 - Run `npm run open-report` to open Allure report

### Docker installation
 - Open Docker desktop
 - RUN `docker build -t wdio:v8 -f Dockerfile .`
 - RUN `docker run -it -p 8080:8080 wdio:v8`

After running tests and generating report in Docker, on your machine open localhost with port 8080 to see the report. 
Reports older than 10 minutes are deleted. This `utils/allure.cleanup.ts`