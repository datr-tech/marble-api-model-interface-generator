import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    modules: ['node_modules'],
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    filename: 'index.js',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
};
