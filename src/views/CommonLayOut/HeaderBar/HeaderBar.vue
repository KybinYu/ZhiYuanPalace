<template>
  <div class="header-bar-inner">
    <div class="left">
      <MenuSwitchButton />
      <LogoBox />
      <PageSwitchButton />
    </div>

    <div class="center">
      <SearchBar />
    </div>

    <div class="right">
      <AvatarButton />
      <DarkModeSwitchButton />
      <FullScreenSwitchButton />
    </div>
  </div>
</template>
<script setup>
import MenuSwitchButton from './components/MenuSwitchButton.vue'
import LogoBox from './components/LogoBox.vue'
import PageSwitchButton from './components/PageSwitchButton.vue'

import SearchBar from './components/SearchBar.vue'

import AvatarButton from './components/AvatarButton.vue'
import DarkModeSwitchButton from './components/DarkModeSwitchButton.vue'
import FullScreenSwitchButton from './components/FullScreenSwitchButton.vue'
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
