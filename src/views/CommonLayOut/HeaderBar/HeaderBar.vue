<template>
  <div class="header-bar-inner">
    <div class="left">
      <SwitchMenuButton />
      <LogoBox />
      <PageSwitching />
    </div>

    <div class="center">
      <SearchBar />
    </div>

    <div class="right">
      <AvatarButton />
      <DarkModeButton />
      <FullScreenButton />
    </div>
  </div>
</template>
<script setup>
import SearchBar from './components/SearchBar.vue'
import SwitchMenuButton from './components/SwitchMenuButton.vue'
import LogoBox from './components/LogoBox.vue'
import PageSwitching from './components/PageSwitching.vue'
import DarkModeButton from './components/DarkModeButton.vue'
import AvatarButton from './components/AvatarButton.vue'
import FullScreenButton from './components/FullScreenButton.vue'
</script>
<style lang="less">
#header-bar {
  .header-bar-inner {
    height: 100%;
    display: flex;
    justify-content: space-between;
    > .left,
    > .center,
    > .right {
      height: 100%;
      display: flex;
    }
  }
}
</style>
