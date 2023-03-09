<template>
  <div class="full-page">
    <van-nav-bar
      title="登录后宫"
      left-arrow
      clickable
      fixed
      placeholder
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
