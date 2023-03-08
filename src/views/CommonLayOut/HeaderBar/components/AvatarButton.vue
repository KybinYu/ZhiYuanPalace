<template>
  <div class="avatar dropdown">
    <button>
      <img src="http://q1.qlogo.cn/g?b=qq&nk=570446022&s=4" alt="头像" />
    </button>
  </div>
</template>
<style lang="less" scoped>
@keyframes an-bounce {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  15% {
    transform: scale(1.1);
  }
  30% {
    transform: scale(0.8);
  }
  45% {
    transform: scale(1);
  }
  60% {
    opacity: 1;
    transform: scale(0.94);
  }
  75% {
    transform: scale(1);
  }
}
.avatar {
  display: flex;
  height: 100%;

  button {
    width: var(--header-bar-height);
    border: 0;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    vertical-align: super;
    padding: 0;
    font-size: 14px;

    &:hover {
      color: var(--td-brand-color);
      background-color: rgba(0, 0, 0, 0.05);
    }

    > img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      animation: an-bounce 0.7s;
    }
  }
}
</style>
