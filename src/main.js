// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store'

import Vue from 'vue'
import App from './App'
import router from './router'
import vFooter from './components/footer/footer'
import vHeader from './components/header/head'
import vBanner from './components/banner/Banner'
import axios from 'axios' 
import { IndexList, IndexSection ,Swipe, SwipeItem} from 'mint-ui'
import MintUI from 'mint-ui'
import IScroll from 'iscroll'
import vmaList from './components/integralList/maList'
import { Loadmore } from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Lazyload);
Vue.prototype.$http = axios
Vue.component(Loadmore.name, Loadmore);
//this.$http.get(url).then(res=>{ } )
Vue.component("v-footer",vFooter);
Vue.component("v-header",vHeader);
Vue.component("v-banners",vBanner);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
Vue.component("v-malist",vmaList)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
