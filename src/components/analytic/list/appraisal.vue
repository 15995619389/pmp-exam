<template>
    <div class="appraisal" v-cloak>
        <div class="result-subject-item">
            <h1>每題得分</h1>
            <ul>
                <li v-for="liItem in list">
                    <a href="javascript:;">{{liItem}}</a>
                </li>
            </ul>
        </div>
        <div class="result-question-box">
            <div class="subject-question">
                <span class="question-number">1</span>
                <div class="question-main">
                    <span>{{topicTitle}}</span>
                </div>
            </div>
        </div>
        <div class="result-subject-item result-subject-answer">
            <h1>正确答案：{{correctAnswer}}&nbsp;&nbsp;你的答案：{{youAnswer}}
                <span class="font-green" v-if='yesorNo'>(正确)</span>
                <span class="font-orange" v-else>(错误)</span>
            </h1>
            <div class="result-answer-item" v-for="answerItem in answerList" v-bind:class="{'green-answer-item':answerItem.isTrue}">
                <pre>{{answerItem.text}}</pre>
            </div>
        </div>
        <div class="result-subject-item knowledge-point">
            <h1>本题知识点</h1>
            <div class="tags-box">
                <a href="javascript:;">{{label}}</a>
            </div>
        </div>

        <div class="result-subject-item analysis-mod">
            <h1 class="clearfix">
                <span class="analytic-discuss-num">共有{{commentsNum}}条评论</span>
                <a href="javascript:;" class="btn float-right btn-primary" v-on:click="addParsing">{{btnText}}</a>
                <!-- <a href="javascript:;" class="btn float-right btn-primary" v-else v-on:click="cancelParsing">取消发表</a> -->
            </h1>
            <div v-show="isTextarea">
                <div class="editor-box">
                    <textarea placeholder="请输入正确的答案及解题思路" rows="7"></textarea>
                </div>
                <h1 class="clearfix" style="overflow:hidden;margin-top:20px;margin-bottom:0">
                    <a href="javascript:;" class="btn float-right btn-primary" v-on:click="published()">发表解析</a>
                </h1>
            </div>
        </div>
        <ul class="answer-list result-subject-item">
            <li class="clearfix" v-for="userList in comments">
                <div class="answer-content clearfix">
                    <div class="answer-info">
                        <a href="javascript:;" class="answer-head">
                            <img v-bind:src="userList.userimg" />
                        </a>
                        <span class="answer-name">{{userList.username}}</span>
                    </div>
                    <div class="answer-brief">{{userList.words}}</div>
                    <div class="answer-legend">
                        <span class="answer-time">发表于：{{userList.time}}</span>
                        <a href="javascript:;">回复（{{userList.like}}）</a>
                    </div>
                    <div class="reply-box">

                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
//日期格式化函数
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            topicTitle: "使用CSS的flexbox布局，不能实现以下哪一个效果：",
            correctAnswer: "C",
            youAnswer: "A",
            yesorNo: false,
            publishTrue: true,
            isTextarea: false,
            label: "HTML/CSS",
            btnText:"添加解析",
            commentsNum: 12,
            answerList: [
                {
                    item: "A",
                    text: "三列布局，随容器宽度等宽弹性伸缩",
                    isTrue: false
                },
                {
                    item: "B",
                    text: "多列布局，每列的高度按内容最高的一列等高",
                    isTrue: false
                },
                {
                    item: "C",
                    text: "三列布局，左列宽度像素数确定，中、右列随容器宽度等宽弹性伸缩",
                    isTrue: true
                },
                {
                    item: "D",
                    text: "多个宽高不等的元素，实现无缝瀑布流布局",
                    isTrue: false
                }
            ],
            //原始用户评论信息
            comments: [{
                username: "张三",
                userimg: "https://images.nowcoder.com/images/20171006/5498860_1507268133157_1BD4B54F1E4C0AC396F122F867C3246A@0e_100w_100h_0c_1i_1o_90Q_1x",
                words: "正确答案是c吧。同时选中了span 标签 和 正确答案是c吧。同时选中了span 标签 和 正确答案是c吧。同时选中了span 标签 和",
                like: 87,
                nolike: 53,
                time: "2017-02-17 09:15:25"
            }, {
                username: "李四",
                userimg: "https://images.nowcoder.com/images/20170408/6229509_1491660517061_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x",
                words: "Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。",
                like: 23,
                nolike: 63,
                time: "2017-3-27 10:12:34"
            }, {
                username: "王五",
                userimg: "https://images.nowcoder.com/images/20170928/4466697_1506603473875_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x",
                words: "Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。",
                like: 27,
                nolike: 33,
                time: "2017-04-02 03:26:54"
            }],
            //原始用户信息
            users: [{
                username: "zhangsan",
                password: "123456",
                userimg: "https://images.nowcoder.com/images/20171006/5498860_1507268133157_1BD4B54F1E4C0AC396F122F867C3246A@0e_100w_100h_0c_1i_1o_90Q_1x",
                words: "世界那么大我想去看看。"
            }, {
                username: "zyc",
                password: "123456",
                userimg: "https://images.nowcoder.com/images/20180224/1587016_1519409296123_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x",
                words: "雨过天晴的美好。"
            }, {
                username: "admin",
                password: "123456",
                userimg: "https://images.nowcoder.com/images/20171118/6973862_1511005981493_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x",
                words: "下大雨了，怎么办啊。"
            }],
            //当前用户信息
            currentUser: { username: "", words: "", userimg: "" },

        }
    },
    methods: {
        addParsing: function() {
            // this.publishTrue = false;
            this.isTextarea = !this.isTextarea;
            if(this.isTextarea){
                this.btnText = "取消发表"
            }else{
                 this.btnText = "添加解析"
            }
        },
        cancelParsing: function() {
            this.publishTrue = true;
            this.isTextarea = false
        },
        published: function() {
            var self = this;
            if ($(".editor-box textarea").val() == "") {
                alert("请先填写评论内容！")
            } else {
                var obj = {};
                obj.username = self.comments.username;
                obj.userimg = self.comments.userimg;
                obj.words = $(".editor-box textarea").val();
                obj.like = 0;
                obj.time = new Date().format("yyyy-MM-dd hh:mm:ss");
                self.comments.push(obj);
                alert("评论成功");
                $(".editor-box textarea").val("")
            }
        }
    }
}
</script>

