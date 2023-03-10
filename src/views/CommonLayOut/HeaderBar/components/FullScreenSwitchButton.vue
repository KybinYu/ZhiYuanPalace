<template>
  <div class="full-screen-switch-button-div">
    <ripple-button>
      <i class="segoe-fluent-icons">&#xe740;</i>
    </ripple-button>
  </div>
</template>
<style lang="less" scoped>
.full-screen-switch-button-div {
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
    font-size: var(--font-size-m);

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
@media (max-width: 699.99px) {
  .full-screen-switch-button-div {
    display: none;
  }
}
</style>
