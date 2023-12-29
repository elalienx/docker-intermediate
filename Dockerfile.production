# Operating system and app
FROM node:20-slim as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Web server
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html