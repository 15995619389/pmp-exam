<template>
    <div class="nk-main clearfix">
        <div class="wrapper">
            <div class="tabbed">
                <ul class="clearfix">
                    <li>
                        <a href="javascript:;">
                            <span class="tab-login"></span>登录
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="tab-reg"></span>注册
                        </a>
                    </li>
                </ul>
            </div>
            <div class="wrapper-content clearfix">

            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.wrapper {
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    background: #fff;
    overflow: hidden;
    .tabbed {
        li {
            float: left;
            background: #f3f4f5;
            border-top: 2px solid #f3f4f5;
            width: 50%;
            text-align: center;
            height: 83px;
            line-height: 83px;
            a {
                color: #666;
                font-size: 24px;
                display: block;
                .tab-login,
                .tab-reg {
                    background: url(//static.nowcoder.com/images/img/icons/reg-login.png) no-repeat;
                    display: inline-block;
                    width: 32px;
                    height: 32px;
                    vertical-align: text-bottom;
                    margin-right: 15px;
                }
            }
        }
        .tab-selected {
            background: #FFF;
            border-top: 2px solid #25bb9b;
            a {
                text-decoration: none;
                color: #25bb9b;
                .tab-login {
                    background-position: 0 -174px;
                }
            }
        }
    }
    .wrapper-content {
        border-top: 1px solid #ededed;  
        margin: 0 20px;
        padding: 60px 70px 80px;
    }
}
</style>
