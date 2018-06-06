<template>
	<div class="nk-main">
		<div id="mask" v-show="isActive"></div>
		<!-- 时间 -->
		<div class="pop-box" v-show="isActive">
			<div class="pop-content">
				<div class="confirm-content">
					<div class="poptip-word">
						<span class="warning-ico"></span><span class="warning-word">休息一下吧！共 {{zongNum}} 道题，还剩 {{numNo}} 道没做哦~</span>
					</div>
				</div>
			</div>
			<div class="pop-footer clearfix">
				<a class="btn btn-primary btn-sm confirm-btn" href="javascript:void(0);" v-on:click="cancle()">继续做题</a>
				<a class="btn btn-default btn-sm cancle-btn" href="javascript:void(0);" >下次再做</a>
			</div>
		</div>
		<!-- 提前交卷弹窗 -->
		<div class="pop-box" v-show="isActiveShow">
			<div class="pop-content">
				<div class="confirm-content">
					<div class="poptip-word">
						<span class="warning-ico"></span><span class="warning-word">你尚未完成本次练习，确定要提前交卷？</span>
					</div>
				</div>
			</div>
			<div class="pop-footer clearfix">
				<router-link to="/analyticIndex"><a class="btn btn-primary btn-sm confirm-btn" href="javascript:void(0);">确定</a></router-link>
				<a class="btn btn-default btn-sm cancle-btn" href="javascript:void(0);" v-on:click="cancel()">取消</a>
			</div>
		</div>






		<div class="subject-box">
			<div class="nowcoder-topic">
				<div class="subject-progress">
					<div class="progress">
						<div class="progress-bar"></div>
					</div>
					<span class="progress-nums">{{num}}/{{zongNum}}</span>
					<!-- <timeBox></timeBox> -->
				<a href="javascript:void(0);" class="progress-time" title="暂停" v-on:click="stop()" v-bind:class="{time_pause:isActive}">
						<i class="ico-time-control"></i>
						<span class="time-text">{{spanTime}}</span>
					</a>
				</div>
				<div class="subject-title">[不定项选择题]</div>
				<div class="subject-main">
					<div class="subject-content">
						<div class="subject-question">
							<p style="margin-left: 0.0cm;text-indent: 0.0cm;">  </p>
						</div>
						<a href="javascript:void(0);" class="subject-options"  >
							<label class="radio">
								<span class="icons"></span>
								<pre></pre>
							</label>							
						</a>
						<a href="javascript:void(0);" class="subject-options">
							<label class="radio">
								<span class="icons"></span>
								<pre>错误</pre>
							</label>							
						</a>
					</div>
					<div class="subject-action">
						<div class="subject-next">
							<from>
								<input type="submit" name="button" class="btn warning-btn" value="提前交卷" v-on:click="advance()">
								<input type="submit" name="button" class="btn btn-primary" value="下一题">
							</from>
						</div>
					</div>
				</div>
				<div class="answer-sheet-box">
					<div v-on:click="datiShow()">
						<a href="javascript:void(0)" class="card-unfold" v-if="isDaTi">收起答题卡</a>
						<a href="javascript:void(0)" class="card-fold" v-else>展开答题卡</a>
					</div>
					<ul class="answer-sheet-num" v-show="isDaTi" >
						<li  v-for="(ye,index) in yeShu">
							<a href="javascript:void(0);" v-on:click="oli(index)" v-bind:class="{oaClass:index==qwer}">{{ye}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- <todoList></todoList> -->
	</div>
</template>

<script type="text/javascript">
 // import timeBox from '../topic/time.vue'
// import Vue from 'vue'
// import axios from 'axios'

	export default{
		data(){
			return{
				spanTime:'',
				isActiveShow:false,
				isActive:false,
				numNo:5,
				timer:"",
				topicText:[],
				progressNums:"",
				num:1,
				zongNum:10,
				yeShu:[1,2,3,4,5,6,7,8,9,10],
				isDaTi:true,
				qwer:"0",
			}
		},
		components:{
			 // timeBox
		},
		created(){
			
		},
		 mounted() {
			 this.postData()
		 	this.totalNum();
		 	this.getTime()	
		 },
		methods:{
			postData:function(){
				var self = this;
				this.$http.get("http://211.149.193.19:8080/api/customers").then(function(res){
					console.log(res.data)
				}).catch(function(err){
					console.log(err)
				})
			},


			cancle:function(){
				this.isActive = false;
			},
			stop:function(){
				this.isActive = true;
			},
			getTime:function(){				
				var n_sec=0; //秒
				var n_min=0; //分
				var n_hour=0;//时
				var self = this;
				self.timer = setInterval(function(){	
					n_sec++;			
					if(n_sec<10){
						n_sec = "0"+n_sec;
					}									
					if(n_sec>59){
						n_sec = 0;
						n_min++;
						if(n_min<10){
							n_min = "0"+n_min
						}
						if(n_min>59){
							n_min = 0;
							n_hour++
						}
					}					
					self.spanTime = n_hour+":"+n_min+":"+n_sec;	
				},1000) 
			},
			getData:function(){
				// axios.get('/index.json')
				// .then(function (response) {
				// 	console.log(response);
				// })
				// .catch(function (response) {
				// 	console.log(response);
				// });
			},
			totalNum:function(){			
				this.progressNums = parseInt((this.num/this.zongNum)*100);
				$(".progress-bar").css("width",this.progressNums+"%")
			},
			datiShow:function(){
				this.isDaTi =! this.isDaTi 
			},
			oli:function(index){
				this.qwer  = index
			},
			advance:function(){
				this.isActiveShow = true	
				this.isActive = true
			},
			//取消
			cancel:function(){
				this.isActive = false
				this.isActiveShow = false	
			},
			determineOk:function(){

			}

		}
	}
</script>

<style lang="less" scoped="scoped">
	.nk-main{
		margin: 0 auto;
		width: 960px;
		padding-top: 50px;

.progress-time{
	font-size: 20px;
	position: absolute;
	right: 0;
	top: 0;
	background: #2d3339;
	border-radius: 0 6px 0 0;
	color: #fff;
	height: 40px;
	width: 180px;
	padding-top: 10px;
	text-align: center;
	.ico-time-control{
		display: inline-block;
		vertical-align: -5px;
		height: 28px;
		width: 28px;
		margin-right: 5px;
		background: url(http://static.nowcoder.com/images/img/icons/ico-media.png) 0 -96px no-repeat;
	}
	.time-text{
		font-size: 20px
	}

}

	.time_pause{
		.ico-time-control {
			background-position: 0 -144px;
		}
	} 
	.pop-box {
		border-radius: 4px;
		background: #FFF;
		border: 1px solid #dedede;
		width: 500px;
		height: 186px;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		z-index: 99;
		.pop-content{
			padding: 20px;
			.confirm-content{
				overflow: hidden;
				padding: 20px;
				.poptip-word{
					text-align: center;
					.warning-ico{
						background: url(//static.nowcoder.com/images/img/ui-ico/ico-msg.png) no-repeat;
						background-position: -72px 0;
						margin-right: 10px;
						display: inline-block;
						width: 36px;
						height: 36px;
						vertical-align: middle;
					}
				}
			}

		}
		.pop-footer{
			padding: 15px 20px;
			overflow: hidden;
			background: #f0f0f0;
			border-radius: 0 0 4px 4px;
			.btn-sm {
				width: 80px;
				font-size: 14px;
				padding: 9px 0 10px;
			}
			.btn {
				display: block;
				float: right;
				margin-left: 10px;
				background: #fff;
				text-align: center;
				border-radius: 3px;
				border: none 0;
				cursor: pointer;
				line-height: normal;
				outline: 0;
				white-space: nowrap;
			}
			.btn-primary {
				background: #00BC9B;
			}
			.btn-default {
				background: #BCBCBC;
			}
		}
	}







	
		.subject-box{
			margin-bottom: 20px;
			border: 1px solid #eee;
			border-radius: 3px;
			position: relative;
			background: #fff;
			.nowcoder-topic{
				background: #fff;
				.subject-progress {
					padding: 10px 200px 10px 30px;
					background: #232c31;
					border-radius: 4px 4px 0 0;
					position: relative;
					white-space: nowrap;
					height: 30px;
					.progress{
						overflow: hidden;
						background: #ebedef;
						border-radius: 32px;
						height: 12px;
						margin: 0;
						width: 90%;
						margin-right: 10px;
						display: inline-block;
						.progress-bar{
							float: left;
							width: 0;
							height: 100%;
							font-size: 12px;
							line-height: 20px;
							color: #fff;
							text-align: center;
							background-color: #1abc9c;
						}
					}
					.progress-nums{
						color: #fff;
						font-size: 20px;
					}
					// .progress-time{
					// 	font-size: 20px;
					// 	position: absolute;
					// 	right: 0;
					// 	top: 0;
					// 	background: #2d3339;
					// 	border-radius: 0 6px 0 0;
					// 	color: #fff;
					// 	height: 40px;
					// 	width: 180px;
					// 	padding-top: 10px;
					// 	text-align: center;
					// 	.ico-time-control{
					// 		display: inline-block;
					// 		vertical-align: -5px;
					// 		height: 28px;
					// 		width: 28px;
					// 		margin-right: 5px;
					// 		background: url(http://static.nowcoder.com/images/img/icons/ico-media.png) 0 -96px no-repeat;
					// 	}
					// 	.time-text{
					// 		font-size: 20px
					// 	}
					// }
				}
				.subject-title{
					padding: 15px 20px 15px 55px;
					background: #FFF url(http://static.nowcoder.com/images/img/q-ico.png) 20px 16px no-repeat;
					line-height: 1.5;
					font-size: 16px;
					border-bottom: 1px solid #eee;
					border-radius: 3px
				}
				.subject-main{
					background: #FFF;
					padding: 20px;
					overflow: hidden;
					.subject-content {
						position: relative;
						margin-bottom: 20px;
						.subject-question{
							font-size: 14px;
							line-height: 1.6;
							margin-bottom: 20px;
						}
						.subject-options {
							margin-bottom: 20px;
							border: 1px solid #d4d4d4;
							border-radius: 2px;
							padding: 12px 20px 13px;
							background: #FFF;
							display: block;
							word-break: break-all;
							.checkbox, .radio {
								margin: 0;
								line-height: 20px;
								cursor: pointer;
								font-size: 14px;
								text-align: left;
								display: inline-block;
								pre{
									display: inline-block;
									vertical-align: top;
									max-width: 850px;
								}
							}
							.checkbox .icons, .radio .icons {
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
							.radio .icons {
								border-radius: 50%;
							}
						}
						.subject-options:hover{
							background: #ddd;
							border-color:#1abc9c;
							color:#1abc9c
						}
					}
					.subject-action {
						margin-bottom: 20px;
						font-size: 14px;
						.subject-next{
							float: right;
							.btn-primary{
								background: #00BC9B
							}
							.btn {
								display: inline-block;
								text-align: center;
								padding: 10px 0;
								width: 110px;
								color: #FFF;
								font-size: 14px;
								border-radius: 3px;
								border: none 0;
								cursor: pointer;
								line-height: normal;
								outline: 0;
								white-space: nowrap;
								margin-right: 10px
							}
							.warning-btn {
								background: #ff6547;
								float: left;
								margin-right: 20px;
							}
						}
					}
				}
				.answer-sheet-box {
					border-top: 1px dashed #DDD;
					padding: 20px;
					font-size: 16px;
					background: #FFF;
					a{
						display: inline-block;
					}
					.card-unfold{
						background: url(//static.nowcoder.com/images/img/foldArrow.png) right -6px no-repeat;
						padding-right: 20px;
					}
					.card-fold{
					    background: url(//static.nowcoder.com/images/img/fold-ico.png) right 6px no-repeat;
					    display: inline-block;
					    padding-right: 20px;
					}
					.card-unfold:hover,.card-fold:hover{
						color: #00BC9B
					}
					.answer-sheet-num{
							// display: none;
						    margin-top: 15px;
						    overflow: hidden;
						    li{
						    	float: left;
						    	margin-right: 10px;
						    	.oaClass{
						    		display: block;
						    		background: #59b59c;
						    		color: #FFF;
						    	}
						    	a{
						    		display: block;
						    		color: #dce4ec;
						    		font-size: 16px;
						    		width: 40px;
						    		text-align: center;
						    		height: 40px;
						    		line-height: 40px;
						    	}
						    	a:hover{
						    		display: block;
						    		background: #59b59c;
						    		color: #FFF;
						    	}
						    	
						    }
					}
				}
			}
		}
	}
</style>