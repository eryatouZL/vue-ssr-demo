const vue = require('vue')
const app = new vue(({
  template:'<span>简单的ssr渲染{{mes}}</span>',
  data:{
    mes:'测试中'
  }
}))
const render = require('vue-server-renderer').createRenderer();
render.renderToString(app).then(html=>{
  console.log(html)
})
