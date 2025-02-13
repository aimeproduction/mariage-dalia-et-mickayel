FROM node:18-alpine AS build
WORKDIR /app

COPY . .
RUN npm install --force
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/dalia-et-mickayel/browser /usr/share/nginx/html
