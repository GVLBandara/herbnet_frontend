FROM nginx:alpine

COPY build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/
COPY keys/ /opt/keys

CMD ["nginx", "-g", "daemon off;"]

