<template>
  <swipe-panel-start vertical ref="startView">
    <start-view />
  </swipe-panel-start>
  <acrylrc>
    <main-view />
  </acrylrc>
</template>
<script setup>
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
</script>
<style lang="less">
body {
  height: 100vh;
}
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  > .acrylrc {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;

    > .acrylrc-gaussian-blur {
      backdrop-filter: none;
    }
  }
}

//背景图
//处理性能问题，暂时使用伪元素方法进行模糊
#app::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('@/assets/images/20210617054007963.jpg') no-repeat
    center/cover;
  filter: blur(16px);
  margin: -32px;
}
:root[theme-mode='dark'] #app::before {
  background: url('@/assets/images/20210617054007202.jpg') no-repeat
    center/cover;
}
</style>
