import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
Vue.use(Router)


//异步获取文件   首次加载不卡  使用这种方式
const mytest=test=>require(["../page/home/test"],test)//测试
const oc=hoec=>require(["../page/home/test"],hoec) //测试子页面
const Home=homes=>require(["../page/home/home"],homes)//home 页面    
const Discover=cover=>require(["../page/discover/discover"],cover)//发现页面
const My=mys=>require(["../page/my/my"],mys)//我的
const Order=myorder=>require(["../page/order/order"],myorder)//order
const Login=denglu=>require(["../page/login/login"],denglu)//login
const Error=err=>require(["../page/error/error"],err)//404
const Search=sear=>require(["../page/search/search"],sear)//ss
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path:'/test',
    	name:'Test',
    	component:mytest
    	
    },{
    	path:'/home',
    	name:'Home',
    	component:Home,
    	children: [{
            path: 'my', //home-my
            component: oc,
        },]
    },{
    	path: '/discover',
    	name:'Discover',
    	component: Discover
    },{
    	path: '/profile',
    	name: 'My',
    	component: My
    },{
    	path:'/order',
    	name:'Order',
    	component:Order
    },{
	  path: '/city',
	  component: function (resolve) {
	    require(['../page/city/city.vue'], resolve)
	  }
	},{
		path:'/login',
		name:'Login',
    	component:Login
	},
	{
		path:'/search',
		name:'Search',
    	component:Search	
	},
      { path: '/404', component:Error },
	  { path: '*', redirect: '/404' }  //redirect 路由重定向
	
  ]
})
