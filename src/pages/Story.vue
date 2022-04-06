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
              { 'text-right float-left': (index + 1) % 2 !== 0 && width >= 992 },
              { 'text-left float-right': (index + 1) % 2 === 0 && width >= 992 },
              { 'mt-20': index !== 0 },
              { 'mt-0 ': index === 0 },
              { 'float-left': width < 992 },
              { 'animate__animated animate__fadeInUp': postList.length === 1 + index }
            ]"
            class="flex group"
            :style="{ 'width': gridWidth + 'px' }"
          >
            <div
              v-show="(index + 1) % 2 === 0 || width < 992"
              class="w-3/12 flex items-stretch justify-start border border-b border-t-0 border-l-0 border-r-0 h-0 border-main-color-middle mt-5 mr-2"
            >
              <span
                class="self-center bg-sub-color-dark rounded-full h-9px w-9px block relative -left-4px"
              ></span>
            </div>
            <div class="middle-pc:w-9/12">
              <router-link :to="'/story/' + item.postId">
                <h2
                  class="text-3xl text-white font-semibold group-hover:text-sp-color-light delay-75 duration-1000"
                >{{ item.title }}</h2>
              </router-link>
              <div class="w-full">
                <router-link :to="'/story/' + item.postId">
                  <img
                    class="w-auto mx-0 mt-6 mb-4 inline-block delay-75 duration-1000 group-hover:brightness-75"
                    :src="item.img"
                  />
                </router-link>
              </div>
              <span class="text-main-color-light grid-des-box">{{ item.des }}</span>
            </div>
            <div
              v-show="(index + 1) % 2 !== 0 && width >= 992"
              class="w-3/12 flex items-stretch justify-end border border-b border-t-0 border-l-0 border-r-0 h-0 border-main-color-middle mt-5 ml-2"
            >
              <span
                class="self-center bg-sub-color-dark rounded-full h-9px w-9px relative -right-5px"
              ></span>
            </div>
          </div>
        </template>
      </masonry-wall>
    </div>
    <div class="h-table:w-10/12 w-table:text-center text-left" v-show="postList.length > 0">
      <button class="mt-20 btn draw meet" @click.prevent="loadMoreTimeLine()">
        <span>Load More</span>
      </button>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { useElementSize } from '@vueuse/core'
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

const postList = ref([
  {
    title: "獵戶座的傳說",
    date: "2022-03-26",
    catName: "",
    catId: "",
    des: "今天想跟大家談談冬天中的星空——獵戶座。在冬天的夜空裡，我們抬頭仰望南方，可以看到三顆整齊排列的二級星，以這三顆星為中心向外延伸可以找到參宿四星、參宿七星",
    postId: "fs8611",
    img: "/img/story-bg-01.jpg"
  },
  {
    title: "為淒美的愛情故事搭起橋樑——天鵝座",
    date: "2022-03-26",
    catName: "",
    catId: "",
    des: "天鵝座在天空中是一個大十字，主星天津四就沉浸在銀河中(夏季大三角之一)，結合了東方淒美七夕的愛情故事，古代相傳牛郎織女因耽於遊樂，不認真耕作織布，而被迫分隔於......",
    postId: "fs8612",
    img: "/img/story-bg-02.jpg"
  },
  {
    title: "醫者的代言人——巨蛇座",
    date: "2022-03-26",
    catName: "",
    catId: "",
    des: "我們夜晚仰望星斗訴說著人神之間交流的故事，而全天空之中卻有一個星座超級大，大到著名的天文學家托勒密不得不把它拆開來變成兩個星座，它就是我們今天要聊的蛇夫座與巨蛇座......",
    postId: "fs8613",
    img: "/img/story-bg-03.jpg"
  },
  {
    title: "橫跨天際的銀河",
    date: "2022-03-26",
    catName: "",
    catId: "",
    des: "隨著夏季的步伐到來，想必大家時不時就在網路上看到各種銀河炫耀照，如夢似幻就像假的一樣，不過只要掌握好幾個原則，想看到並拍到銀河其實......",
    postId: "fs8614",
    img: "/img/story-bg-04.jpg"
  },
  {
    title: "講義氣且『異氣』的好夥伴——巨蟹座",
    date: "2022-03-26",
    catName: "",
    catId: "",
    des: "每個人的一生不全然都具有主角光環，大多數的一般人都是戲份不重的配角，我們今天介紹的巨蟹座，是黃道星座中最不顯眼的一個，雖毫不起眼卻是最講義氣的好夥伴......",
    postId: "fs8615",
    img: "/img/story-bg-05.jpg"
  }
])

function loadMoreTimeLine() {
  let array2 = [
    {
      title: "獵戶座的傳說",
      date: "2022-03-26",
      catName: "",
      catId: "",
      des: "今天想跟大家談談冬天中的星空——獵戶座。在冬天的夜空裡，我們抬頭仰望南方，可以看到三顆整齊排列的二級星，以這三顆星為中心向外延伸可以找到參宿四星、參宿七星",
      postId: "fs8611",
      img: "/img/story-bg-01.jpg",
      animate: true
    }
  ]
  const array3 = postList.value.concat(array2);
  postList.value = array3
}



</script>
