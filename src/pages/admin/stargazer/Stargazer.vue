<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32">
    <!-- 標題區塊 -->
    <div class="w-10/12 mb-16 mt-3 animate__animated animate__fadeIn animate__delay-1s">
      <h4 class="uppercase text-main-color-light mb-4">{{ routeName }}</h4>
      <h1 class="text-white relative -left-2 mobile:text-5xl">觀星地點列表</h1>
    </div>
    <div class="w-10/12">
      <h2 class="text-white">
        {{ routeName }}
      </h2>
    </div>
  </div>

  <Footer class="absolute left-0 bottom-0 screens-h-500:relative animate__animated animate__fadeIn"
    :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]" />
</template>
<script setup lang="ts">
import { loginAuthentication, getSelfInfo } from '@/api/utils'
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
// 取得路由
const route = useRoute()
const routeName = String(route.name)

</script>