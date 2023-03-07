<template>
  <div class="footer-bar-more">
    <div class="music-lyric-button">
      <button><i class="segoe-fluent-icons">词</i></button>
    </div>
    <div class="music-list-button">
      <button>
        <i class="segoe-fluent-icons">&#xe90b;</i>
      </button>
    </div>
  </div>
</template>
<style lang="less">
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
      font-size: 16px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    &.music-lyric-button > button {
      font-size: 14px;
      transform: translateY(-2px);
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
