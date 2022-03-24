<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-32 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />

    <!-- 搜尋框 -->
    <div class="xl:w-4/12 lg:w-2/5 h-full mt-20">
      <div class="relative text-lg bg-transparent text-gray-800">
        <div class="flex items-center border-b border-teal-500 py-2">
          <input
            class="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg
              class="h-4 w-4 fill-current"
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
      </div>
    </div>

    <!-- 主視覺 -->
    <div class="xl:w-4/12 lg:w-2/5 h-full mt-20">
      <img class="w-auto" src="/img/bg-achive.png" />
    </div>
    <!-- post grid -->
    <div class="grid grid-cols-1 w-6/12 overflow-hidden mt-36">
      <div v-for="(val, key) in postList" :key="key">
        <router-link :to="'/science/' + val.postId">
          <!-- card -->
          <div
            class="py-8 px-16 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60 bg-opacity-6 mb-1"
          >
            <!-- title -->
            <p class="text-3xl font-normal text-white">{{ val.title }}</p>
            <!-- des -->
            <p class="text-main-color-light font-light mt-5 text-lg truncate">{{ val.des }}</p>
          </div>
        </router-link>
      </div>
      <div class="w-full text-center">
        <button class="mt-16 btn draw meet">
          <span>Load More</span>
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
const postList = [
  { title: "大氣視窗", des: "我們的大氣層並不允許所有電磁波都能夠穿透，因此只有某些特定波段的電磁波能進到地......", postId: "sc1326" },
  { title: "可見光天文學", des: "由於可見光可穿透大氣層，可見光天文學是最古老的天文學，起初人們只能用肉眼觀測......", postId: "sc1327" },
  { title: "電波天文學", des: "電波天文學（Radio Astronomy）指的是使用無線電波的波段記錄記錄到來自天體的......", postId: "sc1328" },
  { title: "紅外線天文學", des: "紅外線波段的波長是介於可見光及次毫米波段之間，由於大部份紅外線都無法穿透大氣層......", postId: "sc1329" },
  { title: "紫外線天文學", des: "紫外線天文學觀測電磁波波長大約在100到3200埃之間 。因為這個範圍波長的輻射無法......", postId: "sc1330" },
  { title: "X射線天文學", des: "X射線天文學中常以電子伏特（eV）表示光子的能量，觀測對象為0.1keV到100keV的X......", postId: "sc1331" },
  { title: "伽瑪射線天文學", des: "伽瑪射線是可穿透整個宇宙的電磁波中最高能量的波段，也是電磁波譜中波長最短的部分......", postId: "sc1332" },
]
</script>
