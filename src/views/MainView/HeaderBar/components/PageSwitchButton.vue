<template>
  <div class="page-switch-button-root">
    <ripple-button
      @click="pageSwitching(-1), animation($event)"
      v-tippy="{
        content: '后退',
        placement: 'bottom',
        animation: 'scale-extreme',
        inertia: true
      }"
    >
      <i class="segoe-fluent-icons">&#xe973;</i>
    </ripple-button>
    <ripple-button
      @click="pageSwitching(1), animation($event)"
      v-tippy="{
        content: '前进',
        placement: 'bottom',
        animation: 'scale-extreme',
        inertia: true
      }"
    >
      <i class="segoe-fluent-icons">&#xe974;</i>
    </ripple-button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

function animation(e) {
  //延迟动画
  //获得点击元素的第一个子元素的第一个子元素
  const icon = e.currentTarget.firstElementChild.firstElementChild
  icon.classList.add('page-switch-icon-animation')
  setTimeout(function () {
    icon.classList.remove('page-switch-icon-animation')
  }, 200)
}

const router = useRouter()

function pageSwitching(num) {
  if (num == 1) {
    router.go(1)
  }
  if (num == -1) {
    router.go(-1)
  }
}
</script>
<style lang="less" scoped>
.page-switch-button-root {
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
      transform: none;
      transition: all 400ms;
      vertical-align: middle;
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
@media (max-width: 1200px) {
  .page-switch-button-root {
    display: none;
  }
}
</style>
