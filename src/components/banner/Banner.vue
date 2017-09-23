 
 <template>      
        <div class="slide-box">
            <mt-swipe :auto="4000">
              <mt-swipe-item>
                    <router-link to="/home">
                        <ul class="icon-list">
                            <li class="icon-item" v-for="(ele,index) in swipeData1" :key="index">
                                <img  class="icon-img" :src="ele.goodsImg">
                                <p class="icon-title" v-text="ele.goodsName"></p>
                            </li>
                        </ul>
                    </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="/home">
                      <ul class="icon-list">
                            <li class="icon-item" v-for="(ele,index) in swipeData2" :key="index">
                                <img  class="icon-img" :src="ele.goodsImg">
                                <p class="icon-title">{{ele.goodsName}}</p>
                            </li>
                     </ul>
                </router-link>
              </mt-swipe-item>          
            </mt-swipe>   
            <div class="shoplist">
                <h1>推荐商家</h1>
                <div class="shop-wrap">
                 <mt-loadmore                  
                    :bottom-method="loadBottom"
                    ref="loadmore"
                    :bottom-all-loaded="allLoaded"
                    :autoFill="false"
                 >
                    <ul class="shops" v-for="(shopData , index) in shopsname">
                      <!--  <dt @click="getImg(shopData.image_path)">-->
                      <li class="shop-content">
                      <h2 class="shop-img">
                             <span v-if="shopData.image_path.indexOf('png') > 0">
                               <img  class="lo" v-lazy =" 'https://fuss10.elemecdn.com/'+shopData.image_path.substr(0,1)+'/'+shopData.image_path.substr(1,2)+'/'+shopData.image_path.substr(3)+'.png'" alt="">
                            </span>
                            <span v-else>
                             
                                <img  v-lazy=" 'https://fuss10.elemecdn.com/'+shopData.image_path.substr(0,1)+'/'+shopData.image_path.substr(1,2)+'/'+shopData.image_path.substr(3)+'.jpeg'" alt="">
                            </span>  
                                                      
                        </h2>   
                        <div class="price">                    
                            <p class="shops-name">{{shopData.name}}</p> 
                            <p class="shop-num">月销售量:{{shopData.recent_order_num}}</p>
                            <p class="shop-num">配送费￥{{shopData.float_delivery_fee}}</p>
                            <p  class="shop-num" v-if="shopData.supports.length>0">{{shopData.supports[0].icon_name}}<span class="lead_time">{{shopData.order_lead_time}} + 分钟</span></p>                            
                        </div>
                        </li>
                                        
                    </ul>
                   </mt-loadmore> 
                </div>
            </div>
        </div>
</template>

<script>
import  Vue from 'vue';
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
     export default {
        name:"header",
        // data(){
        //     return{
        //         // swipeData1:[],
        //         // swipeData2:[],
        //         shopsname:[],
                
        //     }
        // },
        data(){
            return {
                allLoaded: false,
                page:1
            }
        },
        computed:{
            swipeData1(){
                return this.$store.state.banner.swipeData1
            },
            swipeData2(){
                return this.$store.state.banner.swipeData2
            },
             shopsname(){
                return this.$store.state.banner.shopsname
            },
        },
        mounted(){
            // this.$http.get("/static/index.json")
            // .then(res=>{
            //     this.swipeData1 = res.data.goodslist1
            //     this.swipeData2 = res.data.goodslist2
            //     // console.log(this.swipeData1)
            //     // console.log(this.swipeData2)
            // })
            // this.$http.get("/elm/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wx4g902sset&latitude=39.9924&limit=24&longitude=116.41202&offset=0&terminal=web").
            // then(res=>{
               
            //    this.shopsname=res.data
            //    console.log( res.data)
            // })
            // dispatcher  方法 mounted触发action   banner 是命名空间
              this.$store.dispatch("banner/getBannerDate");
              this.$store.dispatch("banner/detailData");             
        },
        methods:{
               //加载数据的下啦方法  通过  page 控制数据量
               loadBottom(){
                 this.page++;
                this.$store.dispatch("banner/getPageDate",this.page);
                //this.allLoaded = false;
               }
        }
        // methods:{
        //     //该方法用于整理图片格式
        //      getImg(str){
        //         var strType="";
        //         //先拆分,在判断
        //         //'https://fuss10.elemecdn.com/'+shopData.image_path.substr(0,1)+'/'+shopData.image_path.substr(1,2)+'/'+shopData.image_path.substr(3)+'.png'
        //         if(str.indexOf("png") > 0){
        //           strType=".png"  
        //         }else{
        //            strType=".jpeg"   
        //         }
        //         str='https://fuss10.elemecdn.com/'+str.substr(0,1)+'/'+str.substr(1,2)+'/'+str.substr(3)+strType;
        //         console.log(str)
        //         return str;
        //     }
        // }
        
    }

</script>
<style lang="less" rel="stylesheet/less">
    @import "../../style/less/media.less";
    @import "../../style/css/base.css";
    .slide-box{
        width:100%;
        height:5rem;  
        margin-top:0.2rem;  
        // position:fixed;
        // top:0.5rem;
        // left:0;
    }
    .icon-list {
        float:left;
		overflow: hidden;
		height: 100%;
		background: #fff;
		padding-top:.1rem;
	}
	.icon-item {
		display: block;
		width: 25%;
		float: left;
		height:44%;
		padding-top:.3rem;
		text-align: center;
	}
	.icon-img {
		display: block;
		width:0.88rem;
		height: .88rem;
		margin: 0 auto;
	}
	.icon-title{
		margin-top:.2rem;
		width:100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .28rem;
		color:#212121;
	}
   .shoplist{
       padding:0rem 0.3rem;
       h1{
           font-size:18px;
           font-weight:bold;
       }
       .shop-wrap{
           width:100%;
           height:auto;
       }
       .shops{
           width:100%;
           height:2rem;
           margin-top:0.3rem;
           border-bottom:1px solid #ccc;
           .shop-img{
               width:1.5rem;
               height:1.5rem;
               float:left;
               text-align:center;
               img{
                   width:100%;
                   height:100%;
                   
               }
               image[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                    background:red;
                    color:red;
                    }
               .lo {
                    background: #dcdcdc url(//simg4.qunarzz.com/piao/images/camel_56_56.jpg) center no-repeat ;
                   
                }
                        
           } 
           .price{
               float:left;
               margin-left:0.5rem;
               line-height:0.4rem;
               .shops-name{
                   font-size:14px;
                   font-weight:bold;                
               }
               p{
                   width:4rem;
               }
              .lead_time{
                   font-size:14px;
                   color:red;
                   float:right;
               }
           }          
       }
   }
</style>