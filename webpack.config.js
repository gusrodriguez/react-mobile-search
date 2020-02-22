const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './');

const config = {
  entry: `${APP_DIR}/src/index.js`,

  // Where to output the js bundle
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
  },
  module: {
    rules: [
      // ES6 Loader
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      // Sass loader
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      // Fonts
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]',
        exclude: /node_modules/,
      },
    ],
  },
  // Be able to concat all the css files in one.
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.LoaderOptionsPlugin({
      // Minimize the css
      minimize: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CopyWebpackPlugin([{ from: `${APP_DIR}/index.html` }]),
  ],
  watch: false,
  devtool: 'source-map',
  watchOptions: {
    poll: true,
  },
};

module.exports = config;
