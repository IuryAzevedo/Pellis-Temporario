# Use the official MySQL image as the base image
FROM mysql:latest

# Environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=pellis_db
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root

# Expose the MySQL port
EXPOSE 3306