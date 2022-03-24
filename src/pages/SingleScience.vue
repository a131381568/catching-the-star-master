<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-32 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
  </div>
  <div></div>
  <!-- 引言 -->
  <div
    class="md:flex flex-wrap items-start justify-center py-24 px-4 bg-main-color-black text-main-color-light"
  >
    <div class="w-10/12 text-center">
      <img class="mx-auto mb-10" src="/svg/hand.svg" />

      <p>
        「我和他就好像天上的星星，遠看好像距離很近，但實際上卻是相當遙遠的。」
        <br />&nbsp;
        <br />「這片夜空中，只有一顆星星在微弱的閃鑠著，好像很孤單一樣？但是我們每個人只要一抬頭就能看見它，
        <br />所以即使身在遠方，星星也能夠獨自努力發光了。」
        <br />&nbsp;
        <br />——《虎與龍》
      </p>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
// "@kangc/v-md-editor"
// let text = `
// # 55555
// - 11111111111
// - 2222222222222
// - 33333333333333333333
// _888888888888_
// `
// const markdown = ref(text)
// <v-md-preview :text="markdown"></v-md-preview>

const router = useRouter()

console.log(router.options.routes)


</script>
