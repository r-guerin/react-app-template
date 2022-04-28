const dev = require('./dev');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(dev, {
  plugins: [new BundleAnalyzerPlugin()],
});
