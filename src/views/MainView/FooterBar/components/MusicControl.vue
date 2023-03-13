<template>
  <div class="footer-bar-control">
    <div class="prev">
      <ripple-button
        v-tippy="{
          content: '上一首',
          placement: 'top',
          animation: 'scale-extreme',
          inertia: true
        }"
      >
        <i class="segoe-fluent-icons">&#xf8ac;</i>
      </ripple-button>
    </div>
    <div class="play">
      <ripple-button
        v-tippy="{
          content: '播放/暂停',
          placement: 'top',
          animation: 'scale-extreme',
          inertia: true
        }"
      >
        <i class="segoe-fluent-icons">&#xedda;</i>
      </ripple-button>
    </div>
    <div class="next">
      <ripple-button
        v-tippy="{
          content: '下一首',
          placement: 'top',
          animation: 'scale-extreme',
          inertia: true
        }"
      >
        <i class="segoe-fluent-icons">&#xf8ad;</i>
      </ripple-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer-bar-control {
  height: 100%;
  display: flex;
  > div {
    width: var(--footer-bar-height);
    height: 100%;
    line-height: var(--footer-bar-height);

    > button {
      font-size: var(--font-size-l);
      height: 100%;
      width: 100%;
      border: 0;
      color: inherit;
      background-color: transparent;
      cursor: pointer;
      vertical-align: super;
      padding: 0;

      i.segoe-fluent-icons {
        display: inline-block;
        vertical-align: middle;
      }

      &:hover {
        background-color: var(--button-hover-bg);
      }
    }

    &.play {
      button {
        font-size: var(--font-size-xl);
        color: inherit;
        background: var(--bg-color-hover);
        border-radius: 50%;
        transform: scale(0.8);
      }

      &:hover {
        background-color: var(--button-hover-bg);
      }
    }
  }
}
</style>
