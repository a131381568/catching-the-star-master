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
import { getSinglePostById } from '@/api/science'
// import { markContent } from '@/api/user'
import singlePost from '@/assets/md/single_post.md'
console.log(singlePost)
const date = ref("2022-03-15")
const tag = ref({ name: "科學家", catId: "scientist" })
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);



let testTitle = ref("")
// async function testPost() {
//   let res = await markContent()
//   let str = res.data.data.getSinglePost.content
//   let newstr = str.replace(/\\\n|\\n|\n/g, "\n");
//   newstr = newstr.replace(/<br \/>/, "")
//   testTitle.value = newstr
// }
// testPost()

const route = useRoute();
const getSid = computed(() => Number(route.params.sid));

onMounted(async () => {
  const res = await getSinglePostById(getSid.value)
  console.log(res)
  testTitle.value = res.data.getSinglePost.content
});



</script>
