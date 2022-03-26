import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import Science from '@/pages/Science.vue'
import SingleScience from '@/pages/SingleScience.vue'
import Story from '@/pages/Story.vue'
import SingleStory from '@/pages/SingleStory.vue'
import Archive from '@/pages/Archive.vue'
import Search from '@/pages/Search.vue'
import NotFound from '@/pages/NotFound.vue'

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
    path: "/home",
    redirect: "/"
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
    path: '/story/:nid',
    name: 'SingleStory',
    component: SingleStory,
    meta: {
      title: '星星物語',
    },
  },
  {
    path: '/archive/:tagid',
    name: 'Archive',
    component: Archive,
    meta: {
      title: '標籤',
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: '搜尋頁面',
    },
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '找不到網頁',
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/notfound"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
})

export default router
