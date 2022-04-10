<template>
  <Header />
  <div
    class="absolute right-0 top-0 mx-auto h-screen w-full z-0 bg-astrolabe bg-right-bottom bg-no-repeat bg-cover filter-bg-opacity-20 w-table:bg-contain animate__animated animate__fadeInRightBig w-table:filter-bg-opacity-50 laptop:filter-bg-opacity-none"
    :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-3s': getFirstEnter === false }]"
  ></div>
  <div class="mx-auto h-screen w-full z-10">
    <div class="flex items-stretch h-full">
      <div class="flex-none w-1/12 h-16">
        <!-- This item will not grow -->
      </div>
      <div class="flex-grow w-auto h-auto text-white self-center">
        <h1
          class="font-serif large-pc:text-9xl middle-pc:text-8xl tracking-normal animate__animated animate__fadeInLeft mobile:capitalize"
          :class="[{ 'animate__delay-3s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
        >
          <span
            class="font-normal large-pc:text-9xl middle-pc:text-8xl text-sp-color-light tracking-normal"
          >{{ pageTitle[0] }}</span>
          {{ pageTitle[1] }} {{ pageTitle[2] }}
        </h1>
        <h4
          class="text-main-color-light animate__animated animate__fadeIn large-pc:mt-10 mt-6 large-pc:text-2xl h-table:text-lg mobile:text-lg middle-pc:w-auto h-table:w-380px"
          :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]"
        >{{ pageSubTitle }}</h4>
        <router-link
          class="btn draw meet inline-block animate__animated animate__flipInX large-pc:mt-12 mt-8"
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
const pageTitle = computed(() => store.pageTitle.split(" "));
const pageSubTitle = computed(() => store.pageSubTitle);
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