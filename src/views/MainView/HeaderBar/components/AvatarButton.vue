<template>
  <div class="avatar-button-root">
    <van-popover
      v-model:show="showPopover"
      :actions="actions"
      @select="onSelect"
      placement="bottom-end"
    >
      <template #reference>
        <ripple-button
          @click="animation()"
          v-tippy="{
            content: '更多',
            placement: 'bottom',
            animation: 'scale-extreme',
            inertia: true
          }"
        >
          <img
            id="avatar-image"
            src="http://q1.qlogo.cn/g?b=qq&nk=570446022&s=4"
            alt="头像"
          />
        </ripple-button>
      </template>
    </van-popover>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { showConfirmDialog } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const showPopover = ref(false)
const actions = [
  { text: '选项一', id: '1' },
  { text: '选项二', id: '2' },
  { text: '进入后宫', id: '3' }
]
function animation() {
  //延迟动画
  const icon = document.querySelector('#avatar-image')
  icon.classList.add('avatar-image-animation')
  setTimeout(function () {
    icon.classList.remove('avatar-image-animation')
  }, 280)
}
function onSelect(action) {
  if (action.id == 1) {
  } else if (action.id == 2) {
  } else {
    /*
        前台登录功能入口
        TODO:这里需要判断是否已经登录
        */
    let isLogged = false
    if (isLogged == false) {
      //弹出登录确认框
      showConfirmDialog({
        title: '提示',
        message: '您还没有登录，是否要现在登录？'
      })
        .then(() => {
          // on confirm
          router.push('/login')
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes an-bounce {
  0% {
    opacity: 0.5;
    transform: scale(0.5);
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

@keyframes an-click {
  0% {
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
  }
  90% {
    transform: scale(0.5) rotateZ(-45deg);
  }
  100% {
    opacity: 0.5;
    transform: scale(0.5) rotateZ(0deg);
  }
}

.avatar-button-root {
  display: flex;
  height: 100%;

  button {
    width: var(--header-bar-height);
    height: 100%;
    border: 0;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    vertical-align: super;
    padding: 0;

    img {
      width: var(--spacer-8);
      height: var(--spacer-8);
      border-radius: 50%;
      animation: an-bounce 0.7s;

      &.avatar-image-animation {
        animation: an-click 0.3s;
      }
    }

    &:has(.avatar-image-animation) {
      pointer-events: none;
    }

    &:hover {
      color: var(--td-brand-color);
      background-color: var(--button-hover-bg);
    }
  }
}
</style>
