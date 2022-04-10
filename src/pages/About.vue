<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 主視覺 -->
    <div
      class="animate__animated animate__fadeInLeftBig laptop:w-5/12 h-table:w-10/12 h-full overflow-hidden relative"
      :class="[{ 'animate__delay-3s': getFirstEnter === true }]"
    >
      <img
        class="transition-all ease-out z-30 absolute w-auto object-center"
        src="/img/kenny-logo.png"
        :style="{
          'transform': `rotateX(${roll * 30}deg) rotateY(${tilt * 30}deg)`,
          'left': 'calc(50% - 130px)',
          'top': 'calc(50% - 115px)'
        }"
      />
      <div class="absolute left-0 top-0 w-full h-full bg-gradient-radial from-white z-20"></div>
      <img
        class="w-auto transition-all ease-out bg-white z-10 object-center"
        src="/img/about-bg-sp.jpg"
        ref="photo"
        :style="{
          'transform': `rotateX(${roll * 15}deg) rotateY(${tilt * 15}deg) scale(1.05)`
        }"
      />
    </div>
    <!-- 內文 -->
    <div class="laptop:w-5/12 h-table:w-10/12 middle-pc:pl-24 laptop:pl-10 laptop:mt-0 mt-10">
      <div
        class="animate__animated animate__flipInX callout-box bg-main-color-light py-10 pl-10 pr-14 mb-8 border-l-callout-box-boder border-sub-color-dark relative mobile:py-4 mobile:pl-4"
        :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
      >
        <div class="text-main-color-black font-bold" v-html="sloganRef"></div>
        <span
          class="text-sub-color-dark text-9xl font-serif font-light absolute -top-2 right-1 mobile:text-8xl"
        >”</span>
      </div>
      <div
        class="text-main-color-light animate__animated animate__fadeIn"
        :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]"
      >
        <p v-html="philosophyRef"></p>
      </div>
    </div>
  </div>
  <!-- 引言 -->
  <div
    class="h-table:flex flex-wrap items-start justify-center py-24 px-4 bg-main-color-black text-main-color-light mobile:px-8"
  >
    <div
      ref="block_black_target"
      class="h-table:w-10/12 text-center grid laptop:grid-cols-none h-table:grid-cols-3 animate__animated animate__delay-1s opacity-0"
      :class="{ 'animate__fadeIn': block_black_isVisible }"
    >
      <img class="mx-auto mb-10" src="/svg/hand.svg" />
      <p class="text-left laptop:text-center laptop:col-auto h-table:col-span-2" v-html="quoteRef"></p>
    </div>
  </div>
  <!-- 結語區塊 -->
  <div
    class="h-table:flex flex-wrap items-start justify-center pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-4 bg-white bg-about-writing bg-right-bottom bg-no-repeat middle-pc:bg-contain h-table:bg-auto-500 mobile:px-8 mobile:bg-contain"
  >
    <div
      class="middle-pc:w-7/12 laptop:w-5/12 h-table:w-10/12 text-left laptop:pb-0 pb-320px text-main-color-black animate__animated animate__delay-2s"
      :class="{ 'animate__fadeIn': block_black_isVisible }"
    >
      <p v-html="epilogueRef"></p>
    </div>
    <div class="middle-pc:w-3/12 h-table:w-5/12"></div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { useParallax, useIntersectionObserver } from '@vueuse/core'
import { aboutInfo } from '@/api/about'

const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const photo = ref(null)
const { tilt, roll, source } = useParallax(photo)
const block_black_target = ref(null)
const block_black_isVisible = ref(false)
const { stop } = useIntersectionObserver(
  block_black_target,
  ([{ isIntersecting }]) => {
    block_black_isVisible.value = isIntersecting
    if (isIntersecting) {
      stop()
    }
  }
)

// 設置文字資訊
const visualRef = ref("")
const sloganRef = ref("")
const philosophyRef = ref("")
const quoteRef = ref("")
const epilogueRef = ref("")

getAboutInfo();

async function getAboutInfo() {
  const res = await aboutInfo()
  visualRef.value = String(res.data.aboutInfo.visual.replace(/(\\r)*\\n/g, ''))
  sloganRef.value = String(res.data.aboutInfo.slogan.replace(/(\\r)*\\n/g, ''))
  philosophyRef.value = String(res.data.aboutInfo.philosophy.replace(/(\\r)*\\n/g, ''))
  quoteRef.value = String(res.data.aboutInfo.quote.replace(/(\\r)*\\n/g, ''))
  epilogueRef.value = String(res.data.aboutInfo.epilogue.replace(/(\\r)*\\n/g, ''))
}
</script>
