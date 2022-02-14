<template>
  <img src="./assets/logo.png" alt="">
  <m-button />
  <m-icon />
  <button @click="handleLayer">弹窗</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      a: false
    }
  },
  methods: {
    handleLayer() {
      this.$mui.message({
        type: 'success',
        message: '这是一个弹窗展示'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
