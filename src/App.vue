<template>
  <common-lay-out />
</template>
<script setup>
import CommonLayOut from '@/views/CommonLayOut/CommonLayOut.vue'
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
  }
}
</script>
