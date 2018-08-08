FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install dependencies and bundle
COPY package*.json ./
RUN npm install
ADD . .

# Map app to port 8080
EXPOSE 8080

# Run app
CMD [ "npm", "start" ]
