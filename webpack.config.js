const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const MAIN_DIR = path.resolve(__dirname, './wedding/main');
const APP_DIR = path.resolve(__dirname, './frontend/src/js');
const ASSETS_DIR = path.resolve(__dirname, './frontend/assets');
console.log(__dirname)
var config = {
  entry: APP_DIR + '/index.js',
  plugins: [
    new CopyPlugin([
      { from: ASSETS_DIR, to: MAIN_DIR + '/static/assets' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/static/fonts/'
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/static/assets/'
        },
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  output: {
    path: MAIN_DIR,
    filename: 'static/js/main.js'
  }

};

module.exports = config;