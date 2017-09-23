import Vue from "vue"
export default {
	namespaced: true, //命名空间 

	state: {
		maltDatalist: [], //state 定义数据结构
		jifenglist: []

	},
	getters: {
		//cartData:state=>state.cartData,   
	},
	mutations: { //修改数据
		initCartData(state, maltDatalist) { //这个是列表页的
			
			//mutation拿到action提交的数据以后，修改state，
			state.maltDatalist = maltDatalist
		},
		detall(state, jifenglist) {  //获取列表详情页的数据  
			
			//mutation拿到action提交的数据以后，修改state，
			state.jifenglist = jifenglist
		},
		initCartDatadf(state, maltDatalist) { //上啦加载数据
			//maltDatalist
		state.maltDatalist = state.maltDatalist.concat(maltDatalist)
			console.log(state.maltDatalist)

		},
	},
	actions: {
		//异步获取数据
		// 获取列表数据  
		getmaltData(context) {

			//http://m.loho88.com/m-loho88/cart/item/196658/2
			//              Vue.prototype.$http.put(`/loho88/m-loho88/cart/item/${id}/${number}`).then(res=>{
			//                  console.log(res.data)
			//                  context.dispatch("getCartData") //修改数量以后，获取最新数据
			//              })
			Vue.prototype.$http.get("/static/zscsj.json") //在actions里面用vue.prototype
				.then(res => {
					console.log(res.data.maltDatalist)
					var maltDatalist = res.data.maltDatalist;
					// context.dispatch("getCartData") //修改数量以后，获取最新数据

					context.commit("initCartData",maltDatalist)
				}).catch(err => console.log(err))
		},
		//获取列表详情页的数据    
		DetalltData(context) {
			Vue.prototype.$http.get("/static/jflist.json").then(res => {
				var jifenglist = res.data.ssssss //获取的数据赋给
				//获取数据以后 ，把数据提交给 mutations
				context.commit("detall", jifenglist) //两个参数 第一个是设置的方法    第二个是数据
			})
		},
		getmaltDatadouble(context,page) {
			//上啦加载数据
			Vue.prototype.$http.get("/static/zscsj" + page + ".json").then(res => {

				var maltDatalistdf = res.data.maltDatalist;
				context.commit("initCartDatadf", maltDatalistdf)//两个参数 第一个是设置的方法    第二个是数据
			})
		}
	}
}