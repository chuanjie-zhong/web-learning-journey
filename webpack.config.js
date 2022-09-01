// webpack 配置文件
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  mode: "development",//模式 producion为生产环境 development为开发模式
  entry: "./src/index.js", //入口
  output: {
    path: resolve(__dirname, "dist"), //输出文件夹的绝对路径
    filename: "main.js", //输出的文件名
    clean:true
  },
  module: {//loader
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins:[//插件
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  //devServer会启动一个HTTP开发服务器，把一个文件作为静态根目录
  //为了提高性能，使用的内存文件系统
  // 默认情况下DevServer会读取打包后的路径
  // 其实静态文件根目录有多个
  devServer:{//热更新
    contentBase:resolve(__dirname,'dist'),
    writeToDisk:true,//如果指定此选项，也会把打包后的文件写入硬盘一份
    port:8080,//指定HTTP服务端口号
    open:true,//自动开启
    compress:true,//是否进行压缩
  }
};
