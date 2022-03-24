<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-32 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 瀏覽 md 區塊 -->
    <div class="w-10/12 bg-opacity-6 bg-white text-main-color-light p-20 mt-16">
      <singlePost />
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">

import singlePost from '@/assets/md/single_post.md'

let text = `
# 55555
- 11111111111
- 2222222222222
- 33333333333333333333
_888888888888_
`
const markdown = ref(text)


const router = useRouter()

console.log(router.options.routes)


</script>
