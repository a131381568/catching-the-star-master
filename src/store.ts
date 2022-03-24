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
            pageName: "Home"
          },
          {
            title: "關於我們",
            subTitle: "about",
            pageName: "About"
          },
          {
            title: "天文科普",
            subTitle: "science",
            pageName: "Science"
          },
          {
            title: "約翰尼斯‧克卜勒 Johannes ",
            subTitle: "science",
            pageName: "SingleScience"
          },
          {
            title: "星星物語",
            subTitle: "科學家",
            pageName: "Story"
          },
          {
            title: "天文設施",
            subTitle: "facilities",
            pageName: "Facilities"
          },
          {
            title: "觀星地點",
            subTitle: "stargazing",
            pageName: "Stargazing"
          },
          {
            title: "標籤：天文觀測",
            subTitle: "tag",
            pageName: "Archive"
          },
          {
            title: "搜尋頁面",
            subTitle: "search",
            pageName: "Search"
          },
        ]
      const route = useRoute()
      const routeName = computed(() => route.name)
      let thisPath = routeName.value
      let thisPathInfo = pageDataArry.filter(item => thisPath === item.pageName)
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
