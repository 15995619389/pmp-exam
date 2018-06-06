<template>
	<div class="logoinBox">
		<div id="mask" v-show="isMask"></div>
		<div class="logoin_wrap" v-show="isMask">
			<div class="pop-title">
				<a href="javascript:void(0);" class="pop-close" title="关闭" @click="ShutDown()"></a>
				<span class="pop-error-tip" style="display:none;"></span><h1>{{logoinTrue}}</h1>
			</div>
			<div class="pop-content">
				<!-- 登录 -->
				<div class="wrapper-content ld-login-part clearfix" v-if="isLogoin">
					<div class="input-section" id="logoin">
						<form>
							<div class="form-group">
								<label class="control-label">邮箱/手机</label>
								<div class="control-group">
									<input type="text" class="ld-email phone" placeholder="请输入邮箱/手机号">
									<i class="input-icon fui-cross"></i>
									<span class="input-tip"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="control-label">密码</label>
								<div class="control-group">
									<input type="text" class="ld-email psw" placeholder="请输入密码">
									<i class="input-icon fui-cross"></i>
									<span class="input-tip"></span>
								</div>
							</div>
							<div class="form-group about-pwd clearfix">
								<div class="keep-pwd"><label><input type="checkbox" class="ld-rem" checked=""> 记住登录</label></div>
								<a href="javascript:;" class="forget-pwd"> 忘记密码？</a>
							</div>
							<div class="form-group">
								<div class="col-input-login">
									<a href="javascript:;" class="btn btn-primary btn-block ld-sumbit" @click="lijiLogo()">立即登录</a>
								</div>
							</div>
							
						</form>
						<div class="login-tips">
							还没有牛客网账号？ <a href="javascript:void(0);" class="ld-toRegister" @click="registered()">极速注册</a>
						</div>
					</div>
					<div class="other-login-way">
						<span class="separate-line">或</span>
						<div class="login-way">
							<a href="javascript:void(0);" title="QQ账号登录" class="nc-js-action-oauth login-qq">QQ账号登录</a>
							<a href="javascript:void(0);" title="微博账号登录" class="nc-js-action-oauth login-wb">微博账号登录</a>
							<a href="javascript:void(0);" title="微信账号登录" class="nc-js-action-oauth login-wx">微信账号登录</a>
							<div class="login-fold">
								<a href="javascript:void(0);" title="" class="login-more">更多三方账号</a>
							</div>
						</div>
					</div>
				</div>
				<!-- 注册 -->
				<div class="wrapper-content ld-login-part clearfix" v-else>
					<div class="input-section" id="registered">
						<form>
							<div class="form-group">
								<label class="control-label">邮箱/手机</label>
								<div class="control-group">
									<input type="text" class="ld-email" placeholder="请输入邮箱/手机号">
									<i class="input-icon fui-cross"></i>
									<span class="input-tip"></span>
								</div>
							</div>
							<div class="form-group">
								<label class="control-label">密码</label>
								<div class="control-group">
									<input type="text" class="ld-email" placeholder="请输入密码">
									<i class="input-icon fui-cross"></i>
									<span class="input-tip"></span>
								</div>
							</div>	
							<div class="form-group">
								<label class="control-label">重输密码</label>
								<div class="control-group">
									<input type="text" class="ld-email" placeholder="请重复输入密码">
									<i class="input-icon fui-cross"></i>
									<span class="input-tip"></span>
								</div>
							</div>							
							<div class="form-group">
								<div class="col-input-login">
									<a href="javascript:;" class="btn btn-primary btn-block ld-sumbit">立即注册</a>
								</div>
							</div>
							
						</form>
						<div class="login-tips">
							已有牛客网账号？ <a href="javascript:void(0);" class="ld-toRegister" @click="LoginNow()">立即登录</a>
						</div>
					</div>
					<div class="other-login-way">
						<span class="separate-line">或</span>
						<div class="login-way">
							<a href="javascript:void(0);" title="QQ账号登录" class="nc-js-action-oauth login-qq">QQ账号登录</a>
							<a href="javascript:void(0);" title="微博账号登录" class="nc-js-action-oauth login-wb">微博账号登录</a>
							<a href="javascript:void(0);" title="微信账号登录" class="nc-js-action-oauth login-wx">微信账号登录</a>
							<div class="login-fold">
								<a href="javascript:void(0);" title="" class="login-more">更多三方账号</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				isLogoin:true,
				isMask:true,
				logoinTrue:"登录",
				//原始用户信息
		        users: [{
		            username: "zhangsan",
		            password: "123456",
		            userimg: "user.jpg",
		            words: "世界那么大我想去看看。"
		        }, {
		            username: "zyc",
		            password: "123456",
		            userimg: "user01.jpg",
		            words: "雨过天晴的美好。"
		        }, {
		            username: "admin",
		            password: "123456",
		            userimg: "user02.jpg",
		            words: "下大雨了，怎么办啊。"
		        }],
		        //当前用户信息
		        currentUser: { username: "", words: "", userimg: "" },
			}
		},
		methods:{
			LoginNow:function(){
				this.$data.isLogoin = true;
				this.$data.logoinTrue = "登录"
			},
			registered:function(){
				this.$data.isLogoin = false;
				this.$data.logoinTrue = "注册"
			},
			ShutDown:function(){
				this.$data.isMask = false
				// this.$emit('LogoinName')
			},
			lijiLogo:function(){
				var username = $("#logoin").find(".phone").val();//获取用户名
				var psw = $("#logoin").find(".psw").val();//获取密码
				var flag = false;
				// for (var i = 0; len <this.users.length; i<len;i++) {
				// 	users[i]
				// }
			}
		}
	}
	
