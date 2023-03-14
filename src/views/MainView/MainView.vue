<template>
  <section id="main-view-inner">
    <header id="header-bar" class="main-view-top">
      <header-bar />
    </header>

    <section class="main-view-center">
      <aside id="side-bar" class="main-view-left">
        <side-bar />
      </aside>
      <section id="content-area" class="main-view-right">
        <content-area />
      </section>
    </section>

    <footer id="footer-bar" class="main-view-bottom">
      <footer-bar />
    </footer>
  </section>
</template>

<script setup>
import ContentArea from './ContentArea/ContentArea.vue'
import FooterBar from './FooterBar/FooterBar.vue'
import HeaderBar from './HeaderBar/HeaderBar.vue'
import SideBar from './SideBar/SideBar.vue'
</script>

<style lang="less" scoped>
#main-view-inner {
  overflow: hidden;

  .main-view-top {
    height: var(--header-bar-height);
    z-index: var(--header-bar-z-index);
  }

  .main-view-center {
    display: flex;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: var(--header-bar-height);

    .main-view-left {
      width: var(--side-bar-width);
      overflow: hidden;
    }

    .main-view-right {
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
        background: var(--bg-color-opacification);
      }
    }
  }

  .main-view-bottom {
    position: fixed;
    bottom: 0;
    left: var(--side-bar-width);
    right: 0;
    height: var(--footer-bar-height);
    z-index: var(--footer-bar-z-index);
  }
}

/* 布局切换 */

//电脑布局
@media (min-width: 1200px) {
  #main-view-inner {
    &.menu-switch {
      --side-bar-width: calc(var(--spacer-10) + var(--spacer-6) * 2) !important;
    }
  }
}
//平板布局
@media (max-width: 1200px) {
  #main-view-inner {
    --side-bar-width: calc(var(--spacer-10) + var(--spacer-6) * 2) !important;
    .menu-switch-button {
      display: none;
    }
  }
}

//手机布局
@media (max-width: 500px) {
  #main-view-inner {
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

    .main-view-left {
      position: absolute;
      z-index: var(--side-bar-z-index);
      top: 0;
      height: 0;
      left: 0;
      right: 0;
      background-color: var(--bg-color);
      backdrop-filter: blur(30px);
      transition: all 400ms;
    }
    .main-view-right {
      border: none;
      border-radius: 0;
    }
    .main-view-bottom {
      left: 0 !important;
    }

    &.menu-open {
      aside.main-view-left {
        height: calc(100vh - var(--header-bar-height));
      }
    }
  }
}
</style>
