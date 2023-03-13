<template>
  <section id="start-view-inner">
    <div class="start-view-bg"></div>
    <section class="start-view-center">
      <div class="start-view-avatar">
        <img src="http://q1.qlogo.cn/g?b=qq&nk=570446022&s=5" alt="头像" />
      </div>
      <div class="start-view-title">
        <h2>知书达理，鸢飞鱼跃。</h2>
      </div>
      <div class="start-view-subtitle">
        <p>/* 玉淇冰的个人收藏馆 */</p>
      </div>
      <div class="start-view-tips">
        <div class="start-view-tips-icon"></div>
        <span>向上拖动进入主页</span>
      </div>
    </section>
  </section>
</template>
<style lang="less" scoped>
@keyframes an-translate-up {
  0% {
    transform: translateY(2vh);
  }
  100% {
    transform: translateY(0vh);
  }
}
@keyframes an-scale-reduce-1d05x {
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes an-blur {
  0% {
    filter: blur(8px);
  }
  100% {
    filter: blur(0px);
  }
}
@keyframes an-scale-reduce-1d2x {
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes an-scale-amplify {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes an-opacity-1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes an-opacity-0d6 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
}
/* 边框闪烁动画 模拟指针闪烁 */
@keyframes an-borders {
  from {
    background-color: transparent;
  }
  to {
    background-color: #fff;
  }
}
/* 容器宽的改变动画 */
@keyframes an-widths {
  from {
    width: 0;
  }
  to {
    width: 100%;
  } /* 也可以是固定宽 */
}
#start-view-inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: var(--gray-color-14);
  display: flex;
  justify-content: center;
  align-items: center;

  .start-view-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(@/assets/images/Start.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    pointer-events: none;
    animation: an-scale-reduce-1d05x 1s, an-opacity-1 0.5s;
  }

  .start-view-center {
    display: flex;
    align-items: center;
    flex-direction: column;

    .start-view-avatar {
      width: 14vh;
      height: 14vh;
      position: relative;
      margin-top: 4vh;
      margin-bottom: 4vh;
      animation: an-scale-reduce-1d2x 1s, an-opacity-1 0.5s;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url(@/assets/images/avatarBorder.png) no-repeat;
        background-size: cover;
        background-position: center;
        transform: scale(1.3);
      }
    }
    .start-view-title {
      width: auto;
      max-width: calc(var(--spacer-7) * 10);
      margin-bottom: 4vh;
      color: #fff;

      h2 {
        margin: 0 auto;
        font-size: var(--spacer-7);
        text-align: center; /* 文字横向居中 */
        white-space: nowrap; /* 文字不换行 */
        overflow: hidden; /* 多余的文字内容隐藏 */
        animation: an-widths 1.5s steps(10); /* 重点 steps() */
        position: relative;

        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 6px;
          bottom: 6px;
          width: 6px;
          animation: an-borders 0.7s infinite steps(2);
        }
      }
    }

    .start-view-subtitle {
      z-index: 1;
      color: #fff;
      opacity: 0;
      animation: an-opacity-0d6 1s 1s forwards, an-scale-reduce-1d2x 1.5s 1s;
      margin-bottom: 4vh;

      p {
        margin: 0;
      }
    }

    .start-view-tips {
      z-index: 1;
      color: #fff;
      opacity: 0;
      animation: an-opacity-0d6 1s 1.5s forwards,
        an-translate-up 1s 1.5s infinite alternate ease-in-out;

      .start-view-tips-icon {
        width: 100%;
        height: 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 2vh;

        &::before {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top: none;
          border-bottom-color: #fff;
          animation: an-opacity-1 1s 0.4s infinite alternate;
        }

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top: none;
          border-bottom-color: #fff;
          animation: an-opacity-1 1s infinite alternate;
        }
      }
    }
  }
}
</style>
