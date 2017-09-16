<template>  
  <div>
    <ul>
        <li>
               <span @click="back" class="left"><</span>          
        </li>
        <li>
                {{title}}        
        </li>
        <li>
                <slot name="right"></slot>
        </li>
    </ul>
  </div>    
</template>
<script>
     export default {
        name:"header",
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
        }
    }
</script>
<style lang="">
    
</style>