const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const port = process.env.PORT || 3000;
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
    runtimeChunk: {
      name: "runtime",
    },
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].min.css",
    }),
    new HtmlWebpackPlugin({
      inject: "head",
      template: "src/index.html",
    }),
  ],

  devtool: "inline-source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: devMode ? "[name].js" : "[name].[contenthash].js",
    path: path.resolve(__dirname, "web"),
  },
};
