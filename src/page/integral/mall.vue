<template>
	<div>
		<div id="banner-zsclunbo">
			<mt-swipe :auto="2000">
			  <mt-swipe-item><img src="../../images/banneraa5.png" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../../images/banner4.png" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../../images/banneraa3.png" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../../images/banneraa2.png" alt="" /></mt-swipe-item>
			   <mt-swipe-item><img src="../../images/banneraa1.png" alt="" /></mt-swipe-item>
			</mt-swipe>
		</div>
		<!--积分兑换-->
		<div class="jfdh">
			<div class="jifeng">
				<span class="iconfont icon-jifen"></span>
				<span class="jifeng1">积分:0</span>
			</div>
			<div class="duihuan">
				<span class="iconfont icon-duihuan"></span>
				<span class="duihuan1">兑换记录</span>
			</div>
		</div>
		<!--nav-->
		<div class="nav-zsc">
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-hongbao"></span>
				<span class="wenzi">红包专区</span>
			</router-link>
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-duihuanjilu"></span>
				<span class="wenzi">0元兑换</span>
			</router-link>
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-xinpin"></span>
				<span class="wenzi">今日新品</span>
			</router-link>
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-wodeliquan1"></span>
				<span class="wenzi">优惠礼券</span>
			</router-link>
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-cocktail31"></span>
				<span class="wenzi">食品饮料</span>
			</router-link>
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-xiyiji"></span>
				<span class="wenzi">数码家电</span>
			</router-link>
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-jiaju"></span>
				<span class="wenzi">日常家居</span>
			</router-link>
			<router-link to="/" class="icon-zsc">
				<span class="zscs iconfont icon-fenlei1"></span>
				<span class="wenzi">所有商品</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Mall',
	}
</script>

<style lang="less">
	@import url("../../style/less/media.less");
	body{background:#f0f0f0}
	#banner-zsclunbo{
		width:100%;
		height:3.14rem;
		img{
			width:100%;
			height:3.14rem;	
		}
	}
	.jfdh{
		width:100%;
		height:0.85rem;
		background:#fff;
		text-align: center;
		line-height:0.85rem;
		margin-bottom:0.17rem;
		.jifeng{
			width:3.79rem;
			height:0.85rem;
			float:left;
			font-size:0.25rem;
			.jifeng1{
				font-size:0.25rem;
			}
		}
		.iconfont{
			font-size:0.32rem;
			color:#c9c9c9;
				
		}
		.duihuan{
			width:3.41rem;
			height:0.85rem;
			float:right;
			.duihuan1{
				font-size:0.25rem;
			}
		}
	}
	.nav-zsc{
		float: left;
		width:100%;
		height:3.34rem;
		background:#fff;
		margin-bottom:0.21rem;
		display:block;
		.icon-zsc{
			width:25%;
			display:block;
			height:1.28rem;
			float:left;
			display:flex;
			flex-direction:column;
			justify-content:center;
			align-items:flex-start;
		.zscs{
			float:left;
			display:block;
			border-radius: 50%;
			text-align: center;
			margin-left:0.51rem;
			/*width:0.85rem;*/
			width:0.85rem;
			height:0.85rem;
			background:#42B983;
			color:#fff;
			
			
		}
		.wenzi{
			
			font-size:0.25rem;
		}
	}
}
</style>