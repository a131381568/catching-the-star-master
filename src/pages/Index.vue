<template>
  <Header />
  <div
    class="absolute right-0 top-0 mx-auto h-screen w-full z-0 bg-[url(/img/home.png)] bg-right-bottom bg-no-repeat bg-cover lg:bg-contain animate__animated animate__fadeInRightBig"
    :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-3s': getFirstEnter === false }]"
  ></div>
  <div class="mx-auto h-screen w-full z-10">
    <div class="flex items-stretch h-full">
      <div class="flex-none w-1/12 h-16">
        <!-- This item will not grow -->
      </div>
      <div class="flex-grow w-auto h-auto text-white self-center">
        <h1
          class="font-serif text-9xl tracking-normal animate__animated animate__fadeInLeft"
          :class="[{ 'animate__delay-3s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
        >
          <span class="font-normal text-9xl text-sp-color-light tracking-normal">Catch</span>
          the stars
        </h1>
        <h4
          class="text-main-color-light mt-10 animate__animated animate__fadeIn"
          :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]"
        >誰能數得清天上的星星？誰能說出它們對世界的影響？——詹・湯姆遜</h4>
        <router-link
          class="btn draw meet mt-12 inline-block animate__animated animate__flipInX"
          :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-3s': getFirstEnter === false }]"
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
const store = useStore();
const route = useRoute()
const getFirstEnter = computed(() => store.get_firstEnter);
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