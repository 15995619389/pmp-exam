<template>
	<div class="test-tab-wrap">
		<div class="test-tab-cont">
			<ul class="test-tab ">
				<li>
					<router-link to="/contestRoom">公司真题模考</router-link>
				</li>
				<li>
					<router-link to="/intelligentTest">智能专项练习</router-link>
				</li>
				<li>
					<router-link to="/online">在线编程</router-link>
				</li>
				<li>
					<router-link to="/kaoyan">考研真题</router-link>
				</li>
				<li>
					<router-link to="/finalexam">期末考题</router-link>					
				</li>
				<li>
					<router-link to="/topics">精华专题</router-link>		
				</li>
				<li>
					<router-link to="/questionCenter">试题广场</router-link>		
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		}
		
	}
</script>
<style lang="less" scoped>
	.test-tab-wrap{
		background: #fff;
		height: 50px;
		margin-bottom: -90px;
		width: 100%;
		border-bottom: 1px solid #cdcdcd;
		position: relative;
		z-index: 2;
		    margin-bottom: 15px;
		.test-tab-cont{
			width: 960px;
			margin: 0 auto;	
			.test-tab{
				float: left;
				li{
					float: left;
					margin-right: 50px;
					line-height: 48px;
					font-size: 14px;
					a{
						color: #333;
					}
				}
			}			
		}
		.clearfix{
			display: block;
			zoom:1;
		}
		.clearfix:after, .clearfix:before{
			clear: both;
			content: ".";
			display: block;
			height: 0;
			visibility: hidden;
		}
	}
</style>