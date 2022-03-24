<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-32 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 搜尋框 -->
    <div class="w-10/12 mt-20">
      <div class="relative text-lg bg-transparent text-gray-800">
        <div
          class="flex items-center duration-500 border-b border-white border-opacity-25 py-2 focus-within:border-opacity-60"
        >
          <input
            class="w-full bg-transparent border-transparent focus:border-transparent border-none mr-3 px-2 text-3xl text-main-color-middle focus:outline-0 focus:ring-0 focus:text-main-color-light"
            type="text"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg
              class="h-10 w-10 fill-white opacity-25 hover:opacity-60 duration-500"
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
      <img class="w-auto" src="/img/bg-search.png" />
    </div>
    <!-- post grid -->
    <div class="grid grid-cols-1 w-6/12 overflow-hidden mt-36">
      <div v-for="(val, key) in postList" :key="key">
        <router-link :to="val.path">
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
  { title: "最璀璨明星——天狼星", des: "明亮的星星在寒冷的夜晚閃著孤寂的寒光，冬天是亮星最多的季節，有別於夏季星空的繁......", path: "/science/sc1326" },
  { title: "木星", des: "木星的軌道半長軸為5.2AU，繞行太陽需花11.86年，因其週期接近12年，在中國古代將......", path: "/science/sc1327" },
  { title: "類木行星", des: "也稱氣體巨行星，早期是指太陽系中的木星、土星、天王星、海王星，具有行星環的結購......", path: "/science/sc1328" },
  { title: "類地行星", des: "也稱岩石行星，主要由金屬及矽酸鹽岩石所組成，在太陽系中類地行星共有4顆，分別為......", path: "/science/sc1329" },
  { title: "北極星之秘", des: "韓劇冬季戀歌中，男主角曾說過這麼一段話﹕「在山上迷路的時候，只要找到北極星就可......", path: "/science/sc1330" },
  { title: "Ia 型超新星爆炸", des: "Ia型超新星爆炸的原型是一對雙星，其中質量高的一顆恆星（白色）演化速度較快，先演......", path: "/science/sc1331" },
  { title: "恆星月及朔望月", des: "月球是地球的衛星，繞著地球公轉，本身也會自轉，方向為由西向東，從北極上方往下看......", path: "/science/sc1332" },
]
</script>
