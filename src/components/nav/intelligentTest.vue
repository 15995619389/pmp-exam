<template>
	<div class="intelligentTest coding-topic-page">
		<logoin v-show="logo"></logoin>
		<div class="mini-banner">
			<a href="/jump?type=ad&amp;source=2&amp;url=https%3A%2F%2Fjob.toutiao.com%2Fcampus%2Fposition" target="_blank">
				<img src="https://uploadfiles.nowcoder.com/images/20180417/3985294_1523934433687_9DFC589BB1F6EBAA64DF3B020256EF46">
			</a>
			<!-- <swiperaa></swiperaa> -->
		</div>
		<div class="module-box">
			<div class="module-head">
				<span>笔试练习</span>
			</div>
			<div class="module-body">
				<div class="pop-interest-box horizontal-mod clearfix">
					<dl class="pop-interest-type">
						<dt class="pop-interest-head">
							<label class="checkbox nc-req-auth js-tag-all"><span class="icons"></span> 全选</label>
							<h2>编程语言</h2>
						</dt>
						<dd class="pop-interest-info nc-req-auth js-tag-item" v-for="language in languageBox" v-on:click="isLogoin()">
							<label class="checkbox">
								<span class="icons"></span>
								<div class="pop-interest-tit" v-bind:title="language.name">{{language.name}}</div>
							</label>
							<div class="data-progress-bg">
								<div class="data-progress-bar red-bar" ></div>
							</div>
							<span class="data-progress-txt">{{language.num}}/{{language.number}}</span>
						</dd>
					</dl>
					<dl class="pop-interest-type">
						<dt class="pop-interest-head">
							<label class="checkbox nc-req-auth js-tag-all"><span class="icons"></span> 全选</label>
							<h2>算法</h2>
						</dt>
						<dd class="pop-interest-info nc-req-auth js-tag-item" v-for="algorithm in algorithmBox" v-on:click="isLogoin()">
							<label class="checkbox">
								<span class="icons"></span>
								<div class="pop-interest-tit" v-bind:title="algorithm.name">{{algorithm.name}}</div>
							</label>
							<div class="data-progress-bg">
								<div class="data-progress-bar red-bar" style="width:0"></div>
							</div>
							<span class="data-progress-txt">{{algorithm.num}}/{{algorithm.number}}</span>
						</dd>
					</dl>
					<dl class="pop-interest-type">
						<dt class="pop-interest-head">
							<label class="checkbox nc-req-auth js-tag-all"><span class="icons"></span> 全选</label>
							<h2>数据结构</h2>
						</dt>
						<dd class="pop-interest-info nc-req-auth js-tag-item" v-for="(structure,index) in structureBox" v-on:click="isLogoin()">
							<label class="checkbox">
								
								<span class="icons"></span>
								
								<div class="pop-interest-tit" v-bind:title="structure.name">{{structure.name}}</div>
							</label>
							<div class="data-progress-bg">
								<div class="data-progress-bar red-bar" style="width:0"></div>
							</div>
							<span class="data-progress-txt">{{structure.num}}/{{structure.number}}</span>
						</dd>
					</dl>
					
				</div>
				<div class="difficulty" style="overflow:hidden">
					<span class="item-label">调整难度系数：</span>
					<!-- <img  v-on:click="rating(index)" class="stars-choose"> -->
					<div style="float:left">
						<i class="stars-choose"></i>
						<i class="stars-choose"></i>
						<i class="stars-choose"></i>
						<i class="stars-choose"></i>
						<i class="stars-choose"></i>
					</div>
				</div>
				<span style="display:inline-block" id="coefficient">已选择：<span>请选择难度系数</span></span>
				<div class="special-oprt-btn">
					<a href="javascript:;">重选</a>
					<router-link to="/index">确定</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
	
</template>

<script type="text/javascript">
import logoin from '../logoin/index.vue'
// import swiperaa from'../swiper/index.vue'



