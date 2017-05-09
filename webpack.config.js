const webpack = require('webpack');
const { resolve } = require('path');
module.exports = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: `bundle.js`
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015','babel-preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader!style-loader'
      },
      {
        test: /\.less$/,
        loader: 'less-loader'
      },
      {
        test: /\.(jpg|npg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer:{
    hot: true,
    lazy: false,
    compress: true,
    port: 9000,
      historyApiFallback: {
        rewrites: [
          { from: /^\/$/, to: '/index.html' },
          { from: /^\/*/, to: '/index.html' },
          { from: /./, to: '/views/404.html' }
        ]
      }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}
