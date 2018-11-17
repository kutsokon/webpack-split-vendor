const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
          name: 'vendor',
          chunks: 'initial'
          /**
           * Switching 'chunks' param we can define whether to put dynamic imports
           * from node_modules.
           * 1) to vendor.chunk.js and cache it along side with other packages
           * 2) to a separate chunk and fetch it on demand
           * - chunks: 'all/initial',
           */
        }
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ]
};
