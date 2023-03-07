<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
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
import HeaderBar from '@/views/CommonLayOut/HeaderBar/HeaderBar.vue'
import SideBar from '@/views/CommonLayOut/SideBar/SideBar.vue'
import FooterBar from '@/views/CommonLayOut/FooterBar/FooterBar.vue'
import MainView from '@/views/CommonLayOut/MainView/MainView.vue'
</script>

<style lang="less">
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  #layout-root {
    position: absolute;
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
</style>
