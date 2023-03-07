import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      import(/* webpackChunkName: "about" */ '../views/ArticleView.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/shuoshuo',
    name: 'shuoshuo',
    component: () => import('../views/ShuoShuoView.vue'),
    meta: {
      index: 3
    }
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('../views/PhotoView.vue'),
    meta: {
      index: 4
    }
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/VideoView.vue'),
    meta: {
      index: 5
    }
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/MusicView.vue'),
    meta: {
      index: 6
    }
  },
  {
    path: '/netdisk',
    name: 'netdisk',
    component: () => import('../views/NetdiskView.vue'),
    meta: {
      index: 7
    }
  },
  {
    path: '/siteurl',
    name: 'siteurl',
    component: () => import('../views/SiteUrlView.vue'),
    meta: {
      index: 8
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      index: 9
    }
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('../views/FriendView.vue'),
    meta: {
      index: 10
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
