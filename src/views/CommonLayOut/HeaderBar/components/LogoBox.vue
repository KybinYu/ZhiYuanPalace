<template>
  <ripple-button class="logo-box">
    <img width="100" class="logo" src="@/assets/images/logo.png" alt="logo" />
  </ripple-button>
</template>
<style lang="less" scoped>
.logo-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: none;
  border-radius: 0;
  background-color: transparent;
  border: 0;

  img {
    height: 100%;
    width: auto;
    transform: scale(0.6) translateY(calc(0px - var(--spacer-3)));
  }
  &::after {
    content: 'ZhiYuanPalace';
    font-size: var(--spacer-5);
    font-weight: bold;
    opacity: 0.5;
    letter-spacing: 1px;
    margin: var(--spacer-6) var(--spacer-6) var(--spacer-6) 0;
    pointer-events: none;
  }
  &:hover {
    background-color: var(--button-hover-bg);
  }
}
</style>
