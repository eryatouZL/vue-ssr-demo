import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

// module.export = ()=> {
//   return new Store({
//     state:{},
//     mutation:{},
//     actions:{},
//     modules:{

//     }

//  })
// }
export  function createStore(){
  return  new Vuex.Store({
        state:{},
        mutation:{},
        actions:{},
        modules:{

        }

     })
}
