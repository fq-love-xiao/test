<template>
	<div>
		<header>
			<ul class="personal-center">
				<li class="my">我的</li>
				<li class="icon">
					<span class="iconfont icon-lingdang"></span>
					<span class="iconfont icon-icon09"></span>
				</li>
			</ul>			
		</header>
		<main>
			<ul class="accession-number">
				<li>
					<span class="iconfont icon-touxiang "></span>
					<span  class="iconfont icon-shouji"></span>
				</li>
				<li class="accession-number-right">	
					<router-link to="/home">			
						<span class="iconfont icon-jikediancanicon13"></span>	
					</router-link>				
				</li>			
			</ul>
			<ul class="integral">
				<li>
					<span>0.00元</span>
					<span>钱包</span>
				</li>
				<li>
					<span>0个</span>
					<span>优惠</span>
				</li>
				<li>
					<span>0</span>
					<span>积分</span>
				</li>
			</ul>
		</main>
		<v-footer>
				
		</v-footer>
	</div>
</template>

<script>
	export default{
		
	}
</script>
	
<style lang="less" rel="stylesheet/less">
 @import "../../style/less/media.less";
 @import "../../style/css/base.css";
	.personal-center{
		width:100%;
		height:0.8rem;
		line-height:0.8rem;
		background:blue;
		
		li{
			float:left;
			font-size:14px;
			padding:0 0.4rem;
			color:#fff;
		}
		.icon{
			font-size:18px;
			font-weight:bold;
			float:right;
			span{
				float:left;
				padding-right:0.4rem;
				color:#fff;
			}
		}
	}
	
	main{
		width:100%;
		position:fixed;
		top:0.8rem;
		left:0;
		.accession-number{
		width:100%;
		height:2rem;	
		line-height:1.8rem;
		background:blue;
		position:relative;		
		li{
			float:left;
			font-size:24px;
			padding:0 0.4rem;
			color:#fff;
			.icon-touxiang{
				font-size:40px;
			}
			span{
				float:left;
				padding-right:0.4rem;
				color:#fff;
				font-size:24px;				
			}
		}
		.accession-number-right{
			font-size:24px;
			font-weight:bold;
			float:right;
			position:absolute;
			right:0;		
		}
		}
		.integral{
			width:100%;
			height:1rem;
			background:#ccc;
			display:flex;
			justify-content: space-around;
			align-items:center;
			li{
				float:left;
				span{
					display:block;
					text-align:center;
				}
			}
		}
	}
	
</style>