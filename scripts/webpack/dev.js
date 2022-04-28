const { merge } = require('webpack-merge');
const common = require('./common');
const { BUILD_DIRECTORY_PATH } = require('./path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: BUILD_DIRECTORY_PATH,
    },
    open: true,
    hot: true,
    compress: true,
    port: 9000,
  },
});
