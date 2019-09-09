FROM wordpress:latest

RUN set -ex; \
    apt-get update && apt-get install -y \
        wget \
        unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /tmp/wp-plugins

RUN set -ex; \
    wget -q -O advanced-custom-fields.zip https://downloads.wordpress.org/plugin/advanced-custom-fields.5.8.3.zip \
    && wget -q -O rest-api.zip https://downloads.wordpress.org/plugin/rest-api.2.0-beta15.zip \
    && wget -q -O acf-to-rest-api.zip https://downloads.wordpress.org/plugin/acf-to-rest-api.3.1.0.zip \
    && wget -q -O jetpack.zip https://downloads.wordpress.org/plugin/jetpack.7.7.zip \
    && wget -q -O no-category-base-wpml.zip https://downloads.wordpress.org/plugin/no-category-base-wpml.zip \
    && wget -q -O wp-api-menus.zip https://downloads.wordpress.org/plugin/wp-api-menus.zip \
    && wget -q -O custom-post-type-ui.zip https://downloads.wordpress.org/plugin/custom-post-type-ui.1.6.2.zip \
    && unzip -q -o '*.zip' -d /usr/src/wordpress/wp-content/plugins \
    && chown -R www-data:www-data /usr/src/wordpress/wp-content \
    && rm -rf /tmp/*

WORKDIR /tmp/wp-themes

RUN set -ex; \
    wget -q -O headless-wp-theme.zip https://github.com/inomar/headless-wp-theme/archive/master.zip \
    && unzip -q -o '*.zip' -d /usr/src/wordpress/wp-content/themes \
    && rm -rf /tmp/*

WORKDIR  /var/www/html
EXPOSE 9000