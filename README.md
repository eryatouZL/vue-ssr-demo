# 

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build:client 客户端打包文件

# build for production and view the bundle analyzer report
npm run build:server 服务端打包文件

node server.js 起服务喽 在这之前需要打包好客户端和服务端文件
需要src根目录下创建 客户端和服务端的入口js entry-client/entry-server
build 下 创建客户端和服务端的打包文件 webpack.client.cofig.js/webpack.server.config.js 

需要将router,app,stroe 写成工厂函数


新增加index.ssr.html 里面的vue-ssr-outlet 注释不能删除  使用了模板语法  htmlWebpackPlugin.options.files.js
```
