<template>
	<div id="container">
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="allLoaded" :autoFill="false">
			<router-link :to="'/Jflist/'+ele.pid" class="mall-list" v-for="(ele,index) in maltData">
				<p class="eps" v-text="ele.text"></p>
				<p class="zzjf" v-text="ele.jifen"></p>
				<img v-lazy.container="'http:'+ele.img" alt="" />
			</router-link>
		</mt-loadmore>
	</div>
</template>

<script>
	export default {
		name: "malist",
		data() {
			return {
				allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据
				page: 0,
				scrollMode: "auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动 
			}
		},
		// vuex  使用  通过该方法获取store
		computed: { //计算属性
			maltData() {
				//通过计算数据  实时接收数据
				return this.$store.state.jifenLi.maltDatalist

			},
			getPage() {
				return this.$store.state.jifenLi.page
			}
		},

		mounted() { //加载后 添加 
			console.log(this.page);
			//      	this.$http.get("/static/zscsj.json")
			//      	.then(res=>{
			//   		console.log(res.data.maltDatalist)
			//				this.maltData = res.data.maltDatalist
			//      	}).catch(err=>console.log(err))
			//      }
			this.$store.dispatch("jifenLi/getmaltData") //向action派发

		},
		methods: { //方法
			loadBottom() {
				// 添加数据到页面通过上啦加载的方式
				console.log(this.page);
				this.page++;
				// 用于触发一个action发法 来添加数据
				this.$store.dispatch("jifenLi/getmaltDatadouble", this.page)
				// 加载更多数据
//				this.allLoaded = true; // 若数据已全部获取完毕
				this.scrollMode = "touch";
				this.$refs.loadmore.onBottomLoaded();
			}
		}
	}
</script>

<style lang="less">
	.mall-list {
		width: 3.58rem;
		height: 3.23rem;
		background: #fff;
		float: left;
		border-bottom: 0.02rem solid #f5f5f5;
		border-left: 0.02rem solid #f5f5f5;
		overflow: hidden;
		color: #ff953d;
		.eps {
			font-size: 0.25rem;
			margin-top: 0.25rem;
			text-indent: 2em;
			color: #000;
		}
		.zzjf {
			font-size: 0.21rem;
			margin-top: 0.18rem;
			text-indent: 2em;
		}
		img {
			width: 2.89rem;
			height: 1.52rem;
			margin-left: 0.43rem;
		}
		
		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
	}
</style>