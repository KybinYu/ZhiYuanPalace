<template>
  <nav id="side-bar-nav">
    <ul class="border-layer">
      <li v-for="page in pages" :key="page.url"></li>
    </ul>

    <div class="indicator-layer">
      <indicator />
    </div>

    <ul class="content-layer">
      <li v-for="page in pages" :key="page.url">
        <router-link
          :to="page.url"
          class="side-bar-router-link"
          @click="closeMenu(), animation($event)"
        >
          <div class="icon">
            <i class="segoe-fluent-icons fillIcon">{{ page.fillIcon }}</i>
            <i class="segoe-fluent-icons linearIcon">{{ page.linearIcon }}</i>
          </div>

          <span>{{ page.name }}</span>
          <span class="alias">{{ page.alias }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import Indicator from './Indicator.vue'
</script>
<script>
export default {
  data() {
    return {
      pages: [
        {
          name: '知鸢门',
          alias: '主页',
          url: '/',
          linearIcon: '\ue80f',
          fillIcon: '\uea8a'
        },
        {
          name: '墨韵堂',
          alias: '文章',
          url: '/article',
          linearIcon: '\ueb50',
          fillIcon: '\ueb4f'
        },
        {
          name: '漱玉斋',
          alias: '说说',
          url: '/shuoshuo',
          linearIcon: '\ue734',
          fillIcon: '\ue735'
        },
        {
          name: '流光谭',
          alias: '照片',
          url: '/photo',
          linearIcon: '\ue81b',
          fillIcon: '\ueb4b'
        },
        {
          name: '镜月亭',
          alias: '视频',
          url: '/video',
          linearIcon: '\ue714',
          fillIcon: '\uea0c'
        },
        {
          name: '弦月厅',
          alias: '音乐',
          url: '/music',
          linearIcon: '\ue819',
          fillIcon: '\ueb49'
        },
        {
          name: '云角塔',
          alias: '网盘',
          url: '/netdisk',
          linearIcon: '\uec50',
          fillIcon: '\uec51'
        },
        {
          name: '往生驿',
          alias: '网址',
          url: '/siteurl',
          linearIcon: '\ue7c0',
          fillIcon: '\ueb4d'
        },
        {
          name: '户部司',
          alias: '关于',
          url: '/about',
          linearIcon: '\ue77b',
          fillIcon: '\uea8c'
        },
        {
          name: '燕徽台',
          alias: '友链',
          url: '/friend',
          linearIcon: '\ue724',
          fillIcon: '\ue725'
        }
      ]
    }
  },
  methods: {
    borderAnimation() {
      const borderLayer = document.querySelector('.border-layer')
      const asidebar = document.querySelector('.layout-left')
      if (asidebar && borderLayer) {
        asidebar.addEventListener('mousemove', function (event) {
          let x = event.pageX
          let y = event.pageY
          let bounding = borderLayer.getBoundingClientRect()
          borderLayer.style.webkitMaskPosition = `${x - bounding.x - 100}px ${
            y - bounding.y - 100
          }px`
          borderLayer.style.maskPosition = `${x - bounding.x - 100}px ${
            y - bounding.y - 100
          }px`
        })
      }
    },
    closeMenu() {
      const layoutRoot = document.getElementById('layout-root')
      if (layoutRoot) {
        if (layoutRoot.classList.contains('menu-open')) {
          setTimeout(function () {
            layoutRoot.classList.remove('menu-open')
          }, 400)
        }
      }
    },
    animation(e) {
      //延迟动画
      //获得点击元素的第一个子元素
      const icon = e.currentTarget.firstElementChild
      icon.classList.add('side-bar-nav-icon-animation')
      setTimeout(function () {
        icon.classList.remove('side-bar-nav-icon-animation')
      }, 200)
    }
  },
  mounted() {
    // mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
    this.borderAnimation()
  }
}
</script>
<style lang="less" scoped>
//双层同时设置
#side-bar-nav {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  margin: var(--spacer-6);

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
    color: transparent;
  }

  > ul {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    > li {
      height: var(--side-bar-item-height);
      margin-bottom: var(--spacer-3);
      width: 100%;
      border-radius: var(--border-radius-s);
      overflow: hidden;

      > a.side-bar-router-link {
        position: relative;
        display: inline-block;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;

        > .icon {
          height: 100%;
          width: var(--side-bar-item-height);
          position: relative;
          flex: none;
          transform: translateY(0px);
          transition: all 400ms;

          > i {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            font-size: var(--spacer-6);
            display: flex;
            justify-content: center;
            align-items: center;

            &.fillIcon {
              color: var(--theme-color);
              opacity: 0;
            }
          }

          &.side-bar-nav-icon-animation {
            transform: translateY(calc(0px - var(--spacer-3)));
          }
        }
        > span {
          font-size: var(--spacer-5);
          display: inline-block;
          flex: none;

          &.alias {
            opacity: 0;
            font-style: italic;
            margin-left: var(--spacer-5);
            transition: all 200ms;
            background-color: var(--theme-color);
            padding: 0 var(--spacer-4);
            border-radius: var(--border-radius-xs);
          }
        }
      }
    }
  }
  div.indicator-layer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 520px;
    height: calc(10 * (var(--side-bar-item-height) + var(--spacer-3)));
  }
}

//内容单层
#side-bar-nav {
  ul.content-layer {
    > li {
      > a.side-bar-router-link {
        transition: all 200ms;

        &:hover {
          background-color: rgba(127, 127, 127, 0.05);
          > span {
            &.alias {
              opacity: 1;
            }
          }
        }

        &.router-link-active {
          background-color: var(--bg-color-hover);
          font-weight: bold;
          > .icon {
            > i {
              &.fillIcon {
                opacity: 1;
              }
            }
          }
          > span {
            &.alias {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

//探照灯单层
#side-bar-nav {
  ul.border-layer {
    opacity: 0;
    transition: opacity 400ms;
    -webkit-mask-image: radial-gradient(
      circle at center,
      white 0%,
      transparent 80px
    );
    mask-image: radial-gradient(circle at center, white 0%, transparent 100px);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 200px 200px;
    mask-size: 200px 200px;
    //初始化位置
    -webkit-mask-position: -200px -200px;
    mask-position: -200px -200px;

    > li {
      background-color: rgba(127, 127, 127, 0.05);
      border: 2px solid var(--common-grey-border-color);
      color: var(--td-brand-color);
    }
  }

  &:hover {
    ul.border-layer {
      opacity: 1;
    }
  }
}
</style>
