<template>
  <div class="page-switch-button-div">
    <button @click="pageSwitching(-1), animation($event)">
      <i class="segoe-fluent-icons">&#xe973;</i>
    </button>
    <button @click="pageSwitching(1), animation($event)">
      <i class="segoe-fluent-icons">&#xe974;</i>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    animation(e) {
      //延迟动画
      //获得点击元素的第一个子元素
      const icon = e.currentTarget.firstElementChild
      icon.classList.add('page-switch-icon-animation')
      setTimeout(function () {
        icon.classList.remove('page-switch-icon-animation')
      }, 200)
    },
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
<style lang="less" scoped>
.page-switch-button-div {
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
      transform: none;
      transition: all 400ms;
      &.page-switch-icon-animation {
        transform: scale(2, 0.5);
      }
    }

    &:hover {
      color: var(--td-brand-color);
      background-color: var(--button-hover-bg);
    }
  }
}

//移动端隐藏元素
@media (max-width: 699.99px) {
  .page-switch-button-div {
    display: none;
  }
}
</style>
