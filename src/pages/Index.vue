<template>
  <Header />
  <div class="relative py-8">
    <div
      class="
        absolute
        inset-0
        bg-[url(/img/grid.svg)] bg-top
        [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]
      "
    ></div>
    <div
      class="
        container
        relative
        max-w-2xl
        mx-auto
        bg-white
        shadow-xl shadow-slate-700/10
        ring-1 ring-gray-900/5
      "
    >
      <h1>Catch the stars</h1>
      <h2>誰能數得清天上的星星？誰能說出它們對世界的影響？----詹・湯姆遜</h2>
      <button>Read More</button>
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
