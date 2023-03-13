<template>
  <div>
    <van-swipe
      class="swipe-panel-end"
      style="height: 100vh; width: 100vw"
      :vertical="vertical"
      :show-indicators="false"
      :loop="false"
      @change="onChange($event)"
      ref="swipePanelEnd"
    >
      <van-swipe-item></van-swipe-item>
      <van-swipe-item>
        <slot />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { toRefs, ref } from 'vue'

const props = defineProps({
  //子组件接收父组件传递过来的值
  vertical: Boolean
})
//使用父组件传递过来的值
const { vertical } = toRefs(props)

function onChange(index) {
  // console.log('当前 Swipe 索引：' + index)
  //如果当前在面板内部视图，那么停止点击穿透，获得拖动效果
  if (index == 1) {
    const swipeRoot = document.querySelector('.swipe-panel-end')
    swipeRoot.style = `pointer-events: auto`
  }
  //如果当前不在面板内部视图，那么恢复点击穿透，恢复位于下层的交互
  if (index == 0) {
    const swipeRoot = document.querySelector('.swipe-panel-end')
    swipeRoot.style = `pointer-events: none`
  }
}
// 定义与ref同名变量
const swipePanelEnd = ref()

const open = () => {
  swipePanelEnd.value.next()
}
const close = () => {
  swipePanelEnd.value.next()
}
//把方法暴露出去
defineExpose({ open, close })
</script>
<style scoped>
.swipe-panel-end {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
}
</style>
