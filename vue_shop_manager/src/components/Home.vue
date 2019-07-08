
<template>
  <div>
    <div>Welcome</div>
    <button @click="loginOut">退出</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
</style>

