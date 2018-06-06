<template>
    <div class="appraisal">
        <div class="review-report">
            <div class="graph-box clearfix">
                <div class="graph-info">
                    <div class="graph-statistic"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.review-report {
    background: #fff;
    border: 1px solid #e0e0e0;
    .graph-box {
        padding: 30px 0;
        .graph-info {
            width: 450px;
            padding-left: 30px;
            float: left;
            border-right: 1px solid #ddd;
            .graph-statistic {
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
    }
}
</style>


