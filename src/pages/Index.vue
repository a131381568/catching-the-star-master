<template>
  <Header />
  <div
    class="
      mx-auto
      h-screen
      w-full
      z-10
      bg-[url(/img/home.png)] bg-right-bottom bg-no-repeat bg-cover
      lg:bg-contain
    "
  >
    <div class="flex">
      <div class="flex-none w-16 h-16">
        <!-- This item will not grow -->
      </div>
      <div class="flex-grow h-16 text-white">
        <h1 class="font-serif">Catch the stars</h1>
        <h2>誰能數得清天上的星星？誰能說出它們對世界的影響？----詹・湯姆遜</h2>
        <button>Read More</button>
      </div>
      <div class="flex-none w-16 h-16">
        <!-- This item will not grow -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute();

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: "og:title",
      content: route.meta.title,
    },
    {
      name: "twitter:title",
      content: route.meta.title,
    },
  ],
});

const VERSION = import.meta.env.VITE_APP_VERSION;
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined;
const thisYear = new Date().getFullYear();
</script>
<style>
.compass_circle {
  position: fixed;
  right: -61vh;
  height: 130vh;
  top: -15vh;
  z-index: 0;
}

.compass {
  position: fixed;
  z-index: 1;
  right: -462px;
  height: 930px;
  top: 23px;
  transform: rotate(166deg);
}

polygon {
  fill: #ccc;
}
</style>