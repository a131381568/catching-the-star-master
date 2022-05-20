<template>
  <div class="border-main-color-light w-full text-center text-tiny tracking-wider text-main-color-light py-6"
    :class="{ 'border-t': !routManage }">Copyright © {{ thisYear }} STARGAZER. All rights reserved.</div>
</template>
<script setup lang="ts">
const route = useRoute()
const routManage = computed(() => route.meta.manage);
const thisYear = new Date().getFullYear();
</script>
