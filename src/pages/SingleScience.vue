<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 瀏覽 md 區塊 -->
    <div
      class="animate__animated animate__fadeIn h-table:w-10/12 bg-opacity-6 bg-white text-main-color-light laptop:p-20 p-10 mobile:p-8 middle-pc:mt-16 mt-8 md-container"
      :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
    >
      <v-md-preview class="markdown-body" :text="testTitle" height="400px"></v-md-preview>
      <!-- <singlePost /> -->
    </div>
    <div class="h-table:w-10/12 h-table:mt-8 mt-5">
      <span class="text-main-color-light text-tiny">{{ date }},</span>
      <router-link
        class="text-sub-color-light text-tiny"
        :to="'/archive/' + tag.catId"
      >{{ tag.name }}</router-link>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { markContent } from '@/api/user'
import singlePost from '@/assets/md/single_post.md'
console.log(singlePost)
const date = ref("2022-03-15")
const tag = ref({ name: "科學家", catId: "scientist" })
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);



let testTitle = ref(`## 曆法相關

> 干支週期又稱甲子週期——

中國古代曆法中將干支週期用於紀日，也用於紀年、紀月、紀時。

<br />

以10個天干的甲、乙、丙、丁、戊、己、庚、辛、壬、癸，和12個地支的子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。天干在前地支在後兩兩依序互相配合，成為60干支。（甲子、乙酉、……甲戌、乙亥、……癸亥）

<br />

如干支紀日法，把60個干支配合在日子上，每日1名循環不斷，由甲骨文研究發現，自殷代以來已有完整的干支紀日系統，計有三千餘年不斷的歷史，是世界上最悠久的紀日法。干支在歷史家考證年、月、日上，佔有很重要的地位，因此中國古曆，亦稱為陰陽甲子三合曆。`)

// async function testPost() {
//   let res = await markContent()
//   let str = res.data.data.getSinglePost.content
//   let newstr = str.replace(/\\\n|\\n|\n/g, "\n");
//   newstr = newstr.replace(/<br \/>/, "")
//   testTitle.value = newstr
// }
// testPost()

onMounted(() => {
  console.log(JSON.stringify(testTitle.value))
});


</script>
