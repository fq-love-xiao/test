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
		<!--nav2-->
		<div class="Crab">
			<img src="../../images/chichi1.png" alt="" class="imgzsc1"/>
			<img src="../../images/chichi2.jpg" alt="" class="imgzsc2"/>
			<img src="../../images/chichi3.jpg" alt="" class="imgzsc2"/>
		</div>
		<div class="dajiadui">
			大家都在兑
		</div>
		<v-malist></v-malist>
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
			margin-top:0.3rem;
		.zscs{
			float:left;
			font-size:0.40rem!important;
			border-radius: 50%;
			text-align: center;
			margin-left:0.51rem;
			width:0.85rem;
			height:0.85rem;
			background:#42B983;
			color:#fff;
			line-height:0.84rem;
		}
		.wenzi{
			margin-left:0.44rem;
			font-size:0.11rem;
			color:#666666;
			margin-top:0.15rem;
		}
	}
}
.icon-zsc:nth-child(1) .zscs{
	background: linear-gradient(#fd6d3b, #fc7650);
}
.icon-zsc:nth-child(2) .zscs{
	background:#8fc31f!important;
}
.icon-zsc:nth-child(3) .zscs{
	background: linear-gradient(#14cc74, #3bd78f);
}
.icon-zsc:nth-child(4) .zscs{
	background: linear-gradient(#b670ff, #b395ff);
}
.icon-zsc:nth-child(5) .zscs{
	background: linear-gradient(#ffa40c, #ffbb46);
}
.icon-zsc:nth-child(6) .zscs{
	background: linear-gradient(#06c1ff, #63d8ff);
}
.icon-zsc:nth-child(7) .zscs{
	background: linear-gradient(#f5604a, #fe8472);
}
.icon-zsc:nth-child(8) .zscs{
	background: linear-gradient(#65b4ff, #65d7ff);
}
		
		.Crab{
			width:100%;
			height:2.4rem;
			background:#fff;
			margin-bottom:0.1rem;
			.imgzsc1{
				width:3.55rem;
				height:2.41rem;
				float:left;
			}
			.imgzsc2{
				float:right;
				width:3.55rem;
				height:1.18rem;
			}
		}
.dajiadui{
	width:100%;
	height:0.68rem;
	background:#fff;
	margin-bottom:0.02rem solid #f0f0f0;
	font-size:0.25rem;
	line-height:0.68rem;
	color:#6e6b64;
	font-weight:900;
	text-indent: 2em;
	border-bottom: 0.02rem solid #f5f5f5;
}
</style>
