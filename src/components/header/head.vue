<template>  
  <div>
    
    <ul class="navlist">
        <li class="title-nav" v-for="(nav,index) in titleNav">{{nav}}</li>
    </ul>
  </div>    
</template>
<script>
     export default {
        name:"header",
        data(){
            return {
                titleNav:[]
            }
        },
        props:{
            title:{
                type:String,
                default:"default data"
            }
        },
        methods:{
		      back:function(){
		         this.$router.go(-1)
		      }
        },
        mounted() {
            this.$http.get("/static/index.json")
            .then(res=>{
                this.titleNav= res.data.titleNav
                // console.log(this.title)
            })
        }
    }
</script>
<style lang="less">
 @import "../../style/less/media.less";
 @import "../../style/css/base.css";
    .navlist{
        width:100%;
        height:0.6rem;
        line-height:0.6rem;
        background:blue;
        padding:0 0.3rem;
        position:fixed;
        top:0;
        left:0;
        z-index:3;
       display: flex;
       justify-content: space-between;
        
        li{
            float:left;
            space:around;
            color:#fff;
            font-size:14px;
        }
    }
</style>