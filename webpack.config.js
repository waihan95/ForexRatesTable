const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: './public',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {

    fallback: {
      fs: false,
      path: false,
      crypto: false,
      http: false,
      https: false,
      stream: false,
      zlib: false,
      buffer: false,
      net: false,
      tls: false,
      url: false,
    },
  },
  mode: 'development',
};

