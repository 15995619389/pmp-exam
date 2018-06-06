<template>
	<div class="time">
		<a href="javascript:void(0);" class="progress-time" title="暂停" v-on:click="stop()" v-bind:class="{time_pause:isActive}">
			<i class="ico-time-control"></i>
			<span class="time-text">{{spanTime}}</span>
		</a>
		<div id="mask" v-show="isActive"></div>
		<div class="pop-box" v-show="isActive">
			<div class="pop-content">
				<div class="confirm-content">
					<div class="poptip-word">
						<span class="warning-ico"></span><span class="warning-word">休息一下吧！共 {{totalNum}} 道题，还剩 {{numNo}} 道没做哦~</span>
					</div>
				</div>
			</div>
			<div class="pop-footer clearfix">
				<a class="btn btn-primary btn-sm confirm-btn" href="javascript:void(0);" v-on:click="cancle()">继续做题</a>
				<a class="btn btn-default btn-sm cancle-btn" href="javascript:void(0);" >下次再做</a>
			</div>
		</div>
		<!-- <div class="pop-box" v-show="isActive">
			<div class="pop-content">
				<div class="confirm-content">
					<div class="poptip-word">
						<span class="warning-ico"></span><span class="warning-word">提前交卷</span>
					</div>
				</div>
			</div>
			<div class="pop-footer clearfix">
				<a class="btn btn-primary btn-sm confirm-btn" href="javascript:void(0);" v-on:click="cancle()">继续做题</a>
				<a class="btn btn-default btn-sm cancle-btn" href="javascript:void(0);" >下次再做</a>
			</div>
		</div> -->
	</div>

</template>

<script type="text/javascript">
	export default{
		data(){
			return {				
				spanTime:'',
				isActive:false,
				totalNum:10,
				numNo:5,
				timer:""
			}
		},
		created(){
			this.getTime()
		},
		methods:{
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
			stop:function(){
				this.isActive = true;
			},
			cancle:function(){
				this.isActive = false;
			}
		}
	}


</script>
<style lang="less">
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
.time {
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
}
</style>