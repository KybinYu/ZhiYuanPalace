<template>
  <router-view class="content-area-inner" v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { reactive, toRef } from 'vue'

const obj = reactive({
  transitionName: ''
})
const transitionName = toRef(obj, 'transitionName')

let router = useRouter()

watch(
  () => router.currentRoute.value,
  (to, from) => {
    // console.log(to.meta.index)
    // console.log(from.meta.index)
    if (to.meta.index > from.meta.index) {
      transitionName.value = 'transition-next'
    } else {
      transitionName.value = 'transition-prev'
    }
  }
)
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
