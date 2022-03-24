import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import Science from '@/pages/Science.vue'
import SingleScience from '@/pages/SingleScience.vue'
import Story from '@/pages/Story.vue'
import Archive from '@/pages/Archive.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    meta: {
      title: '首頁',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '關於我們',
    },
  },
  {
    path: '/science',
    name: 'Science',
    component: Science,
    meta: {
      title: '天文科普',
    },
  },
  {
    path: '/science/:sid',
    name: 'SingleScience',
    component: SingleScience,
    meta: {
      title: '天文科普',
    },
  },
  {
    path: '/story',
    name: 'Story',
    component: Story,
    meta: {
      title: '星星物語',
    },
  },
  {
    path: '/archive/:tagid',
    name: 'Archive',
    component: Archive,
    meta: {
      title: '彙整',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
