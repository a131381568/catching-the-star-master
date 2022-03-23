<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-32 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 篩選列 -->
    <div class="w-10/12 mt-16 mb-20 inline-flex">
      <ul class="flex flex-wrap">
        <li v-for="(val, key) in filterCategories" :key="key">
          <div class="flex items-center mr-10">
            <input
              :id="val.catId"
              type="radio"
              name="radio"
              class="hidden"
              v-model="selectCat"
              :value="val.catId"
            />
            <label
              :for="val.catId"
              :class="[
                'flex', 'items-center', 'cursor-pointer', 'text-2xl',
                { 'text-sub-color-light': val.catId === selectCat },
                { 'text-main-color-light': val.catId !== selectCat }
              ]"
            >
              <span
                class="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink"
                :class="{ 'bg-sub-color-light': val.catId === selectCat }"
              ></span>
              {{ val.name }}
            </label>
          </div>
        </li>
      </ul>
    </div>
    <!-- post grid -->
    <div class="grid grid-cols-3 gap-24 w-10/12 overflow-hidden">
      <div v-for="(val, key) in postList" :key="key">
        <!-- card -->
        <div
          class="h-96 py-12 px-8 bg-white hover:bg-opacity-0 delay-75 duration-1000 border border-white border-opacity-0 hover:border-opacity-60"
          :class="[
            { 'bg-opacity-18': (key + 1) % 3 === 0 },
            { 'bg-opacity-12': (key + 3) % 3 === 1 },
            { 'bg-opacity-6': (key + 4) % 3 === 1 }
          ]"
        >
          <!-- title -->
          <p class="text-3xl font-normal text-white">{{ val.title }}</p>
          <!-- date & cat -->
          <p class="text-tiny mt-1 text-main-color-light">
            {{ val.date }},
            <router-link to="/" class="text-sub-color-light">{{ val.catName }}</router-link>
          </p>
          <!-- des -->
          <p class="text-main-color-light font-light mt-5 text-lg grid-des-box">{{ val.des }}</p>
          <!-- link -->
          <button class="mt-10 btn draw meet">
            <span>Read More</span>
          </button>
        </div>
      </div>
    </div>
    <div class="w-10/12 text-center">
      <button class="mt-24 btn draw meet">
        <span>Load More</span>
      </button>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
const selectCat = ref("all")

const filterCategories = [
  { name: "全部", catId: "all" },
  { name: "太陽系和恆星", catId: "solar" },
  { name: "宇宙", catId: "universe" },
  { name: "特殊天象", catId: "phenomena" },
  { name: "天文觀測", catId: "observation" },
  { name: "科學家", catId: "scientist" },
  { name: "曆法", catId: "calendar" },
  { name: "其他", catId: "other" }
]

const postList = [
  { title: "恆星月及朔望月", date: "2022-03-15", catName: "太陽系與恆星", catId: "solar", des: "月球是地球的衛星，繞著地球公轉，本身也會自轉，方向為由西向東，從北極上方往下看，自轉及公轉均為逆時針轉動，只是月球......", postId: "sc1326" },
  { title: "月球兩大地形", date: "2022-03-13", catName: "太陽系與恆星", catId: "solar", des: "從地表觀看月球，會發現月球上很明顯地分成明亮及暗黑的區域，剛好分別對應到月球上的隕石坑和月海。", postId: "sc1355" },
  { title: "大霹靂", date: "2022-03-10", catName: "宇宙", catId: "universe", des: "大霹靂(Big Bang)是描述宇宙的源起與演化的宇宙學模型，宇宙是在過去有限的時間之前，由一個密度極大且溫度極高的太初狀態......", postId: "sc1374" },
  { title: "宇宙微波背景輻射", date: "2022-03-09", catName: "宇宙", catId: "universe", des: "宇宙微波背景（Cosmic Microwave Background，簡稱CMB，又稱3K背景輻射）是宇宙學中「大霹靂」遺留下來的熱......", postId: "sc2419" },
  { title: "Ia 型超新星爆炸", date: "2022-03-04", catName: "宇宙", catId: "universe", des: "Ia型超新星爆炸的原型是一對雙星，其中質量高的一顆恆星（白色）演化速度較快，先演化進入紅巨星階段，紅巨星的外層氣體被......", postId: "sc0051" },
  { title: "日食", date: "2022-02-20", catName: "特殊天象", catId: "phenomena", des: "當月球運行至地球與太陽中間，月球的「影子」落在地球上，此時地球上該區域即可看到日食。", postId: "sc1388" },
  { title: "可見光天文學", date: "2022-02-13", catName: "天文觀測", catId: "observation", des: "由於可見光可穿透大氣層，可見光天文學是最古老的天文學，起初人們只能用肉眼觀測，並用手繪紀錄天體的形象及位置。", postId: "sc3672" },
  { title: "約翰尼斯‧克卜勒 ", date: "2022-02-02", catName: "科學家", catId: "scientist", des: "德國人，著名的天文學家、數學家，為天文學家第谷的助手。", postId: "sc6501" },
  { title: "農曆置閏的原則為何", date: "2022-01-26", catName: "曆法", catId: "calendar", des: "農曆置閏是為了使四季與實際氣候配合，每19年需加7個閏月，在農曆月裡通常包含1個節氣和1個中氣，如果僅出現節氣而無中氣時......", postId: "sc4312" }
]
</script>
