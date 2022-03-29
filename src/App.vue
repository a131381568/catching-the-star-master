<template>
  <div
    ref="el"
    :header-data="arrivedStateVal"
    class="app-inner relative overflow-y overflow-x-hidden"
  >
    <router-view></router-view>
    <div class="stars-wrapper -z-1 fixed w-screen h-screen overflow-hidden left-0 top-0">
      <svg
        v-for="n in 3"
        :key="n"
        class="stars top-0 left-0 right-0 bottom-0 absolute fill-white"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <circle
          v-for="c in 200"
          :key="c"
          class="star"
          :cx="Math.round(Math.random() * 10000) / 100 + '%'"
          :cy="Math.round(Math.random() * 10000) / 100 + '%'"
          :r="Math.round((Math.random() + 0.5) * 10) / 10"
        />
      </svg>
      <svg class="extras" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stop-color="rgba(255,255,255,.8)" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <g transform="rotate(-135)">
          <ellipse class="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2" />
        </g>
        <g transform="rotate(20)">
          <ellipse
            class="comet comet-b"
            fill="url(#comet-gradient)"
            cx="100%"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>
        <g transform="rotate(300)">
          <ellipse class="comet comet-c" fill="url(#comet-gradient)" cy="100%" rx="150" ry="2" />
        </g>
      </svg>
    </div>
  </div>
  <Loading v-show="getLoading === true"></Loading>
  <!-- <Enter></Enter> -->
</template>
<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import Loading from './components/Loading.vue'
const store = useStore();
const el = ref<HTMLElement | null>(null)
const { arrivedState } = useScroll(el) // , { throttle: 300 }
const arrivedStateVal = computed(() => {
  store.updateHeaderState(arrivedState.top);
  return arrivedState.top
})

const getLoading = computed(() => store.get_loading);

//---------------------------------------------
</script>