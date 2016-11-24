import { join } from 'path'

export default {
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'quranExplorer',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: join(__dirname, 'src') },
      { test: /\.txt$/, loader: 'raw', include: join(__dirname, 'src') },
    ],
  },
}