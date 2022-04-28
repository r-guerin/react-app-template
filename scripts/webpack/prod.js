const common = require('./common');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
});
