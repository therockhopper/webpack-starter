 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
   },
   devtool: 'inline-source-map',
   devServer: {
     static: {
       directory: path.join(__dirname, 'public'),
     },
     compress: true,
     port: 9000,
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: 'src/index.html'
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   optimization: {
     runtimeChunk: 'single',
   },
 };
