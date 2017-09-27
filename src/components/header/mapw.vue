<template>
	<div class="headers">
		<div class="map">
			<router-link to="/city">
				     <p  v-on:lists="respo" >
				     	<span class="iconfont icon-dizhi1"></span>
				     	<span class="dizhi">{{map}}</span>
				     </p>								
			</router-link>
		</div>
		<div class="weather">
			<router-link to="/weather">
			      <span class="dizhi" v-if="weather.dayTemp">{{weather.dayTemp}}°</span>
		          <span class="dizhi">{{weather.dayWindDirection}}</span>
		          <span :class="iconmoon"></span>
		    </router-link>      
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				map:"city",
			   weather:{},
			   iconmoon:null
			}
		},
		
		methods:{
			respo:function(data){
				console.log(this);
				this.map=data;
			}
		},
		mounted(){
			 this.map=localStorage.getItem("map")+"";
			 console.log(localStorage.getItem("map"));
			this.$http.get("/weather/v1/tab?lon=116.407526&lat=39.90403")
    		.then(res=>{
    			this.weather=res.data.result;   			
    			console.log(this.weather)
    		})
    		.catch(err=>console.log(err));
    		//切换时间标志
    		var str=new Date().getHours();   		   
    		   if (6<str&&str<18) {
    		   	  this.iconmoon="iconfont icon-taiyang"
    		   } else{
    		   	 this.iconmoon="iconfont icon-yueliang"
    		   }
		}
	}
</script>

<style lang="less" rel="stylesheet/less">

	.headers{
		width: 100%;
		height: 0.55rem;
		background-color: skyblue;
		.weather{
		background-color: skyblue;
		width:30%;
		float: right;
		margin-right: 10px;
		height: .55rem;
		font-size: 14px;
	}
	}
	
	.map{
		
		width: 50%;
		float: left;
		font-size: 14px;
		margin-left: 25px;
	}
	.iconfont{
		    font-size: .45rem;
	}
	.dizhi{
		margin-left: .2rem;
		  font-size: 20px;
	}
</style>