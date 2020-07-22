
const Vue = require('vue')
const App = require('./App')
const  createRouter = require('./router')
const  createVuex = require('./store')
//
// export a factory function for creating fresh app, router and store
// instances
function createApp () {
  const router = createRouter;
  const store = createVuex;
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app,router,store }
}
export {createApp}

