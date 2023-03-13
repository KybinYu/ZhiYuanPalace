<template>
  <div>
    <ripple-button
      class="footer-bar-info"
      @click="openMusicView()"
      v-tippy="{
        content: '进入播放器',
        placement: 'top',
        animation: 'scale-extreme',
        inertia: true
      }"
    >
      <div class="cover">
        <img src="@/assets/uploads/月亮警察.webp" alt="月亮警察" />
      </div>
      <div class="title">
        <span class="name">月亮警察</span>
        <span class="singer">火箭少女101</span>
      </div>
    </ripple-button>
    <swipe-panel-end vertical ref="musicView">
      <music-view />
    </swipe-panel-end>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MusicView from '@/views/MusicView/MusicView.vue'

// 定义与ref同名变量
const musicView = ref()

const openMusicView = () => {
  musicView.value.open()
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
  padding-left: 0;

  .cover {
    position: relative;
    margin-right: var(--spacer-6);

    img {
      width: var(--footer-bar-height);
      vertical-align: middle;
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
    align-items: flex-start;

    span {
      display: block;
      white-space: nowrap;

      &.name {
        font-size: var(--font-size-s);
      }
      &.singer {
        font-size: var(--font-size-xs);
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
</style>
