<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 搜尋框 -->
    <div
      class="h-table:w-10/12 w-full mt-1 mobile:-mt-8 animate__animated animate__fadeInUp"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
    >
      <div class="relative text-lg bg-transparent text-gray-800">
        <div
          class="flex items-center duration-500 border-b border-white border-opacity-25 py-2 focus-within:border-opacity-60 animate__animated animate__fadeIn"
          :class="[
            { 'animate__delay-4s': getFirstEnter === true },
            { 'animate__delay-1s': getFirstEnter === false },
            { 'border-sp-color-light': spaceAlert }
          ]"
        >
          <input
            class="w-full bg-transparent border-transparent focus:border-transparent border-none mr-3 px-2 h-table:text-3xl text-xl text-main-color-middle focus:outline-0 focus:ring-0 focus:text-main-color-light"
            type="text"
            placeholder="Search"
            v-model="searchWord"
            @keyup.enter="searchData()"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 h-table:mt-3 h-table:mr-4 mt-5 mr-1"
            @click.prevent="searchData()"
          >
            <svg
              class="h-table:h-10 h-6 w-auto fill-white opacity-25 hover:opacity-60 duration-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background:new 0 0 56.966 56.966;"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
        <p
          class="text-sp-color-light font-light h-table:mt-5 mt-1 text-lg truncate"
          v-show="spaceAlert"
        >請輸入關鍵字</p>
      </div>
    </div>
    <div class="h-table:w-10/12 h-200px mt-16" v-show="postList.length === 0">
      <!-- 搜尋無結果 -->
      <div class="animate__animated animate__fadeIn animate__delay-1s" v-show="searchIsNothing">
        <p class="h-table:text-3xl text-xl font-normal text-white">查無結果</p>
        <p class="text-main-color-light font-light h-table:mt-5 mt-1 text-lg truncate">請使用其它關鍵字搜尋</p>
      </div>
    </div>
    <!-- 主視覺 -->
    <div
      class="w-table:block hidden middle-pc:w-4/12 w-table:w-5/12 h-full mt-20 animate__animated animate__flipInY"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
      v-show="postList.length > 0"
    >
      <img class="w-auto" src="/img/bg-search.png" />
    </div>
    <!-- post grid -->
    <div
      class="grid grid-cols-1 middle-pc:w-6/12 w-table:w-5/12 w-10/12 mobile:w-full overflow-hidden w-table:mt-36 mt-14 animate__animated animate__fadeInUp"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
    >
      <!-- 搜尋有結果 -->
      <div v-for="(val, key) in postList" :key="key" class="animate__animated animate__fadeInUp">
        <router-link :to="setArtistRoute(val.categoryid, val.postid)">
          <!-- card -->
          <div
            class="laptop:py-8 laptop:px-16 p-6 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 bg-opacity-6 mb-1"
          >
            <!-- title -->
            <p class="h-table:text-3xl text-xl font-normal text-white">{{ val.title }}</p>
            <!-- des -->
            <p
              class="text-main-color-light font-light h-table:mt-5 mt-1 text-lg truncate"
            >{{ val.description }}</p>
          </div>
        </router-link>
      </div>
      <div class="w-full text-center" v-show="searchPageInfo.hasNextPage && postList.length > 0">
        <button
          class="middle-pc:mt-16 h-table:mt-12 mobile:mt-10 btn draw meet"
          @click.prevent="loadMoreData()"
        >
          <span>Load More</span>
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { getSearchArtists } from '@/api/science'
import { ArtistsArr, PageInfo } from '@/types/graphql/types'
import { watchDebounced } from '@vueuse/core'
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const searchWord = ref("")
const searchIsNothing = ref(false)
const spaceAlert = ref(false)

// =============== 判斷文章路由 ===============

function setArtistRoute(catId: string, postId: number) {
  const routeDefault = {
    name: 'SingleScience',
    params: { sid: postId }
  }
  const routeUnusual = {
    name: 'SingleStory',
    params: { nid: postId }
  }
  if (catId === 'story') {
    return routeUnusual
  } else {
    return routeDefault
  }
}

// =============== 搜尋框防抖監聽限制輸入數量 ===============

watchDebounced(searchWord, () => {
  if (searchWord.value.length > 30) {
    let limitStr = searchWord.value.substring(0, 30)
    searchWord.value = limitStr
  }
}, { debounce: 1000 })


// =============== 載入搜尋列表 ===============

const postList = ref<ArtistsArr>([])
const searchPageInfo = ref<PageInfo>({
  end: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  start: 0
})

function loadMoreData() {
  defaultData(3, null, searchPageInfo.value.end, null)
}

function searchData() {
  const text = searchWord.value
  if (text.split(' ').join('').length === 0) {
    // 僅空格的情況
    spaceAlert.value = true
  } else if (text.trim().length > 30) {
    // console.log("超過30")
  } else {
    // 開始搜尋
    spaceAlert.value = false
    searchIsNothing.value = false
    postList.value = []
    setTimeout(() => {
      defaultData(7, null, null, null)
    }, 300);
  }
}

async function defaultData(
  first: number | null,
  last: number | null,
  after: number | null,
  before: number | null
) {
  const res = await getSearchArtists(first, last, after, before, String(searchWord.value).trim())
  let originalList = postList.value
  let pushList = originalList.concat(res.data.searchArtists.edges);
  // 設置文章區塊
  postList.value = pushList
  searchPageInfo.value = res.data.searchArtists.pageInfo
  // 判斷是否查無結果
  if (postList.value.length === 0 && searchPageInfo.value.start === null) {
    searchIsNothing.value = true
  } else {
    searchIsNothing.value = false
  }
}
</script>
