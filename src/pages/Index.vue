<template>
  <Header />
  <div
    class="absolute right-0 top-0 mx-auto h-screen w-full z-0 bg-[url(/img/home.png)] bg-right-bottom bg-no-repeat bg-cover lg:bg-contain animate__animated animate__fadeInRightBig animate__delay-5s"
  ></div>
  <div class="mx-auto h-screen w-full z-10">
    <div class="flex items-stretch h-full">
      <div class="flex-none w-1/12 h-16">
        <!-- This item will not grow -->
      </div>
      <div class="flex-grow w-auto h-auto text-white self-center">
        <h1
          class="font-serif text-9xl tracking-normal animate__animated animate__fadeInLeft animate__delay-3s"
        >
          <span class="font-normal text-9xl text-sp-color-light tracking-normal">Catch</span>
          the stars
        </h1>
        <h4
          class="text-main-color-light mt-10 animate__animated animate__fadeIn animate__delay-4s"
        >誰能數得清天上的星星？誰能說出它們對世界的影響？——詹・湯姆遜</h4>
        <router-link
          class="btn draw meet mt-12 inline-block animate__animated animate__flipInX animate__delay-5s"
          to="/science"
        >
          <span>Read More</span>
        </router-link>
      </div>
      <div class="flex-none w-1/12 h-16">
        <!-- This item will not grow -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute()

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