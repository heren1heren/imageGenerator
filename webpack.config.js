const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    // other plugins...
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML file
      inject: false,
    }),
  ],
};
