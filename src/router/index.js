// const vueRouter = require("vue-router");
import Vue from 'vue'

import Router from 'vue-router'
// const Vue = require('vue')
Vue.use(Router);

import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

//  module.export = ()=> {
//    return new vueRouter({
//     mode:"history",//要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
//     routes: [
//       {
//         path: '/',
//         name: 'HelloWorld',
//         component: HelloWorld
//       }
//     ]
//   })
//  }
export  function createRouter(){
  return new Router({
    mode:"history",//要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/test',
        name: 'test',
        component: test
      }
    ]
  })
}
