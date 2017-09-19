// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vFooter from './components/footer/footer'
import vHeader from './components/header/head'
import vContent1 from './components/contentzsc/contetntzsc1'
import axios from 'axios' 
import { IndexList, IndexSection } from 'mint-ui'
import MintUI from 'mint-ui'
import IScroll from 'iscroll'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$http = axios
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//this.$http.get(url).then(res=>{ } )
Vue.component("v-footer",vFooter);
Vue.component("v-header",vHeader);
Vue.component("v-content1",vContent1);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
