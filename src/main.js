// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index'
import { createStore } from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
//导出一个工厂函数，用来创建新的vue实例
const router = createRouter()
const store = createStore()
export  function createApp (){

  const app = new Vue({
      router,
      store,
      render: h => h(App)
  })

    return {app,router,store};
}

