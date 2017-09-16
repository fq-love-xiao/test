<template>
	<div>	
		<v-headera></v-headera>
		<div v-for="ele in listData">
			<p>{{ele.foods[0].name}}</p>
			<!--<img :src="add(ele.foods[0].image_path"/>-->
		</div>
		
	
	</div>
	
</template>

<script>
	
	export default {
     name: 'test',
     data(){
     	return {listData:[]}
     },
     methods:{
     	add(imga){
     		
     	}
     },
     mounted(){
    		 this.$http.get("/ele/shopping/v2/menu?restaurant_id=157181951")
                .then(res=>{
//	    		 this.$http.get("/duiba/button/getitems?appItemNextPage=false&autoRecommendNextPage=false&appItemPage=1&autoRecommendPage=1&arunum=1&")
//              .then(res=>{
                   
                this.listData = res.data
                 console.log(res.data)
                 
                    
            }).catch(err=>console.log(err))
    	
    }
}
</script>

<style>
</style>