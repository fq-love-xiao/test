<template>
	<div>
	
			<div class="top-zsc" v-if="jifenglist.length>0">
				<img :src="jifenglist[this.$route.params.pid].imgss" />
			</div>
			<div class="tiyanka" v-if="jifenglist[0]">
				<p class="kkkk" v-text="jifenglist[this.$route.params.pid].textt"></p>
				<p class="jfeng" v-text="jifenglist[this.$route.params.pid].jf"></p>
			</div>
		<div class="Commodity">
			<div class="Commodity-content">
				<p class="xqsm-p">详情说明</p>
			</div>
			<div class="spjs-content2">
				<p class="sqjs-p">[商品介绍]</p>
				<p class="spjs-p2">1、本体验卡为虚拟商品,可享受【蜂鸟专送】标识商家减免配送费服务(每日最多减免3单,每单最高减免4元);</p>
				<p class="spjs-p3">2、体验有效期查看流程: 登录饿了么手机客户端APP -> 我的-> 饿了么会员卡,即可查看体验卡有效期,激活起至次日24点失效。</p>
				<p class="spjs-p4">3、仅限非体验用户兑换(体验状态不可领取体验卡。</p>
			</div>
			<div class="spjs-content2">
				<p class="sqjs-p">[注意事项]</p>
				<p class="spjs-p2">1、不限兑换次数,<span style="color:red">仅限非体验用户兑换(体验状态不可领取体验卡);</span></p>
				<p class="spjs-p3">2、每张体验卡仅限绑定一个帐号,饿配送体验卡兑换后即时生效,权益即时绑定至该兑换账户,兑换后积分不予退还;</p>
				<p class="spjs-p4">3、如有疑问,可咨询24小时客服热线10105757。</p>
			</div>
			<div class="div-btn">
				<input type="button" name="" class="butn" value="请先登录" />
			</div>
		</div>
</div>
</template>

<script>
 import {mapGetters} from 'vuex'
	export default {
		name:'Jflist',
//		data(){
//			return {
//				jifenglist:[],
//				
//			}
//		},
		computed:{
			jifenglist(){
				//通过计算数据 实时接收数据
				return this.$store.state.jifenLi.jifenglist
			}
		},
		mounted(){ //加载后
			this.$store.dispatch("jifenLi/DetalltData")//挂载jifenli下面
		}
//	 computed:{
//	 	  ...mapGetters("jifenLi",[
//             "jifenglist"
//          ])
//	 },
		/*mounted(){
			this.pid = this.$route.params.pid   //用于判断选择的数据 123
			//根据商品的id 获取详情数据
			fetch("/static/jflist.json").then(res=>res.json())
			.then(data=>{
				this.jifenglist=data.ssssss
				console.log(this.jifenglist[this.pid].imgss )//123
			}).catch(err=>console.log(err))
			
		}*/
	}
</script>

<style lang="less">
	body{background:#f0f0f0}
	@import url("../../style/less/media.less");
	.top-zsc{
		width:100%;
		height:3rem;
		background:#06C1FF;
		img{
			width:100%;
			height:3rem;
		}
	}
	.tiyanka{
		width:100%;
		height:1.68rem;
		background:#fff;
		margin-bottom:0.18rem;
		.kkkk{
			font-size:0.3rem;
			padding-top:0.27rem;
			text-indent: 2em;
		}
		.jfeng{
			font-size:0.35rem;
			color:#ff6423;
			margin-top:0.39rem;
			text-indent: 2em;
		}
	}
	.Commodity{
		width:100%;
		height:6.97rem;
		background:#fff;
		.Commodity-content{
			width:100%;
			padding-top:0.25rem;
			height:0.56rem;
			.xqsm-p{
				padding-bottom:0.2rem;
				padding-left:0.2rem;
				padding-right:0.2rem;
				width:6.6rem;
				border-bottom:0.02rem solid #f0f0f0;
				font-size:0.18rem;
				color:#9a98a7;
				
			}
			
		}
		.spjs-content2{
			width:100%;
			height:2.94rem;
			overflow: hidden;

			.sqjs-p{
				font-size:0.29rem;
				margin-top:0.25rem;
				text-indent: 1em;
				font-weight: 900;
				margin-bottom: 0.32rem;
			}
			.spjs-p2{
				margin-bottom:0.17rem;
				font-size:0.22rem;
				font-weight: 800;
				
			}
			.spjs-p3{
				margin-bottom:0.17rem;
				font-size:0.22rem;
				font-weight: 800;
			}
			.spjs-p4{
				font-weight: 800;
			}
		}
		.div-btn{
			width:100%;
			height:1.28rem;
			background:#fff;
			position:fixed;
			bottom:0;
			text-align: center;
			line-height:1.28rem;
			.butn{
				width:6.8rem;
				height:0.69rem;
				background:#ff6000;
				border-radius:0.25rem;
				font-size:0.3rem;
				color:#fff;
				outline:medium;
				border:none;
			}
		}
		
	}
</style>