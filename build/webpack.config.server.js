const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const isDev = process.env.NODE_ENV === 'development'


const config = {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../src/client/server-entry.js')
  },
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
    new VueServerPlugin()
  ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  }
}
if (isDev) { // 开发模式配置

}


module.exports = merge(baseConfig, config)
