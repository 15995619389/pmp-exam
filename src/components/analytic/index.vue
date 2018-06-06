<template>
	<div class="analyticBox">
		<div class="analytic-page nk-main clearfix">
			<div class="menu-box">
				<ul class="menu clearfix">
					<!-- <li v-on:click="curId = 0" v-bind:class="{'cur':curId===0}">
						<a href="javascripr:;" alt="">评估报告</a>
					</l>
					<li v-on:click="curId = 1" v-bind:class="{'cur':curId===1}">
						<a href="javascripr:;">答案解析</a>
					</li> -->
					<li>
						<router-link to="/analyticIndex/answer" v-bind:class="{'cur':curId===0}">评估报告</router-link>
					</li>
					<li><router-link to="/analyticIndex/appraisal" v-bind:class="{'cur':curId===1}">答案解析</router-link></li>
				</ul>
			</div>
			<div>
				<!-- <answer v-show="curId==0"></answer>
				<appraisal v-show="curId==1"></appraisal> -->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
// import answer from '../analytic/answer.vue'
// import appraisal from '../analytic/appraisal.vue'
	export default{
		data(){
			return{
				 curId:0
			}
		}
		// components:{
		// 	answer,
		// 	appraisal
		// }
	}
</script>

<style lang="less" scoped>
	.nk-main{
		margin: 0 auto;
		width: 960px;
		padding-top: 70px;
		padding-bottom: 250px;
		.menu-box{
			background: #FFF;
			border-bottom: 2px solid #00bc9b;
			border-top: none;
			overflow: hidden;
			.menu{
				float: left;
				letter-spacing: -4px;
				white-space: nowrap;
				li{
					letter-spacing: 0;
					display: inline-block;
					margin-right: 1px;
					position: relative;
				}
				.cur{
					background: #00bc9b;
					color: #fff;
					a{
						color: #fff;
					}
				}
				.selected, .selected .sub-menu, .selected a, .selected a:hover {
					background: #00bc9b;
					color: #FFF;
				}
				a{
					display: block;
					padding: 0 20px;
					height: 42px;
					line-height: 42px;
					font-size: 14px;
					text-align: center;
					color: #333;
					white-space: nowrap;
				}
			}
		}
	}
</style>