// 模拟数据
var languageList = {
	languageDatas:[
		{
			"checked":false,
			"name":"C/C++",
			"number":2405,
			"num":"0"
		},
		{
			"checked":false,
			"name":"Java",
			"number":939,
			"num":"0"
		},
		{
			"checked":false,
			"name":"Javascript",
			"number":186,
			"num":"0"
		},
		{
			"checked":false,
			"name":"C#",
			"number":31,
			"num":"0"
		},
		{
			"checked":false,
			"name":"HTML/CSS",
			"number":218,
			"num":"0"
		},
		{
			"checked":false,
			"name":"Python",
			"number":49,
			"num":"0"
		},
		{
			"checked":false,
			"name":"PHP",
			"number":114,
			"num":"0"
		},
		{
			"checked":false,
			"name":"GO",
			"number":84,
			"num":"0"
		}
	]
}
// 算法
var algorithmList = {
	algorithmDatas:[
		{
			"checked":false,
			"name":"查找",
			"number":162,
			"num":"0"
		},
		{
			"checked":false,
			"name":"排序",
			"number":399,
			"num":"0"
		},
		{
			"checked":false,
			"name":"递归",
			"number":32,
			"num":"0"
		},
		{
			"checked":false,
			"name":"复杂度",
			"number":243,
			"num":"0"
		},
		{
			"checked":false,
			"name":"高级算法",
			"number":67,
			"num":"0"
		}
	]
}

// 数据结构
var structureList = {
	structureDatas:[
		{
			"checked":false,
			"name":"数组",
			"number":162,
			"num":"0"
		},
		{
			"checked":false,
			"name":"字符串",
			"number":399,
			"num":"0"
		},
		{
			"checked":false,
			"name":"链表",
			"number":32,
			"num":"0"
		},
		{
			"checked":false,
			"name":"栈",
			"number":243,
			"num":"0"
		},
		{
			"checked":false,
			"name":"队列",
			"number":67,
			"num":"0"
		},
		{
			"checked":false,
			"name":"树",
			"number":737,
			"num":"0"
		},
		{
			"checked":false,
			"name":"图",
			"number":341,
			"num":"0"
		},
		{
			"checked":false,
			"name":"哈希",
			"number":88,
			"num":"0"
		},
		{
			"checked":false,
			"name":"堆",
			"number":61,
			"num":"0"
		}
	]
}


	export default{
		data(){
			return{
				languageBox:languageList.languageDatas,
				algorithmBox:algorithmList.algorithmDatas,
				structureBox:structureList.structureDatas,
				userbarStatus:false,
				logo:false,
				isMask:false
			}
		},
		components:{
			logoin,
			// swiperaa
		},
		created:function(){

		},
		computed:{

		},
		methods:{
			isLogoin:function(num){
				var self = this;
				if(!this.userbarStatus){
						this.$data.logo = true
						this.$data.isMask = true
				}else{
					
				}
			},
		}
	}
$(function(){

	$(".difficulty .stars-choose").on("click",function(){
		$(this).addClass('star_on')
		$(this).prevAll().addClass('star_on');
		$(this).nextAll().removeClass('star_on')
		var ind = $(this).index();
		if(ind == 0){
			$("#coefficient span").html("一星难度")
		}else if(ind == 1){
			$("#coefficient span").html("二星难度")
		}else if(ind == 2){
			$("#coefficient span").html("三星难度")
		}else if(ind == 3){
			$("#coefficient span").html("四星难度")
		}else if(ind == 4){
			$("#coefficient span").html("五星难度")
		}

	})



})

