const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
entry: './src/javascript/game.js',
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
},
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    }),
  ],
};