<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 返回按鈕 -->
    <div class="w-10/12">
      <!-- link -->
      <router-link to="/" class="btn draw meet inline-block">
        <span>返回首頁</span>
      </router-link>
    </div>
  </div>
  <!-- OOPS BG -->
  <div class="w-full text-right inline-block p-10">
    <div
      class="font-serif text-main-color-light opacity-30"
      style="font-size: 40vh;line-height: 40vh;min-height: 310px;"
    >OOPS!</div>
  </div>
  <Footer />
</template>

