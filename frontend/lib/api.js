import WPAPI from 'wpapi';

class Api {
  constructor() {
    this.endpoint = new WPAPI({ endpoint: `http://fwalt.cfbx.jp/wp-json` });
  }

  news() {
    this.endpoint.news = this.endpoint.registerRoute('wp/v2', '/news/(?P<id>[0-9]+)');
    return this.endpoint.news();
  }

  lives() {
    this.endpoint.lives = this.endpoint.registerRoute('wp/v2', '/live/(?P<id>[0-9]+)'); 
    return this.endpoint.lives();
  }

  videos() {
    this.endpoint.videos = this.endpoint.registerRoute('wp/v2', '/video/(?P<id>[0-9]+)');
    return this.endpoint.videos();
  }
}

export default Api;
