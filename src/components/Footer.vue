<template>
  <div
    class="border-t border-main-color-light w-full text-center text-tiny tracking-wider text-main-color-light py-6"
  >Copyright © {{ thisYear }} STARGAZER. All rights reserved.</div>
</template>
<script setup lang="ts">
const thisYear = new Date().getFullYear();
</script>
