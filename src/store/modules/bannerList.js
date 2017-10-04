import Vue from "vue"

export default {
    namespaced:true,
    state:{
               swipeData1:[],
                swipeData2:[],
                shopsname:[]             
      },
    // getters 帮你对原始的数据 进行拆分/转换/计算=>得到你想要的数据
    // getters:{
    //     swipeData(state){
    //         return state.detailData.info?state.detailData.info.pics:[]
    //     },
    //     desc(state){
    //         return state.detailData.txtcontent
    //     },
    //     args(state){
    //         return state.detailData.arguments
    //     },
    //     num:(state)=>state.listData.length,
    //     listData:state=>state.listData
    // },
    mutations:{
       initBannerData(state,data){
           state.swipeData1=data.swipeData1;
           state.swipeData2=data.swipeData2;
       },
       initData(state,data){
        state.shopsname=data;
       },
       initDataDouble(state,data){
        state.shopsname=state.shopsname.concat(data)
       }
    },
    actions:{
     //获取数据
       getBannerDate(context){
           Vue.prototype.$http.get("/static/index.json")
            .then(res=>{
                console.log(res);
                var swipeData1 = res.data.goodslist1
                var  swipeData2 = res.data.goodslist2
                context.commit("initBannerData",{swipeData1,swipeData2});
            })
       },
       detailData(context){
        Vue.prototype.$http.get("/elm/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wx4g902sset&latitude=39.9924&limit=24&longitude=116.41202&offset=0&terminal=web").
            then(res=>{            
               var  shopsname=res.data
               context.commit("initData",shopsname);
            })
       },
       getPageDate(context,page){
           //如何控制数量  0   24 48  72  96   120 
           page=24*page
        Vue.prototype.$http.get("/elm/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wx4g902sset&latitude=39.9924&limit=24&longitude=116.41202&offset="+page+"&terminal=web").
        then(res=>{   
            console.log("data")         
           var  shopsname=res.data
           context.commit("initDataDouble",shopsname);
         })
       }
    }
}