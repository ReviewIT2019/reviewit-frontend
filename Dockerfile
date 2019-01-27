FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx stuff
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular project to
WORKDIR /usr/share/nginx/html
COPY dist/frontend/ .