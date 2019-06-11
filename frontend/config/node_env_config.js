const env = process.env.ENV || 'development';

const configs = {
  development: {
    api: process.env.WP_URL,
  },
  production: {
    api: 'http://fwalt.cfbx.jp',
  },
}[env];

export default configs;