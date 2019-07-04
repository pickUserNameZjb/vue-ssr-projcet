const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const merge = require('webpack-merge')
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const appConfig = require('../config/index')

baseConfig.entry = path.join(__dirname, '../src/client-entry.js')
const isDev = process.env.NODE_ENV === 'development'
let config = {
  target: 'web',
  entry:  {
    app: path.join(__dirname, '../src/client/client-entry.js')
  },
  plugins: [
    new VueClientPlugin()
  ]
}

if (isDev) { // 开发模式配置
  let devConfig = {

    devServer: {
      port: 8000,
      host: '0.0.0.0',
      headers: { 'Access-Control-Allow-Origin': '*' },
      overlay: {
        errors: true
      },
      historyApiFallback: {
        index: '/public/index.html'
      },
      hot: true
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: ['vue-style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
          ]
        },
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlPlugin({
        template: path.join(__dirname, 'template.html')
      })
      // new VueServerPlugin()
    ],
    output: {
      // libraryTarget: 'commonjs2',
      publicPath: 'http://127.0.0.1:8000/public/',
      path: path.join(__dirname, '../server-build')
    }
  }
  config = merge(devConfig, config)
} else { // 生产模式配置
  let prodConfig = {
    entry: {
      vendor: ['vue', 'lodash', 'axios', 'vue-router']
    },
    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        },

      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash:8].css',
      }),
    ],
    output: {
      filename: '[name].[chunkhash:8].js',
      publicPath: appConfig.target
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: "all",
        minSize: 0,
        name: 'common',
        minChunks: 2,
      }
    }
  }
  config = merge(prodConfig, config)
}

module.exports = merge(baseConfig, config)
