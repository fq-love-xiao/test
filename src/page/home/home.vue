<template>
	<div>		
		 <v-mapw></v-mapw>
		<v-header title="首页">
			
		</v-header>
		<v-footer>
			
		</v-footer>
	</div>
</template>

<script>
	import IScroll from 'iscroll';
	import Vue from 'vue';

	  
	export default {
       name: 'test',
       data(){
       	 return{
       	 	
       	 }
       }, 
     
    methods:{
    	add(){
    		console.log("kaishi")
    		 this.$http.get("/api/recommend/home?id=10&page=1&num=10")
                .then(res=>{
                    console.log( res.data.data.list)
                    this.listData = res.data.data.list
                 //console.log(res)
                    
            }).catch(err=>console.log(err))
    	},
    	elm(){
    		  this.num+=24;
    		console.log(this.num);
    		 this.$http.get(`/elm/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wx4exb5q3rc&latitude=39.99135&limit=24&longitude=116.36072&offset=${48}&terminal=web`)
                .then(res=>{
                    //console.log(res)                   
            }).catch(err=>console.log(err))
    	},
    	weatherss(){
    		//http://d7.weather.com.cn/fishing/api/v1/tab?lon=116.407526&lat=39.90403
    		//this.$http.get("/weather/v1/tab?stationId=101010100") 根据城市ID切换 40.117618 116.250627
    		this.$http.get("/weather/v1/tab?lon=116.407526&lat=39.90403")
    		.then(res=>{  			
    			//console.log(res)
    		})
    		.catch(err=>console.log(err))
    	},
    },
    mounted(){
    	//console.log(IScroll)
    	this.$http.get("/weather/v1/tab?lon=116.407526&lat=39.90403")
    		.then(res=>{
    			this.weather=res.data.result;   			
    			//console.log(this.weather)
    		})
    		.catch(err=>console.log(err))
    }
}
</script>

<style lang="less" rel="stylesheet/less">
@import "../../style/less/media.less";
 @import "../../style/css/base.css";
</style>