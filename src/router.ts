import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import Story from '@/pages/Story.vue'

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
  },
  {
    path: '/story',
    component: Story,
    meta: {
      title: '星星物語',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
