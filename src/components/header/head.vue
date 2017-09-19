
<template>  
  <div>
    <div id="header-banner">
       <span @click="back" class="left-header"><</span>
       	<p>{{title}}</p>
     </div>
  </div>
</template>
<script>
     export default {
        name:"header",
        props:{
            title:{
                type:String,
                default:"发现"
            }
        },
        methods:{
		      back:function(){
		         this.$router.go(-1)
		      }
        }
    }
</script>
<style lang="less">
@import url("../../style/less/media.less");
	#header-banner{
	width:100%;
	height:0.81rem;
	background:#00a5ff;
		.left-header{
		font-size:0.34rem;
		color:#fff;
		display:block;
		margin-top:0.12rem;
		margin-left:0.17rem;
		width:0.18rem;height:0.20rem;
		float:left;
		}
		p{
		text-align: center;
		display:block;
		font-size:0.34rem;
		color:#fff;
		line-height:0.81rem;
		font-weight: bold;
		}
	}

</style>