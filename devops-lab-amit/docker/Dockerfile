# Use lightweight, secure base image
FROM node:20-alpine

# Set execution workspace context
WORKDIR /app

# Optimize layer dependencies caching
COPY app.js ./

# Expose microservice ingress port
EXPOSE 3000

# Execute server file
CMD ["node", "app.js"]
