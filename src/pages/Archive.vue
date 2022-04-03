<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 主視覺 -->
    <div
      class="w-table:block hidden middle-pc:w-4/12 w-table:w-5/12 h-full mt-20 animate__animated animate__flipInY"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
    >
      <img class="laptop:w-auto h-table:w-4/5" src="/img/bg-achive.png" />
    </div>
    <!-- post grid -->
    <div
      class="grid grid-cols-1 middle-pc:w-6/12 w-table:w-5/12 w-10/12 mobile:w-full overflow-hidden w-table:mt-36 animate__animated animate__fadeInUp"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
    >
      <div v-for="(val, key) in postList" :key="key" class="animate__animated animate__fadeInUp">
        <router-link :to="'/science/' + val.postId">
          <!-- card -->
          <div
            class="laptop:py-8 laptop:px-16 p-6 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 bg-opacity-6 mb-1"
          >
            <!-- title -->
            <p class="h-table:text-3xl text-xl font-normal text-white">{{ val.title }}</p>
            <!-- des -->
            <p
              class="text-main-color-light font-light h-table:mt-5 mt-1 text-lg truncate"
            >{{ val.des }}</p>
          </div>
        </router-link>
      </div>
      <div class="w-full text-center">
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
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const postList = ref([
  { title: "大氣視窗", des: "我們的大氣層並不允許所有電磁波都能夠穿透，因此只有某些特定波段的電磁波能進到地......", postId: "sc1326" },
  { title: "可見光天文學", des: "由於可見光可穿透大氣層，可見光天文學是最古老的天文學，起初人們只能用肉眼觀測......", postId: "sc1327" },
  { title: "電波天文學", des: "電波天文學（Radio Astronomy）指的是使用無線電波的波段記錄記錄到來自天體的......", postId: "sc1328" },
  { title: "紅外線天文學", des: "紅外線波段的波長是介於可見光及次毫米波段之間，由於大部份紅外線都無法穿透大氣層......", postId: "sc1329" },
  { title: "紫外線天文學", des: "紫外線天文學觀測電磁波波長大約在100到3200埃之間 。因為這個範圍波長的輻射無法......", postId: "sc1330" },
  { title: "X射線天文學", des: "X射線天文學中常以電子伏特（eV）表示光子的能量，觀測對象為0.1keV到100keV的X......", postId: "sc1331" },
  { title: "伽瑪射線天文學", des: "伽瑪射線是可穿透整個宇宙的電磁波中最高能量的波段，也是電磁波譜中波長最短的部分......", postId: "sc1332" },
])

function loadMoreData() {
  let array2 = [{ title: "大氣視窗", des: "我們的大氣層並不允許所有電磁波都能夠穿透，因此只有某些特定波段的電磁波能進到地......", postId: "sc1326" }]
  const array3 = postList.value.concat(array2);
  postList.value = array3
}
</script>
