import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. 桌面端适配
import '@vant/touch-emulator'

// 1. 引入你需要的组件
import { Button } from 'vant'
import { NavBar } from 'vant'
import { Toast } from 'vant'
import { Popover } from 'vant'
import { Dialog } from 'vant'
import { Swipe, SwipeItem } from 'vant'

// 2. 引入组件样式
import 'vant/lib/index.css'

//自定义组件
import RippleButton from '@/components/ripple-button.vue'

//自定义样式表
import './assets/css/base.css'
import './assets/css/common.css'
import './assets/css/common-to-vant.css'
import './assets/css/mobile.css'

const app = createApp(App)

// 3. 注册你需要的组件
app.use(Button)
app.use(NavBar)
app.use(Toast)
app.use(Popover)
app.use(Dialog)
app.use(Swipe)
app.use(SwipeItem)
app.component('RippleButton', RippleButton)

app.use(router)
app.mount('#app')
