<template>
  <div class="footer-bar-control">
    <div class="prev">
      <button>
        <i class="segoe-fluent-icons">&#xf8ac;</i>
      </button>
    </div>
    <div class="play">
      <button><i class="segoe-fluent-icons">&#xedda;</i></button>
    </div>
    <div class="next">
      <button>
        <i class="segoe-fluent-icons">&#xf8ad;</i>
      </button>
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
      height: 100%;
      width: 100%;
      border: 0;
      color: inherit;
      background-color: transparent;
      cursor: pointer;
      vertical-align: super;
      padding: 0;

      .segoe-fluent-icons {
        display: inline-block;
        vertical-align: middle;
        transform: translateY(-2px);
      }

      &:hover {
        background-color: var(--button-hover-bg);
      }
    }

    &.play {
      button {
        font-size: 20px;
        color: inherit;
        background: var(--bg-color-hover);
        border-radius: 50%;
        transform: scale(0.8);
        i {
          transform: translateY(-4px);
        }
      }

      &:hover {
        background-color: var(--button-hover-bg);
      }
    }
  }
}
</style>
