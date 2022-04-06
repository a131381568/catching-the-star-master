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
        class="bg-story-featured rounded-full bg-cover laptop:ml-0 ml-auto mr-auto"
      ></div>
    </div>
    <!-- 瀏覽 md 區塊 -->
    <div
      class="laptop:w-6/12 h-table:w-10/12 w-full text-main-color-light mt-12 md-container animate__animated animate__fadeIn"
      :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]"
    >
      <div class="mb-14 text-4xl">故事內容</div>
      <v-md-preview class="markdown-body" :text="testTitle" height="400px"></v-md-preview>
      <!-- <singlePost /> -->
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

let testTitle = ref(`> 冬季的夜晚有一年之中最燦爛的星空

在東北方可以找到兩顆很靠近的一等星，往西南方延伸下來幾個星點，構成一個「北」字形，這就是雙子座。

<br />

### 在神話故事中

他們是由斯巴達王妃莉妲所生一對可愛的雙胞胎。不過他們的父親卻不同，哥哥波勒克斯(Pollux)是天神宙斯之子，而弟弟卡斯特(Castor)卻是凡人巴斯特王的後代。

<br />

雖然有著神與人不同的血源，使得哥哥擁有長生不死之身，弟弟只有有限的壽命，但兩人從出生以來就如膠似漆，鮮少分離，遇到困難都能互助合作，是一對超級好兄弟。

<br />

哥哥波勒克斯的拳法精湛，弟弟卡斯特善於駕車，兩人都勇於冒險，曾經參與過著名的亞戈號遠征奪取金羊毛的行動。不幸的是，某年希臘遭受一頭巨大的山豬肆虐攻擊，他們與同為雙胞胎的堂兄弟凱倫烏斯與伊達斯共同接受希臘王子的請託追捕大山豬。

<br />

在費盡千辛萬苦成功捕獲山豬之後，他們竟然遭受到想搶功勞的堂兄弟構陷而受到重傷。波勒克斯因為擁有天神血統而免於一死，但卡斯特卻一命嗚呼。波勒克斯傷痛欲絕，遂請求父神宙斯，將自己的不死之身分一半給弟弟，代價是自己有一半時間要留在冥府，另一半時間才能和弟弟一起在人間生活，宙斯被兄弟倆的真情感動，不但完成哥哥的心願，還把他們昇到天空成為星座，讓世人都能見證他們珍貴的手足情誼。`)

onMounted(() => {
  console.log(JSON.stringify(testTitle.value))
});

</script>
