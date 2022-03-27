<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-32 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 小標題 -->
    <div class="w-10/12 mt-8 mb-14">
      <h2 class="text-main-color-light text-left">推廣機構</h2>
    </div>
    <!-- post grid -->
    <div class="grid grid-cols-3 gap-24 w-10/12 overflow-hidden">
      <div class="group" v-for="(val, key) in postList" :key="key">
        <img
          class="object-cover h-130px w-full delay-75 duration-1000 border border-white border-opacity-0 group-hover:border-opacity-60 border-b-0"
          :src="val.img"
        />
        <!-- card -->
        <div
          class="h-72 py-7 px-8 delay-75 duration-1000 bg-white group-hover:bg-opacity-0 border border-white border-opacity-0 group-hover:border-opacity-60 border-t-0"
          :class="[
            { 'bg-opacity-18': (key + 1) % 3 === 0 },
            { 'bg-opacity-12': (key + 3) % 3 === 1 },
            { 'bg-opacity-6': (key + 4) % 3 === 1 }
          ]"
        >
          <!-- title -->
          <p class="text-3xl text-white truncate font-normal">{{ val.title }}</p>
          <!-- des -->
          <p class="text-main-color-light font-light mt-6 text-lg grid-des-box">{{ val.des }}</p>
          <!-- link -->
          <a class="mt-7 btn draw meet inline-block" :href="val.link" target="_blank">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 小標題 -->
    <div class="w-10/12 mt-28 mb-0">
      <h2 class="text-main-color-light text-left">天文台</h2>
    </div>
    <!-- 篩選列 -->
    <div class="w-10/12 mt-14 mb-8 inline-flex">
      <ul class="flex flex-wrap">
        <li v-for="(val, key) in observatoryCategories" :key="key">
          <div class="flex items-center mr-10 group">
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
                'delay-75', 'duration-1000',
                'flex', 'items-center', 'cursor-pointer', 'text-2xl', 'group-hover:text-sp-color-light',
                { 'text-sub-color-light': val.catId === selectCat },
                { 'text-main-color-light': val.catId !== selectCat }
              ]"
            >
              <span
                class="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink group-hover:bg-sp-color-light delay-75 duration-1000"
                :class="{ 'bg-sub-color-light': val.catId === selectCat }"
              ></span>
              {{ val.name }}
            </label>
          </div>
        </li>
      </ul>
    </div>
    <!-- 瀏覽 md 區塊 -->
    <div class="w-10/12 text-main-color-light md-container facilities-md-container">
      <researchContent v-show="selectCat === 'research'" />
      <educationContent v-show="selectCat === 'education'" />
      <otherunitContent v-show="selectCat === 'otherunit'" />
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import researchContent from '@/assets/md/facilities/research.md'
import educationContent from '@/assets/md/facilities/education.md'
import otherunitContent from '@/assets/md/facilities/otherunit.md'
const selectCat = ref("research")
const observatoryCategories = [
  { name: "研究及學術", catId: "research" },
  { name: "教育單位", catId: "education" },
  { name: "其他單位", catId: "otherunit" }
]
const postList = [
  {
    title: "台北市立天文科學教育館",
    des: "位於臺灣臺北市士林區的臺北科學藝術園區內，為臺北市政府教育局所屬之社會教育機構，成立於1996年11月7日......",
    img: "/img/facilities-bg-01.jpg",
    link: "https://www.tam.gov.taipei/"
  },
  {
    title: "南瀛天文教育園區",
    des: "位於台南市大內區的天文教育館，原為台南縣政府以天文推廣教育為主要目的而設立的「南瀛天文教育園區」......",
    img: "/img/facilities-bg-02.jpg",
    link: "https://taea.tn.edu.tw/"
  },
  {
    title: "國立自然科學博物館",
    des: "簡稱科博館，是位於臺灣臺中市北區的公立科學博物館，是中華民國國家十二項建設文化建設項下興建的首座科學博物館......",
    img: "/img/facilities-bg-03.jpg",
    link: "https://www.nmns.edu.tw/ch/"
  },
]
</script>
