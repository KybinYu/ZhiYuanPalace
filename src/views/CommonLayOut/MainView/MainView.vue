<template>
  <router-view class="content" v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      transitionName: ''
    }
  },
  //监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      // console.log(to, 'to')
      // console.log(from, 'from')
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'transition-left'
      } else {
        this.transitionName = 'transition-right'
      }
    }
  }
}
</script>
<style>
#main-view {
  background-color: var(--bg-color-brighter);
  border-radius: var(--border-radius-m) 0 0 0;
  border-top: var(--spacer-2) solid var(--border-color);
  border-left: var(--spacer-2) solid var(--border-color);
}
.content {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.transition-left-enter-active,
.transition-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(0, 200px);
  transform: translate(0, 200px);
}
.transition-left-leave-active,
.transition-right-enter-active {
  opacity: 0;
  -webkit-transform: translate(0, -200px);
  transform: translate(0, -200px);
}
</style>
