<template>
    <div class="userInfoBox">
        <div class="nk-main profile-page clearfix">
            <div class="profile-info-wrapper">
                <div class="profile-level level1"></div>
                <div class="profile-info-main">
                    <a href="javascript:;" class="head-pic  js-self-avatar "></a>
                    <div class="profile-info-cont">
                        <div>
                            <a href="javascript:;" class="profile-user-name">{{userName}}</a>
                        </div>
                        <ul class="profile-cont clearfix">
                            <li>
                                <i class="ico-pcity"></i>{{userAddress}}
                            </li>
                            <li>
                                <i class="ico-pwork"></i>{{userJob}}
                            </li>
                            <li>
                                <i class="ico-pedu"></i>{{userSchool}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            userName: "小猪佩奇",
            userImg: 'https://images.nowcoder.com/images/20180418/7225558_1524023601140_7C2C60506876716CCF0E706DB13D4511@0e_200w_200h_0c_1i_1o_90Q_1x',
            userAddress: "上海市浦东新区张东路1138号",
            userJob: "前端工程师",
            userSchool: "清华大学"

        }
    }
}
</script>

<style lang="less" scoped>
.userInfoBox {
    .profile-page {
        .profile-info-wrapper {
            position: relative;
            margin-bottom: 10px;
            height: 100px;
            background: #fff;
            clear: both;
            border: 1px solid #e0e0e0;
            border-radius: 3px;
            .profile-level {
                width: 10px;
                height: 100%;
                border-radius: 3px 0 0 3px;
                float: left;
            }
            .level1 {
                background: #25bb9b
            }
            .profile-info-main {
                float: left;
                padding: 20px 20px 0;
                .head-pic {
                    border-radius: 50%;
                    display: block;
                    float: left;
                    height: 60px;
                    margin-right: 10px;
                    overflow: hidden;
                    width: 60px;
                }
                .profile-info-cont {
                    margin-left: 80px;
                    padding-top: 5px;
                    .profile-user-name {
                        max-width: 21em;
                        display: inline-block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: 14px;
                        vertical-align: middle;
                        line-height: 1;
                        background: #24e5bf!important
                    }
                    ul {
                        overflow: hidden;
                        margin: 15px 0;
                        li {
                            float: left;
                            margin-right: 20px;
                            margin-bottom: 5px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 14em;
                            i {
                                background: url(//static.nowcoder.com/images/img/profile/icon-card.png) no-repeat;
                                display: inline-block;
                                width: 21px;
                                height: 16px;
                                vertical-align: text-bottom;
                                margin-right: 5px;
                            }
                            .profile-cont .ico-pcity {
                                background-position: 0 0;
                            }
                            .ico-pwork {
                                background-position: 0 -35px;
                            }
                            .profile-cont .ico-pedu {
                                background-position: 0 -67px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>