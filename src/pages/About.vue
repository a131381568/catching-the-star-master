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
        class="animate__animated animate__flipInX callout-box bg-main-color-light py-10 pl-10 pr-14 text-main-color-black font-bold mb-8 border-l-callout-box-boder border-sub-color-dark relative mobile:py-4 mobile:pl-4"
        :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
      >
        我們是「雲上的小貓」，致力於寫下故事、留下故事。
        <span
          class="text-sub-color-dark text-9xl font-serif font-light absolute -top-2 right-1 mobile:text-8xl"
        >”</span>
      </div>
      <div
        class="text-main-color-light animate__animated animate__fadeIn"
        :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]"
      >
        <p>
          人是被賦予豐富情感的動物，會笑、會哭、會憤怒、會感動，所以有溫度的故事是能夠觸動人心的，甚至能夠在心中種下一顆希望的種子，在未來成長為茁壯的大樹。
          <br />&nbsp;
          <br />正因凡走過必留下痕跡，可以是歷史？
          <br />也可以是虛構的童話？
          <br />不管它是什麼？
          <br />&nbsp;
          <br />總會能夠會帶給我們些什麼？
          <br />對吧？
          <br />&nbsp;
          <br />無論是虛無飄渺的疑問？還是膽戰心驚的恐懼？又或著肯定的勇氣？每個人都有故事，因為這是我們自己開啟的故事——。
        </p>
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
      <p class="text-left laptop:text-center laptop:col-auto h-table:col-span-2">
        「我和他就好像天上的星星，遠看好像距離很近，但實際上卻是相當遙遠的。」
        <br />&nbsp;
        <br />「這片夜空中，只有一顆星星在微弱的閃鑠著，好像很孤單一樣？但是我們每個人只要一抬頭就能看見它，
        <br />所以即使身在遠方，星星也能夠獨自努力發光了。」
        <br />&nbsp;
        <br />——《虎與龍》
      </p>
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
      <p>
        『打從地球誕生的那一刻起，天空就已經用這樣的姿態為我們在夜晚蓋上滿天星斗的布幕了。』
        <br />&nbsp;
        <br />在這宏觀的世界，世人們將星座和神話故事相互結合，把夜空中同一個區域的星星，分為一個個的星座，每一個星座都有屬於它們自己的故事，令人嚮往和好奇。
        <br />&nbsp;
        <br />而製造這浪漫的舞台，究竟是什麼構造？它們的由來又什麼？是否是我們能夠觸手可及的呢？
        <br />它們一直都存在我們的身旁，只是我們一直都沒注意到而已。
        <br />&nbsp;
        <br />
        <strong class="text-sp-color-light">這次讓我們來好好記下它們的存在的軌跡。</strong>
      </p>
    </div>
    <div class="middle-pc:w-3/12 h-table:w-5/12"></div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { useParallax, useIntersectionObserver } from '@vueuse/core'
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
</script>
