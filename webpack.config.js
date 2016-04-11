var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src/js'),
  entry: './main.js',
  output: {
    publicPath: '/dist/',
    path: path.resolve('./dist/'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'src'
  },

  plugins: [
    // allows for global variables
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": 'jquery'
    })
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ], 
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      },
      {
        test:/\.css/,
        exclude: /node_modules/,
        loaders: ["style", "css"]
      },
      { 
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        exclude: /node_modules/,
        loader: "file"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};