FROM node:8
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
