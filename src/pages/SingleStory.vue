<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 主視覺 -->
    <div
      ref="imgSizeRef"
      class="laptop:w-4/12 h-table:w-5/12 mobile:6/12 flex-shrink mt-10 animate__animated animate__fadeInLeftBig"
      :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
    >
      <div
        :style="[{ 'width': imgSizeWidth + 'px' }, { 'height': imgSizeWidth + 'px' }]"
        class="bg-[url(/img/story-bg-02.jpg)] rounded-full bg-cover laptop:ml-0 ml-auto mr-auto"
      ></div>
    </div>
    <!-- 瀏覽 md 區塊 -->
    <div
      class="laptop:w-6/12 h-table:w-10/12 w-full text-main-color-light mt-12 md-container animate__animated animate__fadeIn"
      :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]"
    >
      <div class="mb-14 text-4xl">故事內容</div>
      <singlePost />
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import singlePost from '@/assets/md/single_story.md'
const imgSizeRef = ref(null)
const imgSizeObj = reactive(useElementSize(imgSizeRef))
const imgSizeWidth = computed(() => {
  if (imgSizeObj) {
    return imgSizeObj.width * 9 / 12
  } else {
    return 200
  }
})
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);

</script>
