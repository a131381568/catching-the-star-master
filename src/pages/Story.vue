<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 時間軸 -->
    <div
      ref="masonryRef"
      class="container mx-auto h-table:w-10/12 h-full grid grid-col-2 grid-flow-col justify-items-center relative animate__animated animate__fadeIn"
      :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
      v-if="postList.length > 0 && postList"
    >
      <masonry-wall
        :items="postList"
        :ssr-columns="1"
        :column-width="gridWidth"
        :gap="0"
        class="py-56 timeline-grid"
        :style="{ 'width': '100%' }"
      >
        <template #default="{ item, index }">
          <div
            :class="[
              { 'mt-20': index !== 0 },
              { 'mt-0 ': index === 0 },
              { 'animate__animated animate__fadeInUp': postList.length === 1 + index }
            ]"
            class="flex group single-timeline-grid"
            :style="{ 'width': gridWidth + 'px' }"
          >
            <div
              class="left-line w-3/12 flex items-stretch justify-start border border-b border-t-0 border-l-0 border-r-0 h-0 border-main-color-middle mt-5 mr-2"
            >
              <span
                class="self-center bg-sub-color-dark rounded-full h-9px w-9px block relative -left-4px"
              ></span>
            </div>
            <div class="middle-pc:w-9/12">
              <router-link :to="'/story/' + item.postid">
                <h2
                  class="text-3xl text-white font-semibold group-hover:text-sp-color-light delay-75 duration-1000"
                >{{ item.title }}</h2>
              </router-link>
              <div class="w-full">
                <router-link :to="'/story/' + item.postid">
                  <img
                    class="w-auto mx-0 mt-6 mb-4 inline-block delay-75 duration-1000 group-hover:brightness-75"
                    :src="item.image"
                  />
                </router-link>
              </div>
              <span class="text-main-color-light grid-des-box">{{ item.description }}</span>
            </div>
            <div
              class="right-line w-3/12 flex items-stretch justify-end border border-b border-t-0 border-l-0 border-r-0 h-0 border-main-color-middle mt-5 ml-2"
            >
              <span
                class="self-center bg-sub-color-dark rounded-full h-9px w-9px relative -right-5px"
              ></span>
            </div>
          </div>
        </template>
      </masonry-wall>
    </div>
    <div
      class="h-table:w-10/12 w-table:text-center text-left"
      v-show="storyPageInfo.hasNextPage && postList.length > 0"
    >
      <button class="mt-20 btn draw meet" @click.prevent="loadMoreTimeLine()">
        <span>Load More</span>
      </button>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { getArtistsList } from '@/api/science'
import { ArtistsArr, PageInfo, ArtistsCategories } from '@/types/graphql/types'
import { useWindowSize, useElementSize, useElementBounding } from '@vueuse/core'
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const masonryRef = ref(null)
const { width } = useWindowSize()
const size = reactive(useElementSize(masonryRef))
const masonryRefWidth = computed(() => {
  // console.log(size.width)
  if (size.width) {
    return size.width
  } else {
    return 600
  }
})
const gridWidth = computed(() => {
  // console.log(masonryRefWidth.value)
  if (width.value >= 992) {
    return Math.floor(masonryRefWidth.value / 2)
  } else {
    return Math.floor(masonryRefWidth.value)
  }
})

/////////////////////////////////

const route = useRoute();
useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: "og:title",
      content: route.meta.title,
    },
    {
      name: "twitter:title",
      content: route.meta.title,
    },
  ],
});


/////////////////////////////////
const setLR = ref("")
const postList = ref<ArtistsArr>([])
const storyPageInfo = ref<PageInfo>({
  end: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  start: 0
})

defaultData(4, null, null, null, "story")

async function defaultData(
  first: number | null,
  last: number | null,
  after: number | null,
  before: number | null,
  categoryid: string | ""
) {
  const res = await getArtistsList(first, last, after, before, categoryid)
  let originalList = postList.value
  let pushList = originalList.concat(res.data.artists.edges);
  // 設置文章區塊
  postList.value = pushList
  storyPageInfo.value = res.data.artists.pageInfo
}

function loadMoreTimeLine() {
  // let boxLeft = document.querySelector(".masonry-wall > .masonry-column:nth-child(1)").clientHeight
  // let boxRight = document.querySelector(".masonry-wall > .masonry-column:nth-child(2)").clientHeight
  // if (boxLeft > boxRight) {
  //   setLR.value = "left"
  // } else {
  //   setLR.value = "right"
  // }
  console.log(masonryRef.value)
  defaultData(1, null, storyPageInfo.value.end, null, "story")
}
</script>