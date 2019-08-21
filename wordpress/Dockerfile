FROM wordpress

COPY ./config/ports.conf /etc/apache2/ports.conf

WORKDIR /usr/src/wordpress/wp-content

COPY plugins plugins
COPY themes themes

RUN chown -R www-data:www-data /usr/src/wordpress/wp-content

WORKDIR /var/www/html