<style lang="less" scoped>
.appraisal {
    background: #fff;
    .result-subject-item {
        background: #FFF;
        padding: 20px 30px;
        border-bottom: 1px solid #EDEDED;
        h1 {
            font-size: 14px;
            margin-bottom: 20px;
            color: #666;
        }
        ul {
            letter-spacing: -4px;
            margin-right: -10px;
            li {
                letter-spacing: 0;
                display: inline-block;
                margin-right: 5px;
                margin-bottom: 20px;
                a {
                    display: block;
                    color: #FFF;
                    background: #FF431E;
                    font-size: 14px;
                    width: 32px;
                    height: 32px;
                    line-height: 32px;
                    text-align: center;
                }
                a:hover {
                    margin: -6px 0;
                    height: 44px;
                    line-height: 44px;
                    font-size: 16px;
                    color: #FFF;
                }
            }
        }
    }
    .result-question-box {
        padding: 30px;
        border-bottom: 1px solid #ECECEC;
        .subject-question {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
            .question-number {
                display: inline-block;
                background: #1ABC9C;
                border-radius: 12px;
                float: left;
                color: #FFF;
                padding: 5px 7px;
                line-height: 12px;
                font-weight: 400;
            }
            .question-main {
                margin-left: 30px;
                font-size: 14px;
            }
        }
    }
    .result-subject-answer {
        background: #f9f9f9;
        .font-orange {
            color: #ff6547;
        }
        .font-green {
            background: #25bb9b
        }
        .result-answer-item {
            border-radius: 6px;
            border: 1px solid #d4d4d4;
            padding: 10px;
            background: #FFF;
            font-size: 14px;
            margin-bottom: 20px;
            pre {
                padding: 0;
                margin: 0;
                background: 0 0;
                border: none;
                display: block;
                font-size: 14px;
                position: relative;
            }
        }
        .green-answer-item {
            border-color: #1abc9c
        }
    }
    .knowledge-point {
        background: #f4f9fc;
        margin-top: -1px;
        border-top: 1px solid #d9e2e7;
        border-bottom: 1px solid #d9e2e7;
        .tags-box {
            a {
                border-radius: 12px;
                border: 1px solid #eaeaea;
                display: inline-block;
                padding: 2px 10px;
                color: #999;
                font-size: 12px;
                margin-right: 2px;
                background: #FFF;
                margin-bottom: 5px;
                line-height: 16px;
                position: relative;
                cursor: default
            }
            a:hover {
                border-color: #08c;
                color: #08c;
            }
        }
    }
    .analysis-mod {
        h1 {
            margin-top: 7px;
            .analytic-discuss-num {
                margin-top: 10px;
                display: inline-block;
            }
            .btn {
                float: right;
                background: #00BC9B;
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
            }
        }
        .editor-box {
            position: relative;
            textarea {
                width: 896px !important;
                display: block;
            }
        }
    }
    .answer-list {
        li {
            border-bottom: 1px solid #E0E0E0;
            padding-bottom: 15px;
            position: relative;
            padding-top: 15px;
            .answer-content {
                width: 100%;
                .answer-info {
                    margin-bottom: 10px;
                    height: 30px;
                    line-height: 30px;
                    .answer-head {
                        display: block;
                        float: left;
                        width: 30px;
                        height: 30px;
                        border: 1px solid #EDEDED;
                        overflow: hidden;
                        margin-right: 15px;
                        -webkit-border-radius: 50%;
                        -moz-border-radius: 50%;
                        border-radius: 50%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .answer-name {
                        font-size: 14px;
                        vertical-align: middle;
                        display: inline-block;
                        color: #24e5bf!important;
                    }
                }
                .answer-brief {
                    color: #666;
                    font-size: 14px;
                    line-height: 2;
                }
                .answer-legend {
                    margin-top: 10px;
                    color: #999;
                    font-size: 12px;
                    line-height: 20px;
                    a {
                        float: right;
                        color: #21a88b;
                        margin-left: 20px;
                    }
                }
            }
        }
    }
    .reply-box {
        padding: 15px;
        margin: 15px 0px 5px;
        background: rgb(239, 240, 242);
    }
}
</style>


