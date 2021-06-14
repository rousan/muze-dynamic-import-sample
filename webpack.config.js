const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outFilePath = path.resolve(__dirname, 'public');

module.exports = {
  entry: ['regenerator-runtime', path.resolve(__dirname, './src/index.js')],
  output: {
    path: outFilePath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve('./node_modules', '@chartshq/muze/dist'),
        to: "."
      },
    ]),
  ],
  devServer: {
    inline: true,
    contentBase: outFilePath,
  },
};