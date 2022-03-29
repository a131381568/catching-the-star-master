<template>
  <div
    v-show="getLoading"
    class="bg-main-color-dark w-screen h-screen flex items-stretch justify-center fixed top-0 left-0 z-10001 animate__animated animate__fadeInRight animate__faster"
  ></div>
  <div
    v-show="!getLoading"
    class="bg-main-color-dark w-screen h-screen flex items-stretch justify-center fixed top-0 left-0 z-10001 animate__animated animate__fadeOutLeft animate__delay-0.7s"
  ></div>
</template>
<script setup lang="ts">
const store = useStore();
const getLoading = computed(() => store.get_loading);
</script>
