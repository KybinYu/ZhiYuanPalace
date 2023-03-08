<template>
  <div class="footer-bar-info">
    <div class="cover">
      <img src="@/assets/uploads/月亮警察.webp" alt="月亮警察" />
    </div>
    <div class="title">
      <span class="name">月亮警察</span>
      <span class="singer">火箭少女101</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer-bar-info {
  display: flex;
  height: 100%;
  padding-right: 18px;
  cursor: pointer;

  .cover {
    position: relative;
    margin-right: 18px;

    img {
      width: var(--footer-bar-height);
    }

    &::after {
      content: '\e971';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      font-size: 24px;
      color: #ccc;
      text-align: center;
      line-height: var(--footer-bar-height);
      font-family: 'segoe-fluent-icons' !important;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      visibility: hidden;
    }
  }

  .title {
    height: var(--footer-bar-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;

    span {
      display: block;
      white-space: nowrap;

      &.name {
        font-size: 12px;
        font-weight: 700;
      }
      &.singer {
        font-size: 12px;
      }
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);

    .cover {
      img {
        filter: brightness(0.95);
      }

      &::after {
        visibility: visible;
      }
    }
  }
}
</style>
