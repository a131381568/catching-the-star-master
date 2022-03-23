<template>
  <div class="w-10/12 mb-16 mt-3">
    <h4 class="uppercase text-main-color-light mb-4">{{ pageSubTitle }}</h4>
    <h1 class="text-white relative -left-2">{{ pageTitle }}</h1>
  </div>
</template>
<script setup lang="ts">
const store = useStore();
const pageTitle = computed(() => store.pageTitle);
const pageSubTitle = computed(() => store.pageSubTitle);
store.setTitleInfo();
</script>
