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



let testTitle = ref(`## 哈伯在1926年針對星系的外觀——

將星系大致分為三類：
- 橢圓星系
- 透鏡星系
- 螺旋星系

<br />

第四類則是呈現不規則形狀的不規則星系。

<br />

此分類法稱為哈伯序列，由於其圖表看起來很像音叉，所以也稱為哈伯音叉圖。

<br />

在哈伯序列的左側為橢圓星系，依照扁平程度予以分類，從差不多成球狀的星系(E0)到最扁平的星系(E7)，皆未有圓盤部分。數字部分的算法為10(1-(b/a))，其中a、b為橢圓的半長軸及半短軸。

<br />

哈伯序列中間的為透鏡狀星系(S0)，這類星系沒有旋臂，只有中央的核球及扁平的圓盤。

<br />

哈伯序列最右邊的為螺旋星系，又分成上下兩個部分。上半部為典型的螺旋星系，下半部的星系除了有螺旋結構外，星系中央還有明顯的棒狀結構，故又稱為棒旋星系。螺旋星系依據旋臂的緊繞程度，從緊到鬆依序為a、b、c，甚至還有d及e。

<br />

不規則星系並沒有列在哈伯序列裡，主要是一些外觀比較奇特的星系。

<br />

根據研究，科學家們認為，在宇宙的演化過程中，螺旋星系或是不規則星系會發生大規模碰撞，最後形成橢圓星系。

> 也就是說——螺旋星系和不規則星系為早期的天體，而橢圓星系屬於晚期的天體。

螺旋星系的圓盤部分會往相同方向旋轉，同時在盤面及旋臂的地方，恆星形成較為活躍；而橢圓星系不會朝相同方向旋轉，各恆星的運動有很強的隨機傾向，而且也因為屬於老年天體，不容易有恆星的誕生。

<br />

<img src="https://i.imgur.com/EQ7LJMd.png" style="max-width: 100%" />

(哈伯序列，Credit：The original uploader was Cosmo0 at English Wikipedia, Public domain, via Wikimedia Commons)`)
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
