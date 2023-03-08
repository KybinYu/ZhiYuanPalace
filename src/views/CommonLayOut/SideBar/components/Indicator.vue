<template>
  <div class="indicator" id="side-bar-nav-indicator"></div>
</template>
<script>
export default {
  methods: {
    indicatorInit() {
      //通过order确定top和bottom，所以应该从 top:0 开始数
      //初始化为第一个导航
      let order = 0
      const indicator = document.getElementById('side-bar-nav-indicator')

      //bottom变化，通过倒数order确定
      indicator.style.bottom = `calc(${
        10 - order
      } * (var(--spacer-11) + var(--spacer-3)) + var(--spacer-6))`
      //top变化，通过正数order确定
      indicator.style.top = `calc(${order} * (var(--spacer-11) + var(--spacer-3)) + var(--spacer-6))`
    }
  },
  mounted() {
    // mounted在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
    this.indicatorInit()
  },
  //监听路由的路径，移动指示器位置
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //通过order确定top和bottom，所以应该从 top:0 开始数
      let order = to.meta.index - 1
      const indicator = document.getElementById('side-bar-nav-indicator')

      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //向下导航，bottom先走，top后走
        indicator.style.transition = `bottom 200ms , top 400ms`
      } else {
        //向上导航，top先走，bottom后走
        indicator.style.transition = `top 200ms , bottom 400ms`
      }

      //bottom变化，通过倒数order确定
      indicator.style.bottom = `calc(${
        10 - order - 1
      } * (var(--spacer-11) + var(--spacer-3)) + var(--spacer-6))`
      //top变化，通过正数order确定
      indicator.style.top = `calc(${order} * (var(--spacer-11) + var(--spacer-3)) + var(--spacer-6))`
    }
  }
}
</script>
<style lang="less" scoped>
#side-bar-nav {
  .indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: var(--spacer-3);
    background-color: var(--theme-color);
    z-index: 2;
    border-radius: var(--border-radius-xs);
  }
}
</style>
