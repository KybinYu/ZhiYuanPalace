<template>
  <router-view class="content-area-inner" v-slot="{ Component }">
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
      if (to.meta.index > from.meta.index) {
        //向下导航，bottom先走，top后走
        this.transitionName = 'transition-next'
      } else {
        this.transitionName = 'transition-prev'
      }
    }
  }
}
</script>
<style>
#content-area {
  background-color: var(--bg-color-brighter);
  border-radius: var(--border-radius-m) 0 0 0;
  border-top: var(--spacer-1) solid var(--border-color);
  border-left: var(--spacer-1) solid var(--border-color);
}
.content-area-inner {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.transition-next-enter-active,
.transition-prev-leave-active {
  opacity: 0;
  -webkit-transform: translate(0, 200px);
  transform: translate(0, 200px);
}
.transition-next-leave-active,
.transition-prev-enter-active {
  opacity: 0;
  -webkit-transform: translate(0, -200px);
  transform: translate(0, -200px);
}
</style>
