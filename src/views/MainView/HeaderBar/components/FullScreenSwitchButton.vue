<template>
  <div class="full-screen-switch-button-root">
    <ripple-button
      id="full-screen-switch-button"
      v-tippy="{
        content: '全屏',
        placement: 'bottom-start',
        animation: 'scale-extreme',
        inertia: true
      }"
    >
      <i class="segoe-fluent-icons">&#xe740;</i>
    </ripple-button>
  </div>
</template>
<script></script>
<style lang="less" scoped>
.full-screen-switch-button-root {
  display: flex;
  height: 100%;

  button {
    width: var(--header-bar-height);
    border: 0;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    vertical-align: super;
    padding: 0;
    font-size: var(--font-size-s);

    i.segoe-fluent-icons {
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      color: var(--td-brand-color);
      background-color: var(--button-hover-bg);
    }
  }
}

//移动端隐藏元素
@media (max-width: 500px) {
  .full-screen-switch-button-root {
    display: none;
  }
}
</style>
