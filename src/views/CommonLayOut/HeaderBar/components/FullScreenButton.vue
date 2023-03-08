<template>
  <div class="fullscreen">
    <button>
      <i class="segoe-fluent-icons">&#xe740;</i>
    </button>
  </div>
</template>
<style lang="less" scoped>
.fullscreen {
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
    font-size: 14px;

    &:hover {
      color: var(--td-brand-color);
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}

//移动端隐藏元素
@media (max-width: 699.99px) {
  .fullscreen {
    display: none;
  }
}
</style>
