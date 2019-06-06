const withSass = require('@zeit/next-sass');
module.exports = withSass({
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
    return config;
  },
  target: 'serverless',
});