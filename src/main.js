import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入Tippy组件
import VueTippy from 'vue-tippy'

//引入Tippy样式
import 'tippy.js/dist/tippy.css' // optional for styling
import 'tippy.js/animations/scale-extreme.css'

//vant桌面端适配
import '@vant/touch-emulator'

//引入vant组件
import { Button } from 'vant'
import { NavBar } from 'vant'
import { Toast } from 'vant'
import { Popover } from 'vant'
import { Dialog } from 'vant'
import { Swipe, SwipeItem } from 'vant'

//引入vant样式
import 'vant/lib/index.css'

//自定义组件
import RippleButton from '@/components/ripple-button.vue'
import SwipePanelEnd from '@/components/swipe-panel-end.vue'
import SwipePanelStart from '@/components/swipe-panel-start.vue'

//自定义样式表
// import './assets/css/base.css'
import './assets/css/common.css'
import './assets/css/common-to-vant.css'
import './assets/css/mobile.css'

const app = createApp(App)

// 注册组件
app.use(VueTippy, {
  directive: 'tippy', // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
})

app.use(Button)
app.use(NavBar)
app.use(Toast)
app.use(Popover)
app.use(Dialog)
app.use(Swipe)
app.use(SwipeItem)
app.component('RippleButton', RippleButton)
app.component('SwipePanelEnd', SwipePanelEnd)
app.component('SwipePanelStart', SwipePanelStart)

app.use(router)
app.mount('#app')
