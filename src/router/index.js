import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CommonLayOut/MainView/pages/HomePage.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/CommonLayOut/MainView/pages/ArticlePage.vue'
      ),
    meta: {
      index: 2
    }
  },
  {
    path: '/shuoshuo',
    name: 'shuoshuo',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/ShuoShuoPage.vue'),
    meta: {
      index: 3
    }
  },
  {
    path: '/photo',
    name: 'photo',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/PhotoPage.vue'),
    meta: {
      index: 4
    }
  },
  {
    path: '/video',
    name: 'video',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/VideoPage.vue'),
    meta: {
      index: 5
    }
  },
  {
    path: '/music',
    name: 'music',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/MusicPage.vue'),
    meta: {
      index: 6
    }
  },
  {
    path: '/netdisk',
    name: 'netdisk',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/NetdiskPage.vue'),
    meta: {
      index: 7
    }
  },
  {
    path: '/siteurl',
    name: 'siteurl',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/SiteUrlPage.vue'),
    meta: {
      index: 8
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/AboutPage.vue'),
    meta: {
      index: 9
    }
  },
  {
    path: '/friend',
    name: 'friend',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/FriendPage.vue'),
    meta: {
      index: 10
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/CommonLayOut/MainView/pages/LoginPage.vue'),
    meta: {
      index: 11
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
