FROM wordpress

WORKDIR /usr/src/wordpress/wp-content

COPY plugins plugins
COPY themes themes

RUN chown -R www-data:www-data /usr/src/wordpress/wp-content

WORKDIR /var/www/html