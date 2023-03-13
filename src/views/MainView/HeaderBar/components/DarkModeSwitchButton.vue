<template>
  <div class="dark-mode-switch-button-root">
    <ripple-button
      @click="darkMode()"
      v-tippy="{
        content: darkmodeButonTooltip.msg,
        placement: 'bottom',
        animation: 'scale-extreme',
        inertia: true
      }"
    >
      <i class="segoe-fluent-icons" id="dark-mode-switch-icon">
        {{ darkmodeButonTooltip.icon }}
      </i>
    </ripple-button>
  </div>
</template>

<script setup>
import { showToast } from 'vant'
import { reactive, toRef } from 'vue'

const obj = reactive({
  darkmodeButonTooltip: {
    msg: '夜间模式',
    icon: '\ue708'
  }
})
const darkmodeButonTooltip = toRef(obj, 'darkmodeButonTooltip')

function darkMode() {
  const icon = document.querySelector('#dark-mode-switch-icon')
  if (!document.documentElement.getAttribute('theme-mode')) {
    //切换主题
    document.documentElement.setAttribute('theme-mode', 'dark')
    //适配vant组件
    document.documentElement.classList.add('van-theme-dark')

    //弹出提示
    showToast({
      position: 'bottom',
      message: '夜间模式已开启',
      icon: 'https://pan.yiru.love/static/images/emoji/1f634.webp'
    })

    //延迟更换图标，配合动画
    icon.classList.add('dark-mode-switch-icon-animation-begin')
    var th = this
    setTimeout(function () {
      icon.classList.remove('dark-mode-switch-icon-animation-begin')
      icon.classList.add('dark-mode-switch-icon-animation-end')
      th.darkmodeButonTooltip.msg = '日间模式'
      th.darkmodeButonTooltip.icon = '\ue706'
      setTimeout(function () {
        icon.classList.remove('dark-mode-switch-icon-animation-end')
      }, 400)
    }, 200)
  } else {
    //切换主题
    document.documentElement.removeAttribute('theme-mode')
    //适配vant组件
    document.documentElement.classList.remove('van-theme-dark')

    //弹出提示
    showToast({
      position: 'bottom',
      message: '夜间模式已关闭',
      icon: 'https://pan.yiru.love/static/images/emoji/1f60e.webp'
    })

    //延迟更换图标，配合动画
    icon.classList.add('dark-mode-switch-icon-animation-begin')
    var th = this
    setTimeout(function () {
      icon.classList.remove('dark-mode-switch-icon-animation-begin')
      icon.classList.add('dark-mode-switch-icon-animation-end')
      th.darkmodeButonTooltip.msg = '夜间模式'
      th.darkmodeButonTooltip.icon = '\ue708'
      setTimeout(function () {
        icon.classList.remove('dark-mode-switch-icon-animation-end')
      }, 600)
    }, 300)
  }
}
</script>

<style lang="less" scoped>
.dark-mode-switch-button-root {
  display: flex;
  height: 100%;
  overflow: hidden;

  button {
    width: var(--header-bar-height);
    border: 0;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    vertical-align: super;
    padding: 0;
    font-size: var(--font-size-s);

    i#dark-mode-switch-icon {
      display: inline-block;
      vertical-align: middle;

      &.dark-mode-switch-icon-animation-begin {
        transition: all 400ms;
        transform: rotateZ(-180deg) scale(0.6);
      }
      &.dark-mode-switch-icon-animation-end {
        transition: all 400ms;
        transform: rotateZ(-360deg) scale(1);
      }
    }

    &:has(.dark-mode-switch-icon-animation-begin),
    &:has(.dark-mode-switch-icon-animation-end) {
      pointer-events: none;
    }

    &:hover {
      color: var(--td-brand-color);
      background-color: var(--button-hover-bg);
    }
  }
}
</style>
