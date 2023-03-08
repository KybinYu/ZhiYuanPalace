<template>
  <div class="darkmode">
    <button @click="darkMode()">
      <i class="segoe-fluent-icons" id="darkmode-switch-icon">
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
      const icon = document.querySelector('#darkmode-switch-icon')
      if (!document.documentElement.getAttribute('theme-mode')) {
        //切换主题
        document.documentElement.setAttribute('theme-mode', 'dark')

        //弹出提示
        showToast({
          position: 'bottom',
          message: '夜间模式已开启',
          icon: 'https://pan.yiru.love/static/images/emoji/1f634.webp'
        })

        //延迟更换图标，配合动画
        icon.classList.add('darkmode-switch-animation-begin')
        var th = this
        setTimeout(function () {
          icon.classList.remove('darkmode-switch-animation-begin')
          icon.classList.add('darkmode-switch-animation-end')
          th.darkmodeButonTooltip.msg = '日间模式'
          th.darkmodeButonTooltip.icon = '\ue706'
          setTimeout(function () {
            icon.classList.remove('darkmode-switch-animation-end')
          }, 600)
        }, 300)
      } else {
        //切换主题
        document.documentElement.removeAttribute('theme-mode')

        //弹出提示
        showToast({
          position: 'bottom',
          message: '夜间模式已关闭',
          icon: 'https://pan.yiru.love/static/images/emoji/1f60e.webp'
        })

        //延迟更换图标，配合动画
        icon.classList.add('darkmode-switch-animation-begin')
        var th = this
        setTimeout(function () {
          icon.classList.remove('darkmode-switch-animation-begin')
          icon.classList.add('darkmode-switch-animation-end')
          th.darkmodeButonTooltip.msg = '夜间模式'
          th.darkmodeButonTooltip.icon = '\ue708'
          setTimeout(function () {
            icon.classList.remove('darkmode-switch-animation-end')
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

    i#darkmode-switch-icon {
      display: inline-block;

      &.darkmode-switch-animation-begin {
        transition: all 400ms;
        transform: rotateZ(-180deg) scale(0.6);
      }
      &.darkmode-switch-animation-end {
        transition: all 400ms;
        transform: rotateZ(-360deg) scale(1);
      }
    }

    &:hover {
      color: var(--td-brand-color);
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
