const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/App.js',
    list: './src/component/List.js',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
      favicon: path.resolve('./public/favicon.ico'),
      title: 'WEB COMPONENT',
    }),
    new WebpackBar({
      color: 'green',
      name: 'webpack component',
      reporters: ['fancy'],
      reporter: {
        done({state}) {
          if (!state.hasErrors) {
            process.stderr.write(' ......................我佛慈悲...................... \n');
            process.stderr.write('                       _oo0oo_                      \n');
            process.stderr.write('                      o8888888o                     \n');
            process.stderr.write('                      88" . "88                     \n');
            process.stderr.write('                      (| -_- |)                     \n');
            process.stderr.write('                      0\\  =  /0                     \n');
            process.stderr.write('                    ___/‘---’\\___                   \n');
            process.stderr.write('                  .\' \\|       |/ \'.                 \n');
            process.stderr.write('                 / \\\\|||  :  |||// \\                \n');
            process.stderr.write('                / _||||| -卍-|||||_ \\               \n');
            process.stderr.write('               |   | \\\\\\  -  /// |   |              \n');
            process.stderr.write('               | \\_|  \'\'\\---/\'\'  |_/ |              \n');
            process.stderr.write('               \\  .-\\__  \'-\'  ___/-. /              \n');
            process.stderr.write('             ___\'. .\'  /--.--\\  \'. .\'___            \n');
            process.stderr.write('          ."" ‘<  ‘.___\\_<|>_/___.’ >’ "".          \n');
            process.stderr.write('         | | :  ‘- \\‘.;‘\\ _ /’;.’/ - ’ : | |        \n');
            process.stderr.write('         \\  \\ ‘_.   \\_ __\\ /__ _/   .-’ /  /        \n');
            process.stderr.write('     =====‘-.____‘.___ \\_____/___.-’___.-’=====     \n');
            process.stderr.write('                       ‘=---=’                      \n');
            process.stderr.write('                                                    \n');
            process.stderr.write('....................佛祖开光 ,永无BUG...................\n');
            process.stderr.write('------------------------------------------------------\n');
            process.stderr.write('|          网址链接   http://localhost:3000          |\n');
            process.stderr.write('------------------------------------------------------\n');
          }
        },
      },
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
    noInfo: true,
    stats: {
      errors: true,
      warnings: true,
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minSize: 20,
          priority: 10,
        },
        common: {
          name: 'common',
          test: /[\\/]src[\\/]/,
          minSize: 5,
          chunks: 'all',
          priority: 5,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader',
      },
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
  },
};
