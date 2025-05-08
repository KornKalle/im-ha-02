# Use official nginx alpine image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY assets ./assets

# Set custom nginx.conf to meet
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]