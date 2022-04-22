<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 主視覺 -->
    <div class="w-table:block hidden middle-pc:w-4/12 w-table:w-5/12 h-full mt-20 animate__animated animate__flipInY"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
      <img class="laptop:w-auto h-table:w-4/5" src="/img/bg-achive.png" />
    </div>
    <!-- post grid -->
    <div
      class="grid grid-cols-1 middle-pc:w-6/12 w-table:w-5/12 w-10/12 mobile:w-full overflow-hidden w-table:mt-36 animate__animated animate__fadeInUp"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
      <div v-for="(val, key) in postList" :key="key" class="animate__animated animate__fadeInUp">
        <router-link :to="'/science/' + val.postid">
          <!-- card -->
          <div
            class="laptop:py-8 laptop:px-16 p-6 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 bg-opacity-6 mb-1">
            <!-- title -->
            <p class="h-table:text-3xl text-xl font-normal text-white">{{ val.title }}</p>
            <!-- des -->
            <p class="text-main-color-light font-light h-table:mt-5 mt-1 text-lg truncate">{{ val.description }}</p>
          </div>
        </router-link>
      </div>
      <div class="w-full text-center" v-show="archivePageInfo.hasNextPage && postList.length > 0">
        <button class="middle-pc:mt-16 h-table:mt-12 mobile:mt-10 btn draw meet" @click.prevent="loadMoreData()">
          <span>加載更多</span>
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { getArtistsList } from '@/api/science'
import { ArtistsArr, PageInfo } from '@/types/graphql/types'
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const route = useRoute();
const router = useRouter();
const routeName = String(route.name)
const getTagid = computed(() => route.params.tagid);

// =============== 載入文章資料 ===============

const postList = ref<ArtistsArr>([])
const archivePageInfo = ref<PageInfo>({
  end: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  start: 0
})

defaultData(7, null, null, null)

function loadMoreData() {
  defaultData(1, null, archivePageInfo.value.end, null)
}

async function defaultData(
  first: number | null,
  last: number | null,
  after: number | null,
  before: number | null
) {
  const res = await getArtistsList(first, last, after, before, String(getTagid.value), routeName)
  if (res.data.artists.edges.length > 0) {
    let originalList = postList.value
    let pushList = originalList.concat(res.data.artists.edges);
    // 設置文章區塊
    postList.value = pushList
    archivePageInfo.value = res.data.artists.pageInfo
  } else {
    alert("無此頁面")
    router.push("/notfound")
  }
}
</script>
