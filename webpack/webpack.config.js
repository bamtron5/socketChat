var webpack = require('webpack');
var isProd = JSON.parse(process.env.PROD_ENV || '0'); // `PROD_ENV=1 webpack`
var analyze = JSON.parse(process.env.ANALYZE || '0');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: __dirname + '/../client/app/app.module.ts'
  },
  output: {
    path: __dirname + '/../client/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'inline-source-map',
  plugins: [
    // new BrowserSyncPlugin({
    //   // browse to http://localhost:3000/ during development,
    //   // ./public directory is being served
    //   host: 'localhost',
    //   port: 8080,
    //   proxy: 'http://localhost:3000',
    //   files: ['../client/dist/bundle.js'],
    //   injectChanges: false
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../server/views/index.html'),
      hash: true
    }),
    isProd ? new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }) : function () {},
    analyze ? new BundleAnalyzerPlugin() : function () {},
    analyze ? new OpenBrowserPlugin({url: '127.0.0.1:8888'}) : function () {}
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: ['/node_modules/']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
