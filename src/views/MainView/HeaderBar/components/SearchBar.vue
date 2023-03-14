<template>
  <div class="search-bar">
    <form action="">
      <input type="text" placeholder="请输入搜索关键词..." />
      <input
        type="submit"
        class="segoe-fluent-icons"
        :value="searchicon"
        v-tippy="{
          content: '搜索',
          placement: 'bottom',
          animation: 'scale-extreme',
          inertia: true
        }"
      />
    </form>
  </div>
</template>
<script setup>
import { reactive, toRef } from 'vue'

const obj = reactive({
  searchicon: '\ue721'
})
const searchicon = toRef(obj, 'searchicon')
</script>
<style lang="less" scoped>
.search-bar {
  width: var(--spacer-17);
  position: relative;

  form {
    &::after {
      content: '';
      position: absolute;
      bottom: calc((var(--header-bar-height) - var(--spacer-9)) / 2);
      left: 0;
      right: 0;
      height: 2px;
      background: var(--theme-color);
      transform: scaleX(0);
      transition: transform 200ms;
    }
    &:has(:focus)::after {
      transform: scaleX(1);
    }
    input[type='text'] {
      box-sizing: border-box;
      width: 100%;
      height: var(--spacer-9);
      margin: calc((var(--header-bar-height) - var(--spacer-9)) / 2) 0;
      background-color: var(--bg-color-brighter);
      padding: 0 var(--spacer-6);
      font-size: var(--spacer-4);
      border-radius: var(--border-radius-s);
      color: var(--text-color);
      position: relative;
      border: 1px solid var(--border-color);
      outline: none;

      &:focus {
        background-color: var(--bg-color-hover);
      }

      /*修改提示文字的颜色*/
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: var(--text-color);
      }

      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: var(--text-color);
      }

      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: var(--text-color);
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: var(--text-color);
      }
    }
    input[type='submit'] {
      position: absolute;
      right: 0;
      top: calc((var(--header-bar-height) - var(--spacer-9)) / 2);
      height: var(--spacer-9);
      width: var(--spacer-9);
      border-radius: var(--border-radius-s);
      background-color: transparent;
      font-size: var(--font-size-m);
      cursor: pointer;
      border: none;
      outline: none;

      &:hover {
        background-color: var(--bg-color-hover);
      }
      color: inherit;
    }
  }
}

@media (max-width: 1200px) {
  .search-bar {
    width: var(--spacer-15);
  }
}

@media (max-width: 500px) {
  .search-bar {
    display: none;
    position: fixed;
    width: auto;
    left: var(--header-bar-height);
    right: calc(var(--header-bar-height) * 2);
  }
  .menu-open .search-bar {
    display: block;
  }
}
</style>
