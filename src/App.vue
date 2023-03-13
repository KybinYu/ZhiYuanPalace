<template>
  <swipe-panel-start vertical ref="startView">
    <start-view />
  </swipe-panel-start>
  <main-view />
</template>
<script setup>
// import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'
import StartView from '@/views/StartView/StartView.vue'
import MainView from '@/views/MainView/MainView.vue'

function isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return flag
}
if (isMobile()) {
  document.documentElement.setAttribute('device', 'mobile')
} else {
  document.documentElement.setAttribute('device', 'pc')
}

const startView = ref()
const closeStartView = () => {
  startView.value.close()
}
// onMounted(() => {
//   closeStartView()
// })
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
