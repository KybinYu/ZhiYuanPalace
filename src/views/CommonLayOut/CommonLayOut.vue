<template>
  <section id="layout-root">
    <header id="header-bar" class="layout-top">
      <header-bar />
    </header>

    <section class="layout-center">
      <aside id="side-bar" class="layout-left">
        <side-bar />
      </aside>
      <section id="main-view" class="layout-right">
        <main-view />
      </section>
    </section>

    <footer id="footer-bar" class="layout-bottom">
      <footer-bar />
    </footer>
  </section>
</template>

<script setup>
import HeaderBar from './HeaderBar/HeaderBar.vue'
import SideBar from './SideBar/SideBar.vue'
import FooterBar from './FooterBar/FooterBar.vue'
import MainView from './MainView/MainView.vue'
</script>

<style lang="less" scoped>
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  #layout-root {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: var(--bg-color);

    .layout-top {
      position: fixed;
      top: 0;
      height: var(--header-bar-height);
      left: 0;
      right: 0;
      z-index: 12;
    }

    .layout-center {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin-top: var(--header-bar-height);
      display: flex;
      overflow: hidden;

      .layout-left {
        width: var(--side-bar-width);
        overflow: hidden;
      }

      .layout-right {
        flex: 1;
        padding: var(--spacer-6);
        overflow: auto;

        .full-page {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
          background: var(--bg-color-brighter);
        }
      }
    }

    .layout-bottom {
      position: fixed;
      bottom: 0;
      height: var(--footer-bar-height);
      left: var(--side-bar-width);
      right: 0;
      z-index: 10;
    }
  }
}

/* 布局切换 */

//电脑布局
@media (min-width: 1020px) {
  #layout-root {
    &.menu-switch {
      --side-bar-width: 80px !important;
    }
  }
}
//平板布局
@media (max-width: 1019.99px) {
  #layout-root {
    --side-bar-width: 80px !important;
    .menu-switch-button {
      display: none;
    }
  }
}

//手机布局
@media (max-width: 499.99px) {
  #layout-root {
    --side-bar-width: 100% !important;

    .menu-switch-button {
      display: block;
      width: var(--header-bar-height);
      height: var(--header-bar-height);
      top: 0;
      left: 0;
      border-radius: 0;
      border: 0;
    }
    .layout-top {
      background-color: var(--bg-color);
    }
    .layout-left {
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
