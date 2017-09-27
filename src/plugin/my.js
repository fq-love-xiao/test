//关于高德定位功能实现   mykey:28ba04983a743c087a89a900e7c662c2
 export default{	 
	 var map = new AMap.Map("container", {
	
	        resizeEnable: true
	    });
	    //输入提示
	    var autoOptions = {
	        input: "tipinput"
	    };
	    var auto = new AMap.Autocomplete(autoOptions);
	    var placeSearch = new AMap.PlaceSearch({
	        map: map
	    });  //构造地点查询类
	    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
	    function select(e) {
	        placeSearch.setCity(e.poi.adcode);
	        placeSearch.search(e.poi.name);  //关键字查询查询
	        //console.log(e+" "+e.poi.location.lat+" "+e.poi.location.lng)
	        //40.117618   116.250627
	    }
 }