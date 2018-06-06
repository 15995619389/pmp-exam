<template>
	<div class="swipera">  
        <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in itemImg">  
            	<img :src="item.url" alt="">
            </swiper-slide> 
            <!-- <swiper-slide>  
            	<img src="../../assets/chan4.jpg" alt="">
            </swiper-slide> 
            <swiper-slide>  
            	<img src="../../assets/chan5.jpg" alt="">
            </swiper-slide> 
            <swiper-slide>  
            	<img src="../../assets/chan7.jpg" alt="">
            </swiper-slide> 
            <swiper-slide>  
            	<img src="../../assets/chan8.jpg" alt="">
            </swiper-slide>   -->
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
    </div> 
</template>

<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
	export default {

		components:{
			swiper,
			swiperSlide
		},
		data(){
			return {
				itemImg:[
					{url:"../../assets/chan4.jpg"},
					{url:"../../assets/chan5.jpg"},
					{url:"../../assets/chan7.jpg"},
					{url:"../../assets/chan8.jpg"}
				],				
				swiperOption:{
					notNextTick: true,  
					pagination: '.swiper-pagination',  
					slidesPerView: 'auto',  
					centeredSlides: true,  
					paginationClickable: true,  
					spaceBetween: 30,  
					onSlideChangeEnd:swiper=>{
						this.page = swiper.realIndex+1;
						this.index = swiper.realIndex;
					}
				}
			}
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			}
		},
		mouted(){
			var that = this;
			this.swiper.slideTo(0,0,false);
			// 自动播放
			setInterval(function(){
				that.swiper.slideNext()
			},2000)
		}
	}
</script>
<style scoped>
	
</style>