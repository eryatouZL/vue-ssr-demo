import { createApp } from './main'

const getData = function(){
  return new Promise((reslove, reject) => {
      let str = 'this is a async data!';
      reslove(str);
  })
}

export default context => {
  return new Promise((resolve, reject)=>{
    const {app,router,store} = createApp();
    router.push(context.url);
     // 数据传递
    //  context.propsData = 'this is a data from props!'
    // context.asyncData = await getData();
    router.onReady(()=>{
      const matchedComponents = router.getMatchedComponents();//得到对应的匹配节点的方法
      if(!matchedComponents){
        return reject({code:404})
      }
      // 遍历路由下所以的组件，如果有需要服务端渲染的请求，则进行请求
      Promise.all(matchedComponents.map(component => {
          if (component.serverRequest) {
              return component.serverRequest(app.$store)
          }
      })).then(() => {
        // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
        context.state = store.state;
        // 返回根组件
          resolve(app)
      }).catch(reject)
    })
  })

}
