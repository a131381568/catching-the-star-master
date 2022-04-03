<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32"
  >
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 返回按鈕 -->
    <div class="w-10/12">
      <!-- link -->
      <router-link
        to="/"
        class="btn draw meet inline-block animate__animated animate__flipInX"
        :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
      >
        <span>返回首頁</span>
      </router-link>
    </div>
  </div>
  <!-- OOPS BG -->
  <div
    class="w-full text-right inline-block p-10 oops-before mobile:p-4 absolute left-0 bottom-24 screens-h-500:relative animate__animated animate__fadeIn"
    :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
  >
    <div class="font-serif text-main-color-light opacity-30 inline-block text-20vw">OOPS!</div>
  </div>
  <Footer
    class="absolute left-0 bottom-0 screens-h-500:relative animate__animated animate__fadeIn"
    :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]"
  />
</template>
<script setup lang="ts">
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
</script>