# Use official nginx image
FROM nginx:latest

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy our custom website into nginx folder
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
