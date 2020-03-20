const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',

  stats: {
    assetsSort: 'chunks',
    version: false,
    entrypoints: false,
  },

  devServer: {
    https: true,
    publicPath: '/',
    host: '0.0.0.0',
    port: 8000,
    contentBase: path.join(__dirname, 'assets'),
    stats: {
      assetsSort: 'chunks',
      excludeAssets: /(^lib\/|.map$)/,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      cached: false,
      cachedAssets: false,
      chunkModules: false,
      chunks: false,
      entrypoints: false,
      modules: false,
    },
  },

  node: {
    fs: 'empty',
  },

  entry: './src/index.js',

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        arjs: { name: 'vendor~arjs', test: /[\\/]node_modules[\\/]ar\.js/, priority: 10 },
        shared: { name: 'vendors~shared', test: /[\\/]node_modules/ },
      },
    },
  },

  module: {
    strictExportPresence: true,
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({ THREE: 'three' }),
    new HtmlWebpackPlugin({ inject: 'head', template: './src/index.html' }),
  ],
};
