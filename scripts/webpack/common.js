const HtmlWebPackPlugin = require('html-webpack-plugin');
const { BUILD_DIRECTORY_PATH } = require('./path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        loader: 'swc-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: '[name][ext]',
    path: BUILD_DIRECTORY_PATH,
    clean: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
