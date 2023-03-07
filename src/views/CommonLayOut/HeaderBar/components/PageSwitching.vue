<template>
  <div class="page-switching">
    <button id="switch-up-btn" @click="pageSwitching(-1)">
      <i class="segoe-fluent-icons">&#xe973;</i>
    </button>
    <button id="switch-down-btn" @click="pageSwitching(1)">
      <i class="segoe-fluent-icons">&#xe974;</i>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    pageSwitching(num) {
      if (num == 1) {
        this.$router.go(1)
      }
      if (num == -1) {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style scoped lang="less">
.page-switching {
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
  .page-switching {
    display: none;
  }
}
</style>
