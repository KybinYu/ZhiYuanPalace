import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/MainView/ContentArea/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      index: 1
    }
  },
  {
    path: '/article',
    name: 'article',
    component: () =>
      import('../views/MainView/ContentArea/pages/ArticlePage.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/shuoshuo',
    name: 'shuoshuo',
    component: () =>
      import('../views/MainView/ContentArea/pages/ShuoShuoPage.vue'),
    meta: {
      index: 3
    }
  },
  {
    path: '/photo',
    name: 'photo',
    component: () =>
      import('../views/MainView/ContentArea/pages/PhotoPage.vue'),
    meta: {
      index: 4
    }
  },
  {
    path: '/video',
    name: 'video',
    component: () =>
      import('../views/MainView/ContentArea/pages/VideoPage.vue'),
    meta: {
      index: 5
    }
  },
  {
    path: '/music',
    name: 'music',
    component: () =>
      import('../views/MainView/ContentArea/pages/MusicPage.vue'),
    meta: {
      index: 6
    }
  },
  {
    path: '/netdisk',
    name: 'netdisk',
    component: () =>
      import('../views/MainView/ContentArea/pages/NetdiskPage.vue'),
    meta: {
      index: 7
    }
  },
  {
    path: '/siteurl',
    name: 'siteurl',
    component: () =>
      import('../views/MainView/ContentArea/pages/SiteUrlPage.vue'),
    meta: {
      index: 8
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/MainView/ContentArea/pages/AboutPage.vue'),
    meta: {
      index: 9
    }
  },
  {
    path: '/friend',
    name: 'friend',
    component: () =>
      import('../views/MainView/ContentArea/pages/FriendPage.vue'),
    meta: {
      index: 10
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/MainView/ContentArea/pages/LoginPage.vue'),
    meta: {
      index: 11
    }
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
