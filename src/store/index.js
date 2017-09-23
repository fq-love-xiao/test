import Vuex from "vuex"
import Vue from "vue"
// 载入模块
import jifenLi from "./modules/jifenData"


Vue.use(Vuex) //需要vue.use
const store =new Vuex.Store({
   modules:{ //模块里 
   	jifenLi
   }
})

export default store