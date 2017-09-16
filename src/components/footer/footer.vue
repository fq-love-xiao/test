<template>    
    <div class="footer">
       <ul>
           <li>
              <router-link to="/">
            	<span class="iconfont icon-eliaomo"></span>              
                <span>外卖</span>
              </router-link>
           </li>
            <li>
              <router-link to="/discover">
                  <span class="iconfont icon-faxian"></span>
                  <span>发现</span>
              </router-link>
           </li>
            <li>
              <router-link to="/order">
               <span class="iconfont icon-dingdan"></span>
             	<span>订单</span>
              </router-link>
           </li>
            <li>
              <router-link to="/profile">
               <span class="iconfont icon-wode"></span>
              <span>我的</span>
              </router-link>
           </li>
       </ul>
    </div>  
</template>
<script>
    export default{
        name:"footer",

    }
</script>
<style lang="">
  
    .footer{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:50px;
        border-top:1px solid #ccc;
        background:#fff;
    }
    .footer ul li{
        float:left;
        width:25%;
    }
</style>