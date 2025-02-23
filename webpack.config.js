const webpack = require('webpack');
const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const config = {
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
  },
  plugins: [
    new HtmlBundlerPlugin({
      filename: 'test1.html',
			entry: {
				index: 'src/index.html',
			},
      
      js: {
        // JS output filename, used if `inline` option is false (defaults)
        // filename: 'js/[name].[contenthash:8].js',
        inline: true, // inlines JS into HTML
      },
      css: {
        // CSS output filename, used if `inline` option is false (defaults)
        // filename: 'css/[name].[contenthash:8].css',
        inline: true, // inlines CSS into HTML
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|jpe?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
};

module.exports = config;