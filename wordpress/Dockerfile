FROM wordpress:latest

ENV WORDPRESS_DB_HOST db:3306
ENV WORDPRESS_DB_USER wp_user
ENV WORDPRESS_DB_PASSWORD database_password
ENV WORDPRESS_DB_NAME wordpress

WORKDIR /usr/src/wordpress/wp-content

COPY plugins plugins
COPY themes themes

RUN chown -R www-data:www-data /usr/src/wordpress/wp-content

WORKDIR /var/www/html