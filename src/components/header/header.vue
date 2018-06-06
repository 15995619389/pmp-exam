<template>
	<div class="headerBox">
		<div class="nowcoder-header">
			<div class="header-main clearfix">
				<a class="nowcoder-logo" href="/" title="牛客网"></a>
				<ul class="nowcoder-navbar" id="nav">
					<li class="active menu">
						<a href="/">首页</a>
					</li>
					<li class="menu">
						<a href="/contestRoom">题库</a>
						<ul class="sub-nav">
							<li><a href="/contestRoom">公司真题</a></li>
							<li><a href="/intelligentTest">专项练习</a></li>
							<li><a href="/activity/oj">在线编程</a></li>
							<li><a href="/kaoyan">考研真题</a></li>
							<li><a href="/finalexam">期末考题</a></li>
							<li><a href="/activity/topics">精华专题</a></li>
							<li><a href="/questionCenter">试题广场</a></li>
						</ul>
					</li>
					<li class="menu">
						<a href="/courses">课程</a>
					</li>
					<li class="menu">
						<span class="ico-nav-new"></span>
						<a href="/recommend">求职</a>
					</li>
					<li class="menu">
						<a href="/discuss">讨论区</a>
					</li>
					<li class="menu">
						<a href="/acm/contest/vip-index">发现</a>
						<ul class="sub-nav">
							<li><a href="/acm/contest/vip-index">竞赛</a></li>
							<li><a href="/show-offer/index">Offer神器</a></li>
							<li><a href="/ranking">排行榜</a></li>
						</ul>
					</li>
				</ul>
				<div class="nav-account">
					<a href="javasript:;" class="nav-account-login" id="nav-login">登录</a>/
					<a href="javasript:;" class="nav-account-reg">注册</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				
			}
		},
		
	}
$(function(){
	$(".menu").mouseover(function(event) {
		$(this).children("ul").show();
	});
	$(".menu") .mouseout(function(){
        $(this).children("ul").hide();
	})
})
</script>

<style lang="less" scoped>
.headerBox{
	height: 54px;
	.nowcoder-header{
		background: #3d444c;
	    position: fixed;
	    width: 100%;
	    z-index: 101;
	    left: 0;
	    margin-bottom: 30px;
	    .header-main{
	    	display: block;
    		zoom: 1;
    		width: 960px;
    		margin: 0 auto;
    		.nowcoder-logo{
    			background: url(//static.nowcoder.com/images/res/logo/logo-v3.png) no-repeat;
			    background-size: 147px 42px;
			    display: block;
			    width: 147px;
			    height: 42px;
			    float: left;
			    margin: 6px 5px 0 0;			    
    		}
    		.nowcoder-navbar{
    			float: left;
    			li{
    				float: left;
				    text-align: center;
				    height: 54px;
				    position: relative;
				    .active{
				    	background-color: #31363d
				    }
				    a:hover{
				    	background: red;
				    	color: #fff
				    }
				    a{
				    	color: #ccc;
				    	font-size: 16px;
				    	display: block;
				    	line-height: 53px;
				    	padding: 0 15px;
				    }
				    .avtive a{
				    	color: #FFF;
				    	text-decoration: none;
				    }
				    .sub-nav{
				    	display: none;
				    	position: absolute;
				    	top: 54px;
				    	left: 0;
				    	border-top: 1px solid #272B31;
				    	li{
				    		height: auto;
				    		border: none;
				    		width: 100%;
				    		background: #31363D;
				    	}
				    	a{
				    		line-height: 40px;
				    		color: #ccc;
				    		white-space: nowrap;
				    	}
				    	a:hover{
				    		color: #fff
				    	}
				    }
    			}    
    		}
    		.nav-account{
    			background: #FF411C;
    			border-radius: 20px;
    			color: #FFF;
    			line-height: 24px;
    			float: right;
    			padding: 2px 0;
    			margin-top: 12px;
    			margin-left: 10px;
    			white-space: nowrap;
    			a{
    				display: inline-block;
    				color: #FFF;
    				font-size: 14px;
    				padding: 0 20px
    			}
    			.nav-account-login{
    			    padding: 0 3px 0 20px;	
    			}
    			.nav-account-reg{
    				padding: 0 20px 0 3px;	
    			}
    		}
	    }
	    .clearfix:after, .clearfix:before {
		    clear: both;
		    content: ".";
		    display: block;
		    height: 0;
		    visibility: hidden;
		}
	}
}	
</style>