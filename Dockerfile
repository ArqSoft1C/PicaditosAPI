FROM node:carbon-slim

# Create app directory
WORKDIR /git/picaditos-api

# Install app dependencies
COPY package.json /git/picaditos-api/
RUN npm install

# Bundle app source
COPY . /git/picaditos-api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
EXPOSE 5000
