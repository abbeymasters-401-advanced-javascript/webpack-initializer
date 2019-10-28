const { write } = require('../writer/writer');

function webpackWriter(path) {

  const webpackInfo = `const HTMLPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: './bundle.[hash].js'
    },
    devServer: {
      port: 7890
    },
    plugins: [
      new HTMLPlugin({ template: './src/index.html' }),
      new CleanWebpackPlugin
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')(),
                  require('postcss-nested')()
                ]
              }
            }
          ]
        },
        {
          test: /\.(jpeg|jpg|png|svg)$/,
          use: {
            loader: 'url-loader',
            options: { limit: 1000 },
          },
        }
      ]
    }
  };`;

  write(webpackInfo, `${path}/webpack.config.js`);
}

module.exports = {
  webpackWriter
};
