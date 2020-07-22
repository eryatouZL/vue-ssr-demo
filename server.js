/* server.js */
const express = require('express');
const server = express();
const { createBundleRenderer } = require('vue-server-renderer');
// const vueApp = require('./src/app.js');
const path = require("path");
const fs = require("fs");
const serverBundle = require(path.resolve(__dirname,"./dist/vue-ssr-server-bundle.json"));
const clientBundle = require(path.resolve(__dirname,"./dist/vue-ssr-client-manifest.json"));
const template = fs.readFileSync(path.resolve(__dirname,"./dist/index.ssr.html"),"utf-8");
const renderer =  createBundleRenderer(serverBundle,{
  runInNewContext:false,
  template:template,
  clientManifest:clientBundle
})


server.get('*', async (request, response) => {
  if(request.url != "'/favicon.ico'"){
    const context = {url:request.url};
    const ssrStream = renderer.renderToStream(context);
    let buffer = [];
    ssrStream.on('data',(data) => buffer.push(data));
    ssrStream.on('end',()=>{
      response.end(Buffer.concat(buffer))
    });
  }
})

server.listen(3001, () => {
  console.log('服务已开启')
})
