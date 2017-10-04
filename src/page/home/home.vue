<template>
	<div>
		<!--<p  @click="add">home home home</p>-->
		<v-header title="首页">
			
		</v-header>
		 <v-banners>
				
		 </v-banners> 
		 
		<v-footer>
			
		</v-footer>
	
	</div>
</template>

<script>
	import IScroll from 'iscroll'
	export default {
     name: 'test',
     state:{
     	listData:[]
     },
    methods:{
    	add(){
    		console.log("kaishi")
    		 this.$http.get("/api/recommend/home?id=10&page=1&num=10")
                .then(res=>{
                    console.log( res.data.data.list)
                    this.listData = res.data.data.list
                 console.log(res)
                    
            }).catch(err=>console.log(err))
    	}
    },
    mounted(){
    	console.log(IScroll)
    }
}
</script>

<style>
</style>