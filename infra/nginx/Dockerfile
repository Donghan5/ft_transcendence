FROM nginx:alpine

RUN apk add --no-cache openssl && \
    mkdir -p /etc/ssl/certs && \
    mkdir -p /etc/ssl/private

RUN openssl req -newkey rsa:4096 -days 365 -nodes -x509 \
    -subj "/C=FR/ST=IDF/L=Paris/O=42/OU=42/CN=localhost" \
    -out /etc/ssl/certs/transcendence.crt \
    -keyout /etc/ssl/private/transcendence.key

COPY infra/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
