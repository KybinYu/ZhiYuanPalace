<template>
  <div class="footer-bar-inner">
    <div class="left">
      <music-info />
    </div>
    <div class="center">
      <music-control />
    </div>
    <div class="right">
      <music-more />
    </div>
  </div>
</template>
<script setup>
import MusicInfo from './components/MusicInfo/MusicInfo.vue'
import MusicControl from './components/MusicControl.vue'
import MusicMore from './components/MusicMore.vue'
</script>
<style lang="less">
#footer-bar {
  background-color: var(--bg-color);
  box-shadow: var(--shadow-3);
  .footer-bar-inner {
    height: 100%;
    display: flex;
    justify-content: space-between;
    > .left,
    > .center,
    > .right {
      height: 100%;
      display: flex;
    }
  }
}
//移动端隐藏元素
@media (max-width: 699.99px) {
  .footer-bar-inner > .right {
    display: none !important;
  }
}
</style>
