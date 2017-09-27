<template>
	<div>
		<input type="text" v-model="keys" @keyup="getKeys($event)"/>
		<ul>
			<li v-for="">{{keys}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"search",
		data(){
			return{
				searchItem:null,
				searchDetail:null,
				keys:"",
				goodlistData:{},
				searchData:{}
			}
		},
		methods:{
			getKeys(ev){
				 if(ev.keyCode == 13){
                    console.log(this.keys)//拿到数据  进行请求搜索的数据和列表的数据
                    this.getSearchData();
                  }				
			},
			//商品搜索列表
			getSearchData(){
				 var round=Math.random();
				 var keys=this.keys;
				 this.$http.get(`/search/shopui?qt=shopdishsuggest&addr_id=185e6cd1fcb9a08b&word=${keys}&pre_only=0&page_num=0&range_num=5&${round}`)
		    		.then(res=>{ 
		    			this.searchData=res;
		    			console.log(this.searchData)
		    		}).catch(err=>console.log(err));
			},
		    //商品展示列表
			getListData(pageNum,count){
			this.$http.get(`/search/waimai/shoplist/185e6cd1fcb9a08b?display=json&page=${pageNum}&count=${count}`)
    		.then(res=>{   			  			
    			
    			this.goodlistData=res;
    			console.log(this.goodlistData)
    		})
    		.catch(err=>console.log(err))
			}
		},
		mounted(){ 
			console.log(this.keys)
			//this.getSearchData();
         //this.getListData(2,10);
		}
	 }
	
</script>

<style>
</style>