<template>
  <div
    class="w-10/12 mb-16 mt-3 animate__animated animate__fadeIn"
    :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"
  >
    <h4 class="uppercase text-main-color-light mb-4">{{ pageSubTitle }}</h4>
    <h1 class="text-white relative -left-2 mobile:text-5xl">{{ pageTitle }}</h1>
  </div>
</template>
<script setup lang="ts">
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const pageTitle = computed(() => store.pageTitle);
const pageSubTitle = computed(() => store.pageSubTitle);
store.setTitleInfo();
</script>
