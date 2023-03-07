<template>
  <button class="switch-menu-button" @click="switchMenu()">
    <i class="segoe-fluent-icons">&#xe8e4;</i>
  </button>
</template>

<script>
export default {
  methods: {
    switchMenu() {
      const layoutRoot = document.getElementById('layout-root')
      if (layoutRoot) {
        if (layoutRoot.classList.contains('menu-switch')) {
          layoutRoot.classList.remove('menu-switch')
        } else {
          layoutRoot.classList.add('menu-switch')
        }
        if (layoutRoot.classList.contains('menu-open')) {
          layoutRoot.classList.remove('menu-open')
        } else {
          layoutRoot.classList.add('menu-open')
        }
      }
    }
  }
}
</script>
<style lang="less">
/* 按钮样式 */
.switch-menu-button {
  color: inherit !important;
  transition: none;
  width: var(--header-bar-height);
  height: var(--header-bar-height);
  border-radius: 0;
  background-color: transparent;
  border: 0;
  &:hover {
    color: var(--td-brand-color);
    background-color: rgba(0, 0, 0, 0.05);
  }
}

/* 布局切换 */

//电脑布局
@media (min-width: 1020px) {
  #layout-root {
    &.menu-switch {
      --side-bar-width: 88px !important;
    }
  }
}
//平板布局
@media (min-width: 500px) and (max-width: 1019.99px) {
  #layout-root {
    --side-bar-width: 88px !important;
    .switch-menu-button {
      display: none;
    }
  }
}

//手机布局
@media (max-width: 499.99px) {
  #layout-root {
    --side-bar-width: 100% !important;

    .switch-menu-button {
      width: var(--header-bar-height);
      height: var(--header-bar-height);
      top: 0;
      left: 0;
      border-radius: 0;
      background-color: transparent;
      border: 0;
    }
    header.layout-top {
      background-color: var(--bg-color);
    }
    aside.layout-left {
      position: fixed;
      z-index: 11;
      top: var(--header-bar-height);
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--bg-color);
      backdrop-filter: blur(30px);
      transform: translateY(-100vh);
      transition: transform 400ms;
    }
    .layout-right {
      border: none;
      border-radius: 0;
    }
    .layout-bottom {
      left: 0 !important;
    }

    &.menu-open {
      aside.layout-left {
        transform: translateY(0px);
      }
    }
  }
}
</style>
