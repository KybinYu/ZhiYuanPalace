<template>
  <div class="darkmode">
    <button @click="darkMode()">
      <i class="segoe-fluent-icons" id="switch-darkmode-icon">
        {{ darkmodeButonTooltip.icon }}
      </i>
    </button>
  </div>
</template>
<script>
import { showToast } from 'vant'
export default {
  data() {
    return {
      darkmodeButonTooltip: {
        msg: '夜间模式',
        icon: '\ue708'
      }
    }
  },
  methods: {
    darkMode() {
      const icon = document.querySelector('#switch-darkmode-icon')
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
        icon.classList.add('switch-darkmode-icon-animation-begin')
        var th = this
        setTimeout(function () {
          icon.classList.remove('switch-darkmode-icon-animation-begin')
          icon.classList.add('switch-darkmode-icon-animation-end')
          th.darkmodeButonTooltip.msg = '日间模式'
          th.darkmodeButonTooltip.icon = '\ue706'
          setTimeout(function () {
            icon.classList.remove('switch-darkmode-icon-animation-end')
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
        icon.classList.add('switch-darkmode-icon-animation-begin')
        var th = this
        setTimeout(function () {
          icon.classList.remove('switch-darkmode-icon-animation-begin')
          icon.classList.add('switch-darkmode-icon-animation-end')
          th.darkmodeButonTooltip.msg = '夜间模式'
          th.darkmodeButonTooltip.icon = '\ue708'
          setTimeout(function () {
            icon.classList.remove('switch-darkmode-icon-animation-end')
          }, 600)
        }, 300)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.darkmode {
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
    font-size: 14px;

    i#switch-darkmode-icon {
      display: inline-block;

      &.switch-darkmode-icon-animation-begin {
        transition: all 400ms;
        transform: rotateZ(-180deg) scale(0.6);
      }
      &.switch-darkmode-icon-animation-end {
        transition: all 400ms;
        transform: rotateZ(-360deg) scale(1);
      }
    }

    &:has(.switch-darkmode-icon-animation-begin),
    &:has(.switch-darkmode-icon-animation-end) {
      pointer-events: none;
    }

    &:hover {
      color: var(--td-brand-color);
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
