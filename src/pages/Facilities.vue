<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 小標題 -->
    <div class="w-10/12 mt-8 mb-14">
      <h2
        class="text-main-color-light text-left animate__animated animate__fadeIn"
        :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
      >{{ eduCategories.title }}</h2>
    </div>
    <!-- post grid -->
    <div
      class="grid laptop:grid-cols-3 grid-cols-1 large-pc:gap-24 h-table:gap-10 gap-8 h-table:w-10/12 overflow-hidden laptop:pr-0 h-table:pr-36"
    >
      <div
        class="group animate__animated animate__fadeInUp"
        :class="{ 'animate__delay-4s': getFirstEnter === true }"
        v-for="(val, key) in eduCategories.postList"
        :key="key"
      >
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
    <div class="w-10/12 mt-28 mb-0" ref="block_observatory_target">
      <h2
        class="text-main-color-light text-left animate__animated animate__faster"
        :class="{ 'animate__fadeIn': block_observatory_target_isVisible }"
      >{{ observatoryCategories.title }}</h2>
    </div>
    <!-- 篩選列 -->
    <div
      class="w-10/12 mt-14 mb-8 inline-flex animate__animated animate__faster"
      :class="{ 'animate__fadeIn': block_observatory_target_isVisible }"
    >
      <ul class="flex flex-wrap">
        <li v-for="(val, key) in observatoryCategories.array" :key="key">
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
    <div
      class="h-table:w-10/12 text-main-color-light md-container facilities-md-container animate__animated animate__delay-1s"
      :class="{ 'animate__fadeIn': block_observatory_target_isVisible }"
    >
      <researchContent
        v-show="selectCat === 'research'"
        class="animate__animated animate__fadeIn animate__faster"
      />
      <educationContent
        v-show="selectCat === 'education'"
        class="animate__animated animate__fadeIn animate__faster"
      />
      <otherunitContent
        v-show="selectCat === 'otherunit'"
        class="animate__animated animate__fadeIn animate__faster"
      />
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import researchContent from '@/assets/md/facilities/research.md'
import educationContent from '@/assets/md/facilities/education.md'
import otherunitContent from '@/assets/md/facilities/otherunit.md'
import { useIntersectionObserver } from '@vueuse/core'
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const selectCat = ref("research")
let eduCatData = {
  title: "推廣機構",
  postList: [
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
}
let observatoryCatData = {
  title: "天文台",
  array: [
    { name: "研究及學術", catId: "research" },
    { name: "教育單位", catId: "education" },
    { name: "其他單位", catId: "otherunit" }
  ]
}
const observatoryCategories = ref(observatoryCatData)
const eduCategories = ref(eduCatData)

const block_observatory_target = ref(null)
const block_observatory_target_isVisible = ref(false)
const { stop } = useIntersectionObserver(
  block_observatory_target,
  ([{ isIntersecting }]) => {
    block_observatory_target_isVisible.value = isIntersecting
    if (isIntersecting) {
      stop()
    }
  }
)
</script>
