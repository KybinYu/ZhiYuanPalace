<template>
  <button class="ripple-button" type="button">
    <span class="ripple-button-inner"><slot /></span>
    <div
      ref="ripple-button-ripple"
      class="ripple-button-ripple"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
    >
      <div
        v-for="ink in inkQueue"
        :key="ink.key"
        :style="{
          width: ink.width,
          height: ink.height,
          marginLeft: ink.marginLeft,
          marginTop: ink.marginTop
        }"
        :class="[
          'ink',
          ink.isHolding ? 'is-holding' : '',
          ink.isDone ? 'is-done' : ''
        ]"
      ></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'RippleButton',
  data() {
    return {
      inkQueue: []
    }
  },
  methods: {
    handleMouseDown(e) {
      const rect = this.$el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      let max
      if (rect.width === rect.height) {
        max = rect.width * Math.SQRT2
      } else {
        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height)
      }
      const size = max * 2 + 'px'
      this.inkQueue.push({
        key: Math.random(),
        width: size,
        height: size,
        marginLeft: x - max + 'px',
        marginTop: y - max + 'px',
        isHolding: false,
        isDone: false
      })
      // 添加完队列数据后，在下一个事件周期开始动画
      setTimeout(() => {
        this.inkQueue[this.inkQueue.length - 1].isHolding = true
      })
    },
    handleMouseUp() {
      this.inkQueue[this.inkQueue.length - 1].isDone = true
      setTimeout(() => {
        this.inkQueue.shift()
      }, 650)
    }
  }
}
</script>

<style lang="less" scoped>
.ripple-button {
  position: relative;

  .ripple-button-inner {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .ripple-button-ripple {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    overflow: hidden;
    .ink {
      width: 0;
      height: 0;
      position: absolute;
      border-radius: 50%;
      background-color: var(--ripple-button-bg);
      transform: scale(0);
      transition: transform 0.6s ease-out, opacity 0.6s ease-out;
      &.is-holding {
        opacity: 0.4;
        transform: scale(1);
        &.is-done {
          opacity: 0;
        }
      }
    }
  }
}
</style>
