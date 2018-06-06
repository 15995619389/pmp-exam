<template>
    <div class="review-report">
        <div class="graph-box clearfix">
            <div class="graph-info">
                <div class="graph-statistic">
                    <span class="graph-score">得分：{{score}}分</span>
                </div>
                <div class="content-item-order graph-detail">
                    <p>
                        <span class="item-label">试卷：{{paperTitle}}</span>
                    </p>
                    <p>
                        <span class="item-label">正确题数：</span>
                    </p>
                    <p>
                        <span class="item-label">得分：{{score}}分</span>
                    </p>
                    <p>
                        <span class="item-label">用时：{{time}}</span>
                    </p>
                </div>
            </div>

        </div>
        <div class="module-box review-result">
            <div class="module-head clearfix">
                <h1>通过本次练习，你的以下技能评估结果发生了变化。</h1>
            </div>
            <div class="module-body clearfix">
                <div class="result-btn-wrap nc-req-auth">
                    <a href="javascript:;">练习其他技能</a>
                    <a href="javascript:;">再练一套</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            score: 70,
            paperTitle: "HTML/CSS专项练习",
            time: "00:15:04"
        }
    }
}
</script>
<style lang="less" scoped>
.review-report {
    background: #fff;
    border: 1px solid #e0e0e0;
    .graph-box {
        padding: 30px 0;
        overflow: hidden;
        .graph-info {
            width: 450px;
            padding-left: 30px;
            float: left;
            border-right: 1px solid #ddd;
            .graph-statistic {
                font-size: 16px;
                margin-bottom: 20px;
                .graph-score {
                    background: url("https://static.nowcoder.com/images/img/icons/ico-report.png") no-repeat;
                    background-position: 0 -169px;
                    padding-left: 30px;
                    color: #888;
                    height: 28px;
                    line-height: 36px;
                    display: inline-block;
                    margin-right: 40px;
                }
            }
            .graph-detail {
                float: none;
                width: 425px;
                font-size: 16px;
                color: #34495e;
                p {
                    font-weight: 700;
                    margin-bottom: 20px;
                    white-space: nowrap;
                    .item-label {
                        font-size: 16px;
                        width: auto;
                        text-align: left;
                    }
                }
            }
        }
    }
    .review-result {
        background: #f4f4f4;
        margin: 0;
        border: none;
        .module-head {
            padding: 30px 30px 0;
            line-height: normal;
            position: relative;
            h1 {
                font-size: 16px;
                line-height: 16px;
                float: left;
                font-weight: 700;
                white-space: nowrap;
            }
        }
        .module-body {
            padding: 30px;
            .result-btn-wrap {
                text-align: center;
                margin: 50px 0 20px;
                text-align: center
            }
        }
    }
}
</style>
