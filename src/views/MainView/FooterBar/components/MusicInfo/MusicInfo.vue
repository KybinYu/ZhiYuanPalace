<template>
  <div>
    <ripple-button class="footer-bar-info" @click="openMusicView()">
      <div class="cover">
        <img src="@/assets/uploads/月亮警察.webp" alt="月亮警察" />
      </div>
      <div class="title">
        <span class="name">月亮警察</span>
        <span class="singer">火箭少女101</span>
      </div>
    </ripple-button>
    <van-swipe
      id="music-view-root-inner"
      style="height: 100vh"
      vertical
      :show-indicators="false"
      @change="onChange($event)"
      ref="musicViewRootInner"
    >
      <van-swipe-item></van-swipe-item>
      <van-swipe-item>
        <music-view />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import MusicView from '@/views/MusicView/MusicView.vue'
</script>

<script>
export default {
  methods: {
    onChange(index) {
      // console.log('当前 Swipe 索引：' + index)
      //如果当前在音乐视图，那么停止点击穿透，获得拖动效果
      if (index == 1) {
        const swipeRoot = document.querySelector('#music-view-root-inner')
        swipeRoot.style = `pointer-events: auto`
      }
      //如果当前在主视图遮罩层，那么恢复点击穿透，恢复位于下层的主视图的交互
      if (index == 0) {
        const swipeRoot = document.querySelector('#music-view-root-inner')
        swipeRoot.style = `pointer-events: none`
      }
    },
    openMusicView() {
      this.$refs.musicViewRootInner.next()
    }
  }
}
</script>

<style lang="less" scoped>
.footer-bar-info {
  display: flex;
  height: 100%;
  padding-right: var(--spacer-6);
  cursor: pointer;
  border: none;
  background: transparent;

  .cover {
    position: relative;
    margin-right: var(--spacer-6);

    img {
      width: var(--footer-bar-height);
    }

    &::after {
      content: '\e971';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      font-size: 24px;
      color: #ccc;
      text-align: center;
      line-height: var(--footer-bar-height);
      font-family: 'segoe-fluent-icons' !important;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      visibility: hidden;
    }
  }

  .title {
    height: var(--footer-bar-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: var(--font-size-m);

    span {
      display: block;
      white-space: nowrap;

      &.name {
        font-size: var(--font-size-s);
        font-weight: 700;
      }
      &.singer {
        font-size: var(--font-size-s);
      }
    }
  }

  &:hover {
    background-color: var(--button-hover-bg);

    .cover {
      img {
        filter: brightness(0.95);
      }

      &::after {
        visibility: visible;
      }
    }
  }
}

#music-view-root-inner {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
}
</style>
