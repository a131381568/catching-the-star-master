<template>
  <Header />
  <div @click.self="closeDefaultMenu()"
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 篩選列 -->
    <div
      class="animate__animated animate__fadeIn w-10/12 middle-pc:mt-16 middle-pc:mb-20 mt-6 mb-16 hidden laptop:inline-flex"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
      <ul class="flex" v-if="filterCategories.length > 0 && filterCategories">
        <li v-for="(val, key) in filterCategories" :key="key" class="min-w-min w-auto"
          @click="reSearchData(String(val.post_category_id))">
          <div class="flex items-center group large-pc:mr-10 laptop:mr-6">
            <input :id="String(val.post_category_id)" class="hidden" :value="val.post_category_id" />
            <label :class="[
              'flex-none', 'delay-75', 'duration-1000',
              'flex', 'items-center', 'cursor-pointer', 'text-2xl', 'group-hover:text-sp-color-light',
              { 'text-sub-color-light': val.post_category_id === selectCat },
              { 'text-main-color-light': val.post_category_id !== selectCat }
            ]">
              <span
                class="flex-none w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink group-hover:bg-sp-color-light delay-75 duration-1000 whitespace-nowrap"
                :class="{ 'bg-sub-color-light': val.post_category_id === selectCat }"></span>
              {{ val.post_category_name }}
            </label>
          </div>
        </li>
      </ul>
    </div>
    <!-- 選單樣式 -->
    <div class="dropdown-menu z-40 h-table:w-10/12 mb-8 relative laptop:hidden animate__animated animate__fadeIn"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
      <button id="dropdownDefault"
        class="duration-1000 text-main-color-light border border-white border-opacity-60 hover:border-opacity-0 bg-opacity-0 bg-white hover:bg-opacity-18 hover:text-sub-color-light focus:bg-opacity-18 focus:outline-none focus:border-opacity-0 focus:text-sub-color-light font-medium text-xl pl-4 p-3 relative text-center inline-flex items-center tracking-wide-content w-200px"
        type="button" @click.prevent="toggleFilter()">
        {{ selectName }}
        <svg class="ml-2 w-4 h-4 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div id="dropdown" class="z-10 bg-main-color-light divide-y divide-gray-100 absolute w-200px"
        v-show="toggleFilterVal">
        <ul class="py-1 text-sm text-main-color-black cursor-pointer">
          <li v-for="(val, key) in filterCategories" :key="key"
            @click.stop="selectDropCat(String(val.post_category_id))"
            class="tracking-wide-content block py-2 px-4 hover:text-sub-color-dark">{{ val.post_category_name }}</li>
        </ul>
      </div>
    </div>
    <!-- post grid -->
    <div
      class="grid laptop:grid-cols-3 grid-cols-2 mobile:grid-cols-1 pro-pc:gap-24 h-table:gap-12 mobile:gap-5 h-table:w-10/12 overflow-hidden animate__animated animate__fadeInUp"
      :class="{ 'animate__delay-4s': getFirstEnter === true }, { animate__fadeOut: changeGridState }"
      v-if="postList.length > 0 && postList">
      <div v-for="(val, key) in postList" :key="key">
        <!-- card -->
        <div
          class="h-96 py-12 px-8 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 animate__animated animate__fadeInUp"
          :class="[
            { 'bg-opacity-18': (key + 1) % 3 === 0 },
            { 'bg-opacity-12': (key + 3) % 3 === 1 },
            { 'bg-opacity-6': (key + 4) % 3 === 1 }
          ]">
          <!-- title -->
          <p class="text-3xl font-normal text-white truncate">{{ val.title }}</p>
          <!-- date & cat -->
          <p class="text-tiny mt-1 text-main-color-light">
            {{ store.changeDate(Number(val.updatetime)) }},
            <router-link :to="'/archive/' + val.categoryid" class="text-sub-color-light hover:text-sp-color-light">{{
              store.changeCatName(filterCategories, val.categoryid)
            }}</router-link>
          </p>
          <!-- des -->
          <!-- <p
            class="text-main-color-light font-light mt-5 text-lg grid-des-box"
          >{{ val.description }}</p>-->
          <v-md-preview class="text-main-color-light font-light mt-5 grid-des-box" :text="val.description"
            height="400px"></v-md-preview>

          <!-- link -->
          <router-link class="mt-10 btn draw meet inline-block" :to="'/science/' + val.postid">
            <span>Read More</span>
          </router-link>
        </div>
      </div>
    </div>
    <div :class="['h-table:w-10/12', 'h-screen']" v-show="postList.length === 0"></div>
    <div class="h-table:w-10/12 text-center" v-show="sciencePageInfo.hasNextPage && postList.length > 0">
      <button class="h-table:mt-24 mt-6 mobile:mt-11 btn draw meet" @click.prevent="loadMoreData()">
        <span>Load More</span>
      </button>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { getArtistsList, artistsCategories } from '@/api/science'
import { ArtistsArr, PageInfo, ArtistsCategories } from '@/types/graphql/types'
// 取得路由
const route = useRoute()
const routeName = String(route.name)
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);

// =============== 點選篩選列 ===============

const selectCat = ref("")
const filterCategories = ref<ArtistsCategories>([])
const selectName = computed(() => {
  let active = store.changeCatName(filterCategories.value, selectCat.value)
  if (active) {
    return active
  } else {
    return ""
  }
})

// =============== 切換選單 ===============

const [toggleFilterVal, toggleFilter] = useToggle()
function selectDropCat(catId: string) {
  // console.log("selectDropCat")
  toggleFilterVal.value = false
  reSearchData(catId)
}
function closeDefaultMenu() {
  if (toggleFilterVal.value === true) {
    toggleFilterVal.value = false
  }
}

// =============== 取得篩選列 ===============

getArtistsCategories()
async function getArtistsCategories() {
  const res = await artistsCategories(routeName)
  const filterBar = res.data.artistsCategories.filter(item => item.post_category_id !== 'story')
  // const filterBar = res.data.artistsCategories
  filterCategories.value = filterBar
}

// =============== 載入文章資料 ===============

const changeGridState = ref(false)
const postList = ref<ArtistsArr>([])
const sciencePageInfo = ref<PageInfo>({
  end: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  start: 0
})

defaultData(9, null, null, null, "")

function loadMoreData() {
  defaultData(3, null, sciencePageInfo.value.end, null, selectCat.value || "")
}
function reSearchData(catId: string) {
  selectCat.value = catId
  changeGridState.value = true
  setTimeout(() => {
    postList.value = []
    defaultData(9, null, null, null, catId)
    changeGridState.value = false
  }, 500);
}

async function defaultData(
  first: number | null,
  last: number | null,
  after: number | null,
  before: number | null,
  categoryid: string | ""
) {
  const res = await getArtistsList(first, last, after, before, categoryid, routeName)
  let originalList = postList.value
  let pushList = originalList.concat(res.data.artists.edges);
  // 設置文章區塊
  postList.value = pushList
  sciencePageInfo.value = res.data.artists.pageInfo
}
</script>
