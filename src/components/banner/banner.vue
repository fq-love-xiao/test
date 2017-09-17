<template>
	<div class="mint-swipe-item is-active" style="">
		<a href="javascript:">
			<div class="container">
				<img src="">
				<span class="title" v-text="">浪漫鲜花</span>
			</div>
		</a>
	</div>
</template>

<script>
	import Vue from 'vue'
	import  Vuex from 'vuex'
	Vue.use(Vuex)
	const store = new Vuex.State({
		state:{
			goodsList:[1,2,3]
		},
		computed:{
			getData(){
				
			}
		}
	})
</script>

<style>
	
</style>