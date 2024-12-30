import path from 'path';
import { fileURLToPath } from 'url';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
  plugins: [
    new Dotenv(),
  ],
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