</script>
<style lang="less" scoped="scoped">
	.logoin_wrap{
		width: 770px;
		position: fixed;
		top: 30%;
		left: 50%;
		height: auto;
		margin-left: -335px;background: #fff;
		border: 1px solid #ddd;
		border-radius: 5px;
		z-index: 9999;
		padding-bottom:  20px;
		overflow: hidden;
		.pop-title {
			padding: 15px 20px;
			overflow: hidden;
			background: #f0f0f0;
			border-radius: 4px 4px 0 0;
			.pop-close {
				display: block;
				text-indent: -9999em;
				outline: 0;
				float: right;
				width: 12px;
				height: 12px;
				margin-top: 4px;
				background: url(http://static.nowcoder.com/images/img/pop-close.png) no-repeat;
			}
			.pop-error-tip {
				color: #FF6547;
				font-size: 14px;
				float: right;
				padding: 0 20px 0 0;
			}
			h1{
				float: left;
				font-size: 16px;
				font-weight: 400;
				line-height: 20px;
			}
			h1:before {
				background: #FF6547;
				content: "";
				display: inline-block;
				width: 7px;
				height: 7px;
				margin-right: 5px;
				margin-bottom: 2px;
				vertical-align: middle;
			}
		}
		.pop-content{
			padding: 20px;

			.wrapper-content{
				border-top: none;
				margin: 0;
				padding: 0 0 20px;
				.input-section{
					float: left;
					width: 370px;
					border-right: 1px solid #ededed;
					padding-right: 60px;
					margin-right: -1px;
					position: relative;
					padding-left: 15px;
					.control-label{
						padding: 0 15px;
						font-size: 14px;
						float: left;
						width: 80px;
						line-height: 42px;
						height: 42px;
						text-align: right;
						margin-bottom: 0;
					}
					.form-group{
						margin-bottom: 20px;
						overflow: hidden;
					}
					.control-group{
						float: left;
						line-height: 42px;
						height: 42px;
						position: relative;
						width: 260px;
					}
					.login-tips {
						color: #999;
						font-size: 14px;
						margin-top: -10px;
						margin-left: 110px;
						a{
							color: #67cab2;
						}
					}
				}
				.other-login-way {
					float: left;
					border-left: 1px solid #ededed;
					padding-left: 60px;
					position: relative;
					.separate-line {
						position: absolute;
						top: 46%;
						left: -6px;
						background: #FFF;
						color: #999;
						font-size: 14px;
					}								
					.bind-login a, .login-way .login-more, .login-way a{
						display: block;
						margin-bottom: 20px;
						border: 1px solid #d4d4d4;
						border-radius: 6px;
						line-height: 38px;
						height: 38px;
						font-size: 14px;
						color: #666;
						padding-left: 50px;
						width: 155px;
						background: url(http://static.nowcoder.com/images/img/icons/ico-bind-logo.png) 8px 0 no-repeat;
					}
					.bind-login .login-qq, .login-way .login-qq {
						background-position: 8px -235px;
					}
					.bind-login .login-wb, .login-way .login-wb {
						background-position: 8px -278px;
					}
					.bind-login .login-wx, .login-way .login-wx {
						background-position: 8px -390px;
					}
					.login-way .login-qq:hover{
						background-position: 8px 8px
					}
					.login-way .login-wb:hover{
						background-position: 8px -40px
					}
					.login-way .login-wx:hover{
						background-position: 8px -160px
					}
					.login-way{
						a{
							width: 130px;
							padding-left: 50px
						}
						a:hover{
							color: #67cab2
						}
						.login-fold{
							width: 150px;
							.login-more{
								margin: 0;
								background: url(http://static.nowcoder.com/images/img/icons/ico-fold.png) 12px 12px no-repeat;
							}
						}
					}
				}	





				.uneditable-input, input[type=text], input[type=password], input[type=email], textarea {
					border: 1px solid #d4d4d4;
					color: #34495e;
					font-family: Lato,sans-serif;
					font-size: 14px;
					padding: 8px 5px 7px;
					width: 248px;
					height: 22px;
					border-radius: 3px;
					outline: 0;
				}
				.input-tip {
					position: absolute;
					left: 0;
					bottom: -16px;
					display: none;
					font-size: 14px;
					line-height: 14px;
				}
				.error .input-tip {
					color: #ff5400;
				}
			}
			.about-pwd{
				margin: 0 0 10px 110px
			}
			.keep-pwd{
				margin-left: 0;;
				float: left;
				label{
					font-size: 14px;
					margin: 0;
					color: #999;
				}
				input{
					width: auto
				}
			}
			.forget-pwd {
				float: right;
				color: #67cab2!important;
				font-size: 14px;
			}
			.col-input-login{
				margin-left: 110px;
				width: 258px;
				.btn{
					width: 100%;
					background: #00BC9B;
					display: block;
					text-align: center;
					padding: 10px 0;
					color: #FFF;
					font-size: 14px;
					border-radius: 3px;
					border: none 0;
					cursor: pointer;
					line-height: normal;
					outline: 0;
					white-space: nowrap;
				}
			}

		}
		.control-group>.input-icon {
			position: absolute;
			top: 9px;
			right: 10px;
			vertical-align: middle;
			font-size: 20px;
			background: #FFF;
			-webkit-border-radius: 6px;
			-moz-border-radius: 6px;
			border-radius: 6px;
			line-height: 20px;
			display: none;
		}
		.input-icon.fui-cross {
			background: #ff5400;
			color: #FFF;
			font-size: 12px;
			border-radius: 20px;
			width: 20px;
			height: 20px;
			line-height: 20px;
			text-align: center;
		}
	}
	
</style>