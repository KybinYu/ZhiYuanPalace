<template>
  <main-view />
</template>
<script setup>
import MainView from '@/views/MainView/MainView.vue'
</script>
<script>
export default {
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  },
  mounted() {
    if (this.isMobile()) {
      document.documentElement.setAttribute('device', 'mobile')
    } else {
      document.documentElement.setAttribute('device', 'pc')
    }
    // this.$refs.layoutSwipeRoot.next()
  }
}
</script>
<style>
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: var(--bg-color);
}
</style>
