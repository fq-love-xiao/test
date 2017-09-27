<template>
	<div  v-html="html">	
    	  
   </div>
</template>
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.0&key=28ba04983a743c087a89a900e7c662c2&plugin=AMap.Autocomplete,AMap.PlaceSearch"></script>
<script type="text/javascript" src="http://cache.amap.com/lbs/static/addToolbar.js"></script>
 <script>

 export default{ 
        data(){
        	return{html:"this.str"}
        },
     
	};    
</script>
<style>
   #container{
   	   	width: 200px;
   	   	height: 200px;
   	   }
</style>