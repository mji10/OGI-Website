const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // hmr: process.env.NODE_ENV === "development",
          },
          // Translates CSS into CommonJS
          "css-loader",
          //   for adding autoprefix
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      //   Loading images
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },

      {
        test: /\.html$/i,
        use: [{ loader: "html-loader" }],
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'svg-sprite-loader',
      //       options: {
      //         extract: true,
      //         spriteFilename: 'sprite.svg', // Output file name
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    // new SpriteLoaderPlugin(),
  ],
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext][query]",
  },
};
