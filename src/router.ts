import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: '首頁',
    },
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '關於我們',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
