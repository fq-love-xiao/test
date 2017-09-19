<template>
<div>
	<!--router-link 不解析的话用tag="a" 然后 to=""加这两个-->
	<v-header></v-header>
	<div class="content-4">
		<router-link class="nr-content"  to="/mall" >
			<div class="left-con">
				<span class="sp1">积分商城</span>
				<span class="sp2">0元好物在这里</span>
			</div>
			<img src="../../images/zza1_06.jpg" alt="" />
		</router-link>
		<router-link class="nr-content"  to="/">
			<div class="left-con">
				<span class="sp1">必吃爆料</span>
				<span class="sp2">最夯外卖指南</span>
			</div>
			<img src="../../images/zza1_03.jpg" alt="" />
		</router-link>
		<router-link class="nr-content"  to="/">
			<div class="left-con">
				<span class="sp1" style="color:#12a7e0">推荐有奖</span>
				<span class="sp2">5元现金拿不停</span>
			</div>
			<img src="../../images/zza1_06.jpg" alt="" />
		</router-link>
		<router-link class="nr-content"  to="/"> 
			<div class="left-con">
				<span class="sp1">周边优惠</span>
				<span class="sp2">领取口碑好券</span>
			</div>
			<img src="../../images/zza1_06.jpg" alt="" />
		</router-link>
	</div>
	<div class="banner111">
		<img src="../../images/banner111_02.jpg" alt="" />
	</div>
	<div class="xshl">
		<img src="../../images/fxhl_03.jpg" alt="" />
	</div>
	<div class="shangchen-zsc">
		<img src="../../images/zaads_02.jpg" alt="" />
		<router-link to="/mall" class="ckgd">查看跟多 ></router-link>
	</div>
	<v-footer></v-footer>
	<router-view></router-view>
</div>
</template>
<script>
	export default {
		 name: 'Discover',
	  data () {
	    return {
	    
	      fx:'发现'
	    }
	  }
	}
</script>

<style lang="less">
	body{background:#f5f5f5}
	.content-4{
		width:100%;
		height:2.96rem;
		background:#fff;
		margin-bottom: 0.21rem;
	.nr-content{
		display:block;
		width:3.58rem;
		height:1.46rem;
		float:left;
		background:#fff;
		float:left;
		border-bottom:0.02rem solid #efefef;
		border-right:0.02rem solid #efefef;
		.left-con{
			display:block;
			float:left;
			.sp1{
				display:block;
				margin-top:0.43rem;
				margin-left:0.27rem;
				color:#ffcc51;
				font-weight:bold;
				font-size:0.27rem;
			
			}
			.sp2{
				margin-left:0.27rem;
				margin-top:0.15rem;
				display:block;
				
				color:#9696a0;
				font-size:0.21rem;
			
			}
		}
		img{
			float:right;
			margin-top:0.3rem;
			width:0.78rem;
			height:0.7rem;
			margin-right:0.31rem;
		}
	}
}
.banner111{
	width:100%;
	height:1.64rem;
	margin-bottom:0.2rem;
	img{
		width:100%;
		height:1.64rem;
	}
}
.xshl{
	width:100%;
	height:1.35rem;
	background:#fff;
	text-align: center;
	line-height:1.60rem;
	img{
		width:2.45rem;
		height:0.59rem;
	}
}
.shangchen-zsc{
	width:100%;
	height:4.01rem;
	background:#fff;
	text-align: center;
	img{
		width:100%;
		height:3.03rem;
	}
	.ckgd{
		font-size:0.24rem;
		font-weight: bold;
		color:#aaaaa9;
		line-height:0.9rem;
	}
}
</style>