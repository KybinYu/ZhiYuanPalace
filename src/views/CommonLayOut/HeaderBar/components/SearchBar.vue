<template>
  <div class="search-bar">
    <form action="">
      <input type="text" placeholder="请输入搜索关键词..." />
      <input type="submit" class="segoe-fluent-icons" :value="searchicon" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchicon: '\ue721'
    }
  }
}
</script>
<style lang="less" scoped>
.search-bar {
  width: 400px;
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
      transition: all 200ms;
    }
    &:has(:focus)::after {
      transform: scaleX(1);
    }
    input[type='text'] {
      width: 100%;
      height: var(--spacer-9);
      margin: calc((var(--header-bar-height) - var(--spacer-9)) / 2) 0;
      background-color: var(--bg-color-brighter);
      padding: 0 var(--spacer-6);
      font-size: var(--spacer-4);
      border-radius: var(--border-radius-s);
      color: inherit;
      position: relative;

      &:focus {
        background-color: var(--bg-color-hover);
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
      cursor: pointer;

      &:hover {
        background-color: var(--bg-color-hover);
      }
      color: inherit;
    }
  }
}

@media (max-width: 1139.99px) {
  .search-bar {
    width: 220px;
  }
}

@media (max-width: 499.99px) {
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
