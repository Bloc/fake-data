module.exports = {
  entry: './index.js',
  output: {
    filename: './out.js',
    path: './'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      //{ test: /\.css\.sass$/, loaders: ["css", "sass"] },
      //{ test: /[\/]angular\.js$/, loader: 'exports?angular' },
    ]
  }
};
