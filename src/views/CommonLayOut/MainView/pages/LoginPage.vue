<template>
  <div class="home full-page">
    <van-nav-bar
      title="注册登录"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: {
    //HelloWorld
  },
  setup() {
    const onClickLeft = () => history.back()
    return {
      onClickLeft
    }
  }
}
</script>
