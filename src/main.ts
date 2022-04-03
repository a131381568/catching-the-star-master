import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import './assets/index.postcss'
import 'animate.css';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet'


import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
VMdPreview.use(githubTheme)

import MasonryWall from '@yeger/vue-masonry-wall'

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)
app.use(VMdPreview);
app.use(MasonryWall)
app.use(leaflet)

app.mount('#app')
