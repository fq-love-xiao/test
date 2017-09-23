import Vuex from "vuex"
import Vue from "vue"
import banner from './modules/bannerList'
Vue.use(Vuex) //需要vue.use
  var store=new Vuex.Store({
    // 其实这里完全可以不用modules，为了学习的完整性我改写的时候使用了modules
      modules: {
        banner  
      },
      
    })

export default store