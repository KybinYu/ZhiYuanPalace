<template>
  <ripple-button class="menu-switch-button" @click="switchMenu(), animation()">
    <i class="segoe-fluent-icons" id="menu-switch-icon">&#xe700;</i>
  </ripple-button>
</template>

<script>
export default {
  methods: {
    animation() {
      //延迟动画
      const icon = document.querySelector('#menu-switch-icon')
      icon.classList.add('menu-switch-icon-animation')
      setTimeout(function () {
        icon.classList.remove('menu-switch-icon-animation')
      }, 200)
    },
    switchMenu() {
      const mainViewRoot = document.getElementById('main-view-inner')
      if (mainViewRoot) {
        if (mainViewRoot.classList.contains('menu-switch')) {
          mainViewRoot.classList.remove('menu-switch')
        } else {
          mainViewRoot.classList.add('menu-switch')
        }
        if (mainViewRoot.classList.contains('menu-open')) {
          mainViewRoot.classList.remove('menu-open')
        } else {
          mainViewRoot.classList.add('menu-open')
        }
      }
    }
  }
}
</script>
<style lang="less">
/* 按钮样式 */
.menu-switch-button {
  color: inherit !important;
  transition: none;
  width: var(--header-bar-height);
  height: var(--header-bar-height);
  border-radius: 0;
  background-color: transparent;
  font-size: var(--font-size-m);
  border: 0;

  i#menu-switch-icon {
    transition: all 200ms;
    display: inline-block;
    vertical-align: middle;

    &.menu-switch-icon-animation {
      transition: all 200ms;
      transform: scaleX(0.4);
    }
  }
  &:hover {
    color: var(--td-brand-color);
    background-color: var(--button-hover-bg);
  }
}
//平板布局
@media (max-width: 1019.99px) {
  .menu-switch-button {
    display: none;
  }
}
//手机布局
@media (max-width: 499.99px) {
  .menu-switch-button {
    display: block;
  }
}
</style>
