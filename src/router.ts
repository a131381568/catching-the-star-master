import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import Science from '@/pages/Science.vue'
import SingleScience from '@/pages/SingleScience.vue'
import Story from '@/pages/Story.vue'
import SingleStory from '@/pages/SingleStory.vue'
import Facilities from '@/pages/Facilities.vue'
import Stargazing from '@/pages/Stargazing.vue'
import Archive from '@/pages/Archive.vue'
import Search from '@/pages/Search.vue'
import NotFound from '@/pages/NotFound.vue'
import Login from '@/pages/admin/Login.vue'

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
    path: '/facilities',
    name: 'Facilities',
    component: Facilities,
    meta: {
      title: '天文設施',
    },
  },
  {
    path: '/stargazing',
    name: 'Stargazing',
    component: Stargazing,
    meta: {
      title: '觀星地點',
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登入',
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // gotop
    let origin = document.querySelector(".app-inner")
    if (origin) {
      origin.scrollTop = 0
    }
    return {
      behavior: 'smooth'
    }
  }
})

router.beforeEach((to, from, next) => {
  const store = useStore();
  store.setEnterState(false)
  // 如果是第一次進這個網站
  // if (from.matched.length === 0) {
  //   store.setEnterState(true)
  // } else {
  //   store.setEnterState(false)
  // }

  // 設置開始 loading 狀態 
  store.setLoading(true)
  setTimeout(() => {
    next()
  }, 500);
})

router.afterEach((to, from) => {
  const store = useStore();
  store.setLoading(false)
})

export default router
