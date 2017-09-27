<template>
 <div>
  <v-header title="注册" :right-style="{width:'120px'}">
   <a slot="left" href="javascript:window.history.go(-1);"><</a>
    <p slot="right" >
        <!--<a href="javascript:;" @click="sheetVisible=true">购物车</a>
        <a href="javascript:;" @click="sheetVisible=true">三</a>-->
    </p>
  </v-header>
        <div class="logo">
           <div>
        	<span class="iconfont icon-eliaomo"></span>
        	<span class="elms">饿了么</span>
        	<span class="iconfont icon-eliaomo"></span>
        	
        	</div>
        </div> 
 
     <div class="form-list">
       <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="图形验证码" placeholder="请输入图形验证码" v-model="imgCaptcha">
             <img :src="captchaSrc"  @click="getCaptchaSrc" height="45px" width="100px">
        </mt-field>
         <mt-field label="验证码" placeholder="请输入短信验证码" v-model="captcha">
            <mt-button type="primary" @click="getCaptcha">获取验证码</mt-button>
         </mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
         <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="rPassword"></mt-field>
      
        <div>
         <mt-button @click="regSubmit" size="large" type="primary">注册</mt-button>
        </div>
    </div>
  

 </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import qs from "qs"
export default {
  name: 'home',
  data(){
      return {
        phone:"",
        imgCaptcha:"",
        captcha:"",
        password:"",
        rPassword:"",
        captchaSrc:"http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
    }
  },
 methods:{
     getCaptchaSrc(){
         this.captchaSrc="http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
     },
     getCaptcha(){
         //数据校验
//       if(this.imgCaptcha){
//
//       }

//         }
         //获取短信验证码
         this.$http.post(`/loho88/uc/mobile/register/code?captcha=${this.imgCaptcha}&mobile=${this.phone}`).then(res=>{
             console.log(res.data)
         })
     },
     regSubmit(){
         
         var params = {
                agreement:true,
                captcha:this.captcha  ,
                inputCaptcha:this.imgCaptcha ,
                password:this.password,
                repassword:this.rPassword,
                username:this.phone
         }
           console.log(qs.stringify(params))
         this.$http.post("/loho88/uc/mobile/register",qs.stringify(params),{
                headers:{
                    "Content-type":"application/x-www-form-urlencoded"
                }
         })
         //axios.post(url,params(params={a:1,b:2}/a=1&b=2&c=3),config)
         //{a:1,b:2} =>a=1&b=2&c=3  用qs.stringify
         //FormData =》需要设置请求头
        //  headers:{
        //     "Content-type":"application/x-www-form-urlencoded"
        // }
        //完成注册后保留信息（手机号）及其过滤  例如135****1234
         var  tel=this.phone+"";
         var mtel = tel.substr(0, 3) + '****' + tel.substr(7);  
         localStorage.setItem("phone",mtel);
     }
 }
  
}
</script>
<style lang="less" rel="stylesheet/less">
.logo{
	width: 100%;
	height: 280px;
	
	text-align: center;
	line-height: 280px;
	
	.icon-eliaomo{
		font-size: 40px;
		color: #00BFFF;
	}
	.elms{
		font-size: 50px;
		margin-top: -10px;
		color: #00BFFF;
	}
}
       
</style>