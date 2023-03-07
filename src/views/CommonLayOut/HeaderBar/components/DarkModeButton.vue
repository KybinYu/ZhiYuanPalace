<template>
  <div class="darkmode">
    <button @click="darkMode()">
      <i class="segoe-fluent-icons">{{ darkmodeButonTooltip.icon }}</i>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      darkmodeButonTooltip: {
        msg: '夜间模式',
        icon: '\ue708'
      }
    }
  },
  methods: {
    darkMode() {
      if (!document.documentElement.getAttribute('theme-mode')) {
        document.documentElement.setAttribute('theme-mode', 'dark')
        this.$data.darkmodeButonTooltip.msg = '日间模式'
        this.$data.darkmodeButonTooltip.icon = '\ue706'
      } else {
        document.documentElement.removeAttribute('theme-mode')
        this.$data.darkmodeButonTooltip.msg = '夜间模式'
        this.$data.darkmodeButonTooltip.icon = '\ue708'
      }
    }
  }
}
</script>
<style scoped lang="less">
.darkmode {
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
  }
}
</style>
