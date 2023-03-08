<template>
  <div class="logo-box">
    <img width="100" class="logo" src="@/assets/images/logo.png" alt="logo" />
  </div>
</template>
<style lang="less" scoped>
.logo-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    height: 100%;
    width: auto;
    transform: scale(0.6) translateY(calc(0px - var(--spacer-3)));
  }
  &::after {
    content: 'ZhiYuanPalace';
    font-size: 12px;
    letter-spacing: 1px;
    margin: 15px 15px 15px 0;
  }
}
</style>
