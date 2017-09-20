<template>
	<div>
	
		<router-link :to="'/Jflist/'+ele.pid" class="mall-list" v-for="(ele,index) in maltData">
			<p class="eps" v-text="ele.text"></p>
			<p class="zzjf" v-text="ele.jifen"></p>
			<img :src="'http:'+ele.img"  alt="" />
		</router-link >
	
	</div>
</template>

<script>
	export default {
        name:"malist",
        data(){
        	return {
        		maltData:[]
        	}
        },
        mounted(){
        	
        	this.$http.get("/static/zscsj.json")
        	.then(res=>{
//    		console.log(res.data.maltDatalist)
				this.maltData = res.data.maltDatalist
        	}).catch(err=>console.log(err))
        }
       
    }
	
</script>

<style lang="less">
	.mall-list{
		width:3.58rem;
		height:3.23rem;
		background:#fff;
		float:left;
		border-bottom:0.02rem solid #f5f5f5;
		border-left:0.02rem solid #f5f5f5;
		overflow: hidden;
		color:#ff953d;
		.eps{
			font-size:0.25rem;
			margin-top:0.25rem;
			text-indent: 2em;
			color:#000;
		}
		.zzjf{
			font-size:0.21rem;
			margin-top:0.18rem;
			text-indent: 2em;
			
		}
		img{
			width:2.89rem;
			height:1.52rem;
			margin-left:0.43rem;
		};
	}
</style>