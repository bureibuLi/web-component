const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./public/index.html'),
      filename: 'index.html',
      favicon: path.resolve('./public/favicon.ico'),
      title: "WEB COMPONENT"
    }),
    new WebpackBar({
      color:'green',
      name:'webpack component',
      reporters: ['fancy'],
      reporter: {
        progress({ state }) {
          if ( state.progress === 0) {
            process.stderr.write('http://localhost:3000 \n');
          }
        },
      },
    }),
    new ESLintPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
    noInfo: true,
    stats: {
      errors: true,
      warnings: true,
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  }
};
