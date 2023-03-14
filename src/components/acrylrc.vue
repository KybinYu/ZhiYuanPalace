<template>
  <div class="acrylrc">
    <div class="acrylrc-desktop-background"></div>
    <div class="acrylrc-gaussian-blur"></div>
    <div class="acrylrc-luminosity-blend"></div>
    <div class="acrylrc-color-blend"></div>
    <div class="acrylrc-noise-texture"></div>
    <div class="acrylrc-inner-content">
      <slot />
    </div>
  </div>
</template>

<script>
//监听浏览器窗口大小的变化，修复 backdrop-filter 属性不会重绘的nug
export default {
  data() {
    return {
      // 浏览器窗口大小
      // document.body.clientWidth
      timer: false,
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight
    }
  },
  mounted() {
    const _this = this
    // 画echars
    // 监听浏览器窗口变化
    window.onresize = function () {
      // console.log('agag')
      return (() => {
        window.screenWidth = document.body.clientWidth
        _this.screenWidth = window.screenWidth
        window.screenHeight = document.body.clientHeight
        _this.screenHeight = window.screenHeight
      })()
    }
  },
  watch: {
    screenWidth: {
      immediate: true,
      handler: function (newVal) {
        const background = document.querySelector('.acrylrc-desktop-background')
        const blur = document.querySelector('.acrylrc-gaussian-blur')
        const luminosity = document.querySelector('.acrylrc-luminosity-blend')
        const color = document.querySelector('.acrylrc-color-blend')
        if (background) {
          background.style = `background-color: var(--acrylrc-loading);`
        }
        if (blur) {
          blur.style = `-webkit-backdrop-filter:none;backdrop-filter:none`
        }
        if (luminosity) {
          luminosity.style = `-webkit-backdrop-filter:none;backdrop-filter:none`
        }
        if (color) {
          color.style = `-webkit-backdrop-filter:none;backdrop-filter:none`
        }

        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          this.screenWidth = newVal
          this.timer = true
          let _this = this

          setTimeout(() => {
            //在这里做有关浏览器变化时需要做的操作
            // console.log('width:' + this.screenWidth)

            const background = document.querySelector(
              '.acrylrc-desktop-background'
            )
            const blur = document.querySelector('.acrylrc-gaussian-blur')
            const luminosity = document.querySelector(
              '.acrylrc-luminosity-blend'
            )
            const color = document.querySelector('.acrylrc-color-blend')

            if (background) {
              background.style = ``
            }
            if (blur) {
              blur.style = ``
            }
            if (luminosity) {
              luminosity.style = ``
            }
            if (color) {
              color.style = ``
            }

            _this.timer = false
          }, 400)
        }
        // if(newVal)
      }
    },
    screenHeight: {
      immediate: true,
      handler: function (newVal) {
        const background = document.querySelector('.acrylrc-desktop-background')
        const blur = document.querySelector('.acrylrc-gaussian-blur')
        const luminosity = document.querySelector('.acrylrc-luminosity-blend')
        const color = document.querySelector('.acrylrc-color-blend')
        if (background) {
          background.style = `background-color: var(--acrylrc-loading);`
        }
        if (blur) {
          blur.style = `-webkit-backdrop-filter:none;backdrop-filter:none`
        }
        if (luminosity) {
          luminosity.style = `-webkit-backdrop-filter:none;backdrop-filter:none`
        }
        if (color) {
          color.style = `-webkit-backdrop-filter:none;backdrop-filter:none`
        }

        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          this.screenHeight = newVal
          this.timer = true
          let _this = this
          setTimeout(() => {
            //在这里做有关浏览器变化时需要做的操作
            // console.log('height:' + this.screenHeight)

            const background = document.querySelector(
              '.acrylrc-desktop-background'
            )
            const blur = document.querySelector('.acrylrc-gaussian-blur')
            const luminosity = document.querySelector(
              '.acrylrc-luminosity-blend'
            )
            const color = document.querySelector('.acrylrc-color-blend')

            if (background) {
              background.style = ``
            }
            if (blur) {
              blur.style = ``
            }
            if (luminosity) {
              luminosity.style = ``
            }
            if (color) {
              color.style = ``
            }

            _this.timer = false
          }, 400)
        }
        // if(newVal)
      }
    }
  }
}
</script>

<style lang="less">
:root {
  .acrylrc {
    position: relative;
    overflow: hidden;
    --acrylrc-loading: var(--bg-color);

    > div:not(.acrylrc-inner-content) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }

    .acrylrc-desktop-background {
      background-color: transparent;
      transition: background-color 200ms;
    }

    .acrylrc-gaussian-blur {
      backdrop-filter: blur(16px);
    }

    .acrylrc-luminosity-blend {
      backdrop-filter: saturate(0.4) contrast(0.4);
      transition: backdrop-filter 200ms;
      opacity: 0.5;
    }

    .acrylrc-color-blend {
      backdrop-filter: brightness(1.2) saturate(1.5);
      transition: backdrop-filter 200ms;
      background: rgba(241, 243, 249, 0.6);
    }

    .acrylrc-noise-texture {
      // 负责在效果上添加噪点，可以营造出磨砂效果
      background-image: url(data:image/png;base64,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);
      // 磨砂大小
      background-size: 40px;
      opacity: 0.7;
      filter: brightness(1.5) contrast(0.7);
    }
  }
}

:root[theme-mode='dark'] {
  .acrylrc {
    .acrylrc-color-blend {
      backdrop-filter: brightness(0.5) saturate(1.5);
      background: rgba(26, 32, 48, 0.2);
    }
    .acrylrc-noise-texture {
      filter: brightness(2) contrast(0.7) invert(1);
    }
  }
}
</style>
