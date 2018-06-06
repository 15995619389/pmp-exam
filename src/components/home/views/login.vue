<template>
    <div class="logoinBox">
        <div class="input-section">
            <div class="form-group">
                <label class="control-label">邮箱/手机</label>
                <div class="control-group">
                    <input type="text" placeholder="请输入邮箱/手机号" />
                    <span class="input-tip">请输入正确的邮箱或手机</span>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label">密码</label>
                <div class="control-group">
                    <input type="text" placeholder="请输入密码" />
                    <span class="input-tip">请输入正确的密码</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      state
    };
  }
};
</script>
<style lang="less" scoped>
.input-section {
  float: left;
  width: 370px;
  border-right: 1px solid #ededed;
  padding-right: 60px;
  margin-right: -1px;
  position: relative;
  .form-group {
    margin-bottom: 20px;
    .control-label {
      padding: 0 15px;
      font-size: 14px;
      float: left;
      width: 80px;
      line-height: 42px;
      height: 42px;
      text-align: right;
      margin-bottom: 0;
    }
    .control-group {
      line-height: 42px;
      height: 42xp;
      float: left;
      position: relative;
      width: 260px;
      input {
        border: 1px solid #d4d4d4;
        color: #34495e;
        font-family: Lato, sans-serif;
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
        color: #ff5400;
      }
    }
    .error {
      input {
        border-color: #e74c3c;
        color: #e74c3c;
      }
    }
  }
}
</style>
