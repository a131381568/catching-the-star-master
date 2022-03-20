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
  },

  getters: {
    isReady: (state) => {
      return !state.isInitialized
    },
  },
})
