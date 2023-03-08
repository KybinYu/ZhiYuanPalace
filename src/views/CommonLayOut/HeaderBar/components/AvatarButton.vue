<template>
  <div class="avatar dropdown">
    <van-popover
      v-model:show="showPopover"
      :actions="actions"
      @select="onSelect"
      placement="bottom-end"
    >
      <template #reference>
        <button>
          <img src="http://q1.qlogo.cn/g?b=qq&nk=570446022&s=4" alt="头像" />
        </button>
      </template>
    </van-popover>
  </div>
</template>
<script>
import { ref } from 'vue'
import { showToast } from 'vant'

export default {
  setup() {
    const showPopover = ref(false)

    // 通过 actions 属性来定义菜单选项
    const actions = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]
    const onSelect = (action) => showToast(action.text)

    return {
      actions,
      onSelect,
      showPopover
    }
  }
}
</script>
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
    height: 100%;
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
