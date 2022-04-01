<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 瀏覽 md 區塊 -->
    <div
      class="h-table:w-10/12 bg-opacity-6 bg-white text-main-color-light laptop:p-20 p-10 mobile:p-8 middle-pc:mt-16 mt-8 md-container"
    >
      <singlePost />
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
import singlePost from '@/assets/md/single_post.md'
const date = ref("2022-03-15")
const tag = ref({ name: "科學家", catId: "scientist" })

// let text = `
// # 55555
// - 11111111111
// - 2222222222222
// - 33333333333333333333
// _888888888888_
// `
// const markdown = ref(text)

// const router = useRouter()
// console.log(router.options.routes)
</script>
