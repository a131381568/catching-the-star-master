import { defineStore } from 'pinia'

const versionString =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_VERSION + '-dev'
    : import.meta.env.VITE_APP_VERSION

export const useStore = defineStore('main', {
  state: () => ({
    debug: import.meta.env.MODE === 'development',
    version: versionString,
    isInitialized: false,
    count: 0,
    countA: 20,
    //
    pageTitle: "",
    pageSubTitle: ""
  }),
  actions: {
    initApp() {
      this.isInitialized = true
      console.log('app initialized!')
    },
    increment(value = 1) {
      this.count += value
    },
    addIncrement(value = 1) {
      this.countA += value
    },
    //
    setTitleInfo() {
      const pageDataArry =
        [
          {
            title: "Catch the stars",
            subTitle: "誰能數得清天上的星星？誰能說出它們對世界的影響？——詹・湯姆遜",
            path: "/"
          },
          {
            title: "關於我們",
            subTitle: "about",
            path: "/about"
          },
          {
            title: "天文科普",
            subTitle: "science",
            path: "/science"
          },
          {
            title: "星星物語",
            subTitle: "story",
            path: "/story"
          },
          {
            title: "天文設施",
            subTitle: "facilities",
            path: "/facilities"
          },
          {
            title: "觀星地點",
            subTitle: "stargazing",
            path: "/stargazing"
          },
          {
            title: "彙整",
            subTitle: "tag",
            path: "/stargazing"
          },
          {
            title: "搜尋",
            subTitle: "search",
            path: "/search"
          },
        ]
      const route = useRoute()
      const path = computed(() => route.path)
      let thisPath = path.value
      let thisPathInfo = pageDataArry.filter(item => thisPath === item.path)
      if (thisPathInfo.length === 0) {
        this.pageTitle = "找不到網頁"
        this.pageSubTitle = "PAGE NOT FOUND"
      } else {
        this.pageTitle = thisPathInfo[0].title
        this.pageSubTitle = thisPathInfo[0].subTitle
      }
    }
  },
  getters: {
    isReady: (state) => {
      return !state.isInitialized
    },
    //
    get_pageTitle: (state) => {
      return state.pageTitle
    },
    get_pageSubTitle: (state) => {
      return state.pageSubTitle
    }
  },
})
