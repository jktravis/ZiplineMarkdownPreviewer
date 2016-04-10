// webpack.config.js
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './build/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test:/\.css/,
        loaders: ["style", "css"]
      },
      { 
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, 
        loader: "file" },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};