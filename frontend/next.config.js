require('dotenv').config;
const withSass = require('@zeit/next-sass');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = withSass({
  publicRuntimeConfig: {
    WP_URL: process.env.WP_URL
  },
  webpack (config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      }
    })
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.plugins.push(new webpack.DefinePlugin({ "global.GENTLY": false }));
    // config.plugins.push(new Dotenv({ path: path.join(__dirname, '.env'), systemvars: true }));
    return config;
  },
  target: 'serverless',
});