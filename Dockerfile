# Use official Node LTS
FROM node:20-bullseye-slim

WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install --production || true
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]
