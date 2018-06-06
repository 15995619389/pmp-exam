import Vue from 'vue'
import Router from 'vue-router'
import contestRoom from "@/components/nav/contestRoom"
import intelligentTest from '@/components/nav/intelligentTest'
import online from '@/components/nav/online'
import kaoyan from '@/components/nav/kaoyan'
import finalexam from '@/components/nav/finalexam'
import topics from '@/components/nav/topics'
import questionCenter from '@/components/nav/questionCenter'
import topic from '@/components/topic/index'
import analyticIndex from '@/components/analytic/index'
import answer from '@/components/analytic/list/answer'
import appraisal from '@/components/analytic/list/appraisal'


Vue.use(Router)

export default new Router({
	mode:"history",
	scrollBehavior:()=>({y:0}),
	  routes: [
	  		{
	            path:"/",
	            redirect:"/intelligentTest"
	        },
	        {
	            path: "/contestRoom",
	            name: "contestRoom",
	            component: contestRoom
	        },
	        {
	        	path:"/intelligentTest",
	        	name:"intelligentTest",
	        	component:intelligentTest
	        },
	        {
	        	path: "/online",
	            name: "online",
	            component: online
	        },
	        {
	        	path: "/kaoyan",
	            name: "kaoyan",
	            component: kaoyan
	        },
	        {
	        	path: "/finalexam",
	            name: "finalexam",
	            component: finalexam
	        },
	        {
	        	path: "/topics",
	            name: "topics",
	            component: topics
	        },
	        {
	        	path: "/questionCenter",
	            name: "questionCenter",
	            component: questionCenter
	        },
	        {
	        	path: "/index",
	            name: "topic",
	            component: topic
			},
			{
				path:"/analyticIndex",
				component:analyticIndex,
				children:[
					{
						path:"/",
						component:answer
					},
					{
						path:"answer",
						component:answer
					},
					{
						path:"appraisal",
						component:appraisal
					}
				]
			},

			
	  ]
})
