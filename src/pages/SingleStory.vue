<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-32 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 主視覺 -->
    <div class="lg:w-4/12 flex-shrink mt-10">
      <div class="h-480px w-480px bg-[url(/img/story-bg-02.jpg)] rounded-full"></div>
    </div>
    <!-- 瀏覽 md 區塊 -->
    <div class="w-6/12 text-main-color-light mt-12 md-container">
      <div class="mb-14 text-4xl">故事內容</div>
      <singlePost />
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import singlePost from '@/assets/md/single_story.md'
//
</script>
