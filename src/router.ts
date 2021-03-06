import { useHead } from '@vueuse/head'
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
import Board from '@/pages/admin//Board.vue'
import Slogan from '@/pages/admin//Slogan.vue'
import Stargazer from '@/pages/admin/stargazer/Stargazer.vue'
import AddSingleStargazer from '@/pages/admin/stargazer/AddSingleStargazer.vue'
import EditSingleStargazer from '@/pages/admin/stargazer/EditSingleStargazer.vue'
import Categories from '@/pages/admin/categories/Categories.vue'
import AddSingleCategories from '@/pages/admin/categories/AddSingleCategories.vue'
import EditSingleCategories from '@/pages/admin/categories/EditSingleCategories.vue'
import Article from '@/pages/admin/article/Article.vue'
import AddSingleArticle from '@/pages/admin/article/AddSingleArticle.vue'
import EditSingleArticle from '@/pages/admin/article/EditSingleArticle.vue'
import Organization from '@/pages/admin/organization/Organization.vue'
import AddSingleOrganization from '@/pages/admin/organization/AddSingleOrganization.vue'
import EditSingleOrganization from '@/pages/admin/organization/EditSingleOrganization.vue'
import Observatories from '@/pages/admin/observatories/Observatories.vue'
import AddSingleObservatories from '@/pages/admin/observatories/AddSingleObservatories.vue'
import EditSingleObservatories from '@/pages/admin/observatories/EditSingleObservatories.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    meta: {
      title: '首頁',
      manage: false
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
      manage: false
    },
  },
  {
    path: '/science',
    name: 'Science',
    component: Science,
    meta: {
      title: '天文科普',
      manage: false
    },
  },
  {
    path: '/science/:sid',
    name: 'SingleScience',
    component: SingleScience,
    meta: {
      title: '天文科普',
      manage: false
    },
  },
  {
    path: '/story',
    name: 'Story',
    component: Story,
    meta: {
      title: '星星物語',
      manage: false
    },
  },
  {
    path: '/story/:nid',
    name: 'SingleStory',
    component: SingleStory,
    meta: {
      title: '星星物語',
      manage: false
    },
  },
  {
    path: '/facilities',
    name: 'Facilities',
    component: Facilities,
    meta: {
      title: '天文設施',
      manage: false
    },
  },
  {
    path: '/stargazing',
    name: 'Stargazing',
    component: Stargazing,
    meta: {
      title: '觀星地點',
      manage: false
    },
  },
  {
    path: '/archive/:tagid',
    name: 'Archive',
    component: Archive,
    meta: {
      title: '標籤',
      manage: false
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: '搜尋頁面',
      manage: false
    },
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '找不到網頁',
      manage: false
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
      title: '後台系統登入',
      manage: true
    }
  },
  {
    path: '/board',
    name: 'Board',
    component: Board,
    meta: {
      title: '後台系統管理',
      manage: true
    }
  },
  {
    path: '/board/slogan',
    name: 'Slogan',
    component: Slogan,
    meta: {
      title: '標語管理',
      manage: true
    }
  },
  {
    path: '/board/stargazer',
    name: 'Stargazer',
    component: Stargazer,
    meta: {
      title: '觀星地點列表',
      manage: true
    }
  },
  {
    path: '/board/stargazer/edit/:lid',
    name: 'EditSingleStargazer',
    component: EditSingleStargazer,
    meta: {
      title: '編輯觀星地點',
      manage: true
    }
  },
  {
    path: '/board/stargazer/add',
    name: 'AddSingleStargazer',
    component: AddSingleStargazer,
    meta: {
      title: '新增觀星地點',
      manage: true
    }
  },
  {
    path: '/board/categories',
    name: 'Categories',
    component: Categories,
    meta: {
      title: '文章分類管理',
      manage: true
    }
  },
  {
    path: '/board/categories/edit/:cid',
    name: 'EditSingleCategories',
    component: EditSingleCategories,
    meta: {
      title: '編輯文章分類',
      manage: true
    }
  },
  {
    path: '/board/categories/add',
    name: 'AddSingleCategories',
    component: AddSingleCategories,
    meta: {
      title: '新增文章分類',
      manage: true
    }
  },
  {
    path: '/board/article',
    name: 'Article',
    component: Article,
    meta: {
      title: '文章列表',
      manage: true
    }
  },
  {
    path: '/board/article/edit/:pid',
    name: 'EditSingleArticle',
    component: EditSingleArticle,
    meta: {
      title: '編輯文章',
      manage: true
    }
  },
  {
    path: '/board/article/add',
    name: 'AddSingleArticle',
    component: AddSingleArticle,
    meta: {
      title: '新增文章',
      manage: true
    }
  },
  {
    path: '/board/organization',
    name: 'Organization',
    component: Organization,
    meta: {
      title: '天文機構管理',
      manage: true
    }
  },
  {
    path: '/board/organization/edit/:oid',
    name: 'EditSingleOrganization',
    component: EditSingleOrganization,
    meta: {
      title: '編輯機構',
      manage: true
    }
  },
  {
    path: '/board/organization/add',
    name: 'AddSingleOrganization',
    component: AddSingleOrganization,
    meta: {
      title: '新增機構',
      manage: true
    }
  },
  {
    path: '/board/observatories',
    name: 'Observatories',
    component: Observatories,
    meta: {
      title: '天文台管理',
      manage: true
    }
  },
  {
    path: '/board/observatories/edit/:mid',
    name: 'EditSingleObservatories',
    component: EditSingleObservatories,
    meta: {
      title: '編輯天文台',
      manage: true
    }
  },
  {
    path: '/board/observatories/add',
    name: 'AddSingleObservatories',
    component: AddSingleObservatories,
    meta: {
      title: '新增天文台',
      manage: true
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
  if (from.matched.length === 0 && to.meta.manage === false) {
    store.setEnterState(true)
  } else {
    store.setEnterState(false)
  }
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