</script>
<style lang="less" scoped>
	.mini-banner{
		margin-bottom: 10px;
		img{
			display: block;
		}
	}
	.module-box{
		border: 1px solid #e0e0e0;
		border-radius: 3px;
		background: #fff;
		.module-head{
			padding: 15px 15px 0;
			line-height: normal;
			position: relative;
			h1{
				font-size: 16px;
				line-height: 16px;
				float: left;
				font-weight: 400;
				white-space: nowrap;
			}
		}
		.module-body{
			padding:0 20px 20px 20px;
			overflow: hidden;	
			.pop-interest-box{
				height: auto;
				margin-top: 10px;
				overflow-y: auto;    
				.pop-interest-type{
					width: 96%;
					padding: 2%;
					float: none;
					margin-right: 10px;
					margin-bottom: 15px;
					background: #f3f7f9;
					.pop-interest-head{
						    margin-bottom: 20px;
						    padding-bottom: 10px;
						    border-bottom: 1px dashed #dde6ea;
						.checkbox, .radio{							
							cursor: pointer;
							font-size: 14px;
							text-align: left;
							display: inline-block;
							.icons{
								border: 1px solid #DDD;
								vertical-align: -3px;
								width: 14px;
								height: 14px;
								background: #FFF;
								display: inline-block;
								margin-right: 3px;
								border-radius: 2px;
								line-height: normal;
								position: relative;	
							}
						}
						.checkbox{
							float: right;
							margin-top: 2px;
						}	
					}
					.pop-interest-info{
						width: 280px;
						display: inline-block;
						margin-right: 10px;
						.data-progress-bg{
							width: 100px;
							height: 6px;
							display: inline-block;
							margin-right: 10px;
							vertical-align: middle;
							background: #e8edf2;
							overflow: hidden;
							border-radius: 10px;
						}
						.pop-interest-tit {
							color: #1c3551;
							font-weight: 700;
							display: inline-block;
							width: 60px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin-right: 8px;
							vertical-align: middle;
							word-wrap: normal;
						}
						.data-progress-bar{
							height: 6px;
							border-radius: 10px;
						}
						.red-bar {
							background: #ff6547;
						}
						.checkbox, .radio {
							cursor: pointer;
							font-size: 14px;
							text-align: left;
							display: inline-block;
							.icons{
								background: #FFF;
								color: #FFF;
								text-align: left;
								border: 1px solid #DDD;
								vertical-align: -3px;
								width: 14px;
								height: 14px;
								display: inline-block;
								border-radius: 2px;
								line-height: normal;
								position: relative;
							}
						}					
						.data-progress-txt {
							font-size: 14px;
							color: #4e5f70;
							vertical-align: middle;
						}
					}
				}
			}	
			.special-oprt-btn{
				float: right;
				a{
					display: block;
					padding: 5px 30px;
					float: left;
					border: 1px solid #ddd;
					margin-left: 20px;
					border-radius:5px 
				}
				a:first-child{
					background: #BCBCBC
				}
				a:last-child{
					background: #00BC9B
				}
			}
			.difficulty{
				margin: 0;
				width: 100%;
				.item-label{
					font-size: 14px;
					line-height: 20px;
					text-align: right;
					width: auto;
					height: 20px;
					display: inline-block;
					vertical-align: middle;
					float: left;
				}
				// .stars-choose{
				// 	width: 18px;
				// 	height: 17px;
				// 	//background: url(http://static.nowcoder.com/images/img/stars.png) no-repeat;
				// 	vertical-align: top;
				// 	cursor: pointer;
				// 	display: inline-block;
				// 	margin-top: 5px
				// }
				i{
					width: 18px;
					height: 17px;
					vertical-align: top;
					cursor: pointer;
					display: inline-block;
					background: url("../../assets/stars_none.png") no-repeat;
				}
				.star_on{
					background: url("../../assets/stars_block.png") no-repeat;
				}
				.star_off{
					
				}
				.star-1 {
					background-position: 0 -27px;
				}
				.star-2 {
					background-position: 0 -54px;
				}
				.star-3 {
					background-position: 0 -81px;
				}
				.star-4 {
					background-position: 0 -108px;
				}
				.star-5 {
					background-position: 0 -135px;
				}
			}
		}
	}
</style>