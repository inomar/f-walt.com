FROM wordpress:latest

ENV WORDPRESS_DB_HOST db:3306
ENV WORDPRESS_DB_USER wp_user
ENV WORDPRESS_DB_PASSWORD database_password
ENV WORDPRESS_DB_NAME wordpress

WORKDIR /var/www/html

COPY plugins /wp-content/plugins
COPY themes /wp-content/themes