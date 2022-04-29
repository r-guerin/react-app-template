const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = require('./dev');

module.exports = merge(dev, {
  plugins: [new BundleAnalyzerPlugin()],
});
