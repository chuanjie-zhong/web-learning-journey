// webpack 配置文件
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",//模式 producion为生产环境 development为开发模式
  entry: "./src/index.js", //入口
  output: {
    path: resolve(__dirname, "dist"), //输出文件夹的绝对路径
    filename: "main.js", //输出的文件名
  },
  module: {//loader
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins:[//插件
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    })
  ]
};
