const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const createVueLoaderOptions = require('./vue-loader.config.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  entry:  path.join(__dirname, '../src/client/client-entry.js'),
  resolve: {
   extensions: ['.js', '.json', '.vue'],
   alias: {
     '@views': path.join(__dirname, '../src/client/views')
   }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions()
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'template.html')
    }),
    new VueLoaderPlugin(),
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.[hash:8].js'
  }
}
module.exports = config
