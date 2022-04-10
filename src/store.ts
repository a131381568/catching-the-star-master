import { defineStore } from 'pinia'
import { ArtistsCategories } from '@/types/graphql/types'

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
    firstEnter: true,
    artistsCat: []
  }),
  actions: {
    setPageTitle(value: string) {
      this.pageTitle = value
    },
    setPageSubTitlee(value: string) {
      this.pageSubTitle = value
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
    setArtistsCat(array: never) {
      this.artistsCat = array
    },
    changeDate(timestamp: number) {
      let display = ""
      const ts = new Date(timestamp);
      const year = ts.getFullYear()
      let date = ts.getDate()
      let month = ts.getMonth() + 1
      if (String(month).length === 1) {
        display = year + "-" + "0" + month
      } else {
        display = year + "-" + month
      }
      if (String(date).length === 1) {
        display = display + "-" + "0" + date
      } else {
        display = display + "-" + date
      }
      return display
    },
    changeCatName(array: ArtistsCategories, catId: string) {
      const searchCatAct = array.filter(item => item.post_category_id === catId)
      if (searchCatAct.length > 0) {
        return String(searchCatAct[0].post_category_name)
      } else {
        return ""
      }
    }
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
