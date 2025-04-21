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
      '@app-marble-api-model-interface-generator': path.resolve(__dirname, 'src/'),
    },
  },
	target: "node",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
};
