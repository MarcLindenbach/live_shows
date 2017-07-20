const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'axios',
  'axios-mock-adapter',
  'lodash',
  'prop-types',
  'react-addons-css-transition-group',
  'react-redux',
  'redux',
  'redux-thunk',
];

module.exports = {
  entry: {
    app: './src/index.js',
    init: VENDOR_LIBS
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use:
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  node: {
    fs: 'empty',
  },
};
