<template>
  <div class="footer-bar-more">
    <div class="music-lyric-button">
      <ripple-button
        v-tippy="{
          content: '显示悬浮歌词',
          placement: 'top',
          animation: 'scale-extreme',
          inertia: true
        }"
      >
        <i class="segoe-fluent-icons">词</i>
      </ripple-button>
    </div>
    <div class="music-list-button">
      <ripple-button
        v-tippy="{
          content: '播放列表',
          placement: 'top-end',
          animation: 'scale-extreme',
          inertia: true
        }"
      >
        <i class="segoe-fluent-icons">&#xe90b;</i>
      </ripple-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer-bar-more {
  height: 100%;
  display: flex;
  > div {
    width: var(--footer-bar-height);
    height: 100%;
    line-height: var(--footer-bar-height);

    > button {
      height: 100%;
      width: 100%;
      border: 0;
      color: inherit;
      background-color: transparent;
      cursor: pointer;
      vertical-align: super;
      padding: 0;
      font-size: var(--font-size-l);

      i.segoe-fluent-icons {
        display: inline-block;
        vertical-align: middle;
      }

      &:hover {
        background-color: var(--button-hover-bg);
      }
    }
    &.music-lyric-button > button {
      font-size: var(--font-size-m);

      i.segoe-fluent-icons {
        transform: translateY(calc(0px - var(--spacer-2)));
      }
    }
  }
}
</style>
