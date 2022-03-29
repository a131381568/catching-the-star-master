import { defineStore } from 'pinia'

const versionString =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_VERSION + '-dev'
    : import.meta.env.VITE_APP_VERSION

export const useStore = defineStore('main', {
  state: () => ({
    debug: import.meta.env.MODE === 'development',
    version: versionString,
    pageTitle: "",
    pageSubTitle: "",
    isHeaderTop: true,
    loading: false,
    firstEnter: true
  }),
  actions: {
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
            subTitle: "story",
            pageName: "Story"
          },
          {
            title: "為淒美的愛情故事搭起橋樑——天鵝座 ",
            subTitle: "星星物語",
            pageName: "SingleStory"
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
    },
    updateHeaderState(value: boolean) {
      this.isHeaderTop = value
    },
    setLoading(value: boolean) {
      this.loading = value
    },
    setEnterState(value: boolean) {
      this.firstEnter = value
    },
  },
  getters: {
    get_pageTitle: (state) => {
      return state.pageTitle
    },
    get_pageSubTitle: (state) => {
      return state.pageSubTitle
    },
    get_isHeaderTop: (state) => {
      return state.isHeaderTop
    },
    get_loading: (state) => {
      return state.loading
    },
    get_firstEnter: (state) => {
      return state.firstEnter
    },
  }
})
