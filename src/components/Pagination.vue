<template>
  <div v-show="!barShow && totalPagi > 1" class="w-10/12 mt-14 -ml-2 animate__animated animate__fadeIn mobile:m-auto">
    <nav aria-label="Page navigation">
      <ul class="inline-flex items-center -space-x-px">
        <li 
        :class="{ 'pointer-events-none opacity-50': !hasPreviousPage }"
        @click="actionPreviousPagi()">
          <a class="cursor-pointer block py-0 pr-3 ml-0 text-main-color-light mt-1">
            <span class="sr-only">Previous</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
        <li
          v-for="index in totalPagi" :key="index" :class="{ 'pointer-events-none': actionPage === index }"
          @click="actionSelectPagi(index)">
          <a
            class="transition-all duration-700 cursor-pointer w-6 h-6 inline-flex items-center justify-center
          text-main-color-light text-middle rounded-full pl-2px pb-2px mx-1 hover:text-main-color-dark hover:bg-main-color-light font-semibold"
            :class="{ '!text-main-color-dark bg-main-color-light': actionPage === index }">
            {{ index }}</a>
        </li>
        <li :class="{ 'pointer-events-none opacity-50': !hasNextPage }" @click="actionNextPagi()">
          <a class="cursor-pointer block py-0 px-3 text-main-color-light mt-1">
            <span class="sr-only">Next</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
// const route = useRoute()
const props = defineProps({
  hasNextPage: {
    type: Boolean,
    default: false
  },
  hasPreviousPage: {
    type: Boolean,
    default: false
  },
  totalPagi: {
    type: Number,
    default: 1
  },
  actionPage: {
    type: Number,
    default: 1
  }
})
const barShow = ref(false)
const emit = defineEmits<{
  (e: 'selectPagi', pagi: number): number
}>()
function actionPreviousPagi() {
  if (props.actionPage) {
    emit("selectPagi", props.actionPage - 1)
    setDelyAnimate()
  }
}
function actionNextPagi() {
  if (props.actionPage) {
    emit("selectPagi", props.actionPage + 1)
    setDelyAnimate()
  }
}
function actionSelectPagi(pagi: number) {
  emit("selectPagi", pagi)
  setDelyAnimate()
}
function setDelyAnimate() {
  const origin = document.querySelector(".app-inner")
  if (origin) {
    origin.scrollTop = 0
  }
  barShow.value = true
  setTimeout(() => {
    barShow.value = false
  }, 600);
}
</script>
