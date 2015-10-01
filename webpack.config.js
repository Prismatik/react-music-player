module.exports = {
  context: __dirname + '/src',
  entry: {
    html: './index.html',
    javascript: './index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.(html|mp3)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  }
}
