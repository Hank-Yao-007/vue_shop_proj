
<template>
  <div>
    <div>Welcome</div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      // 清空token中的值
      window.sessionStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
</style>

