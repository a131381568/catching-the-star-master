<template>
  <div class="w-10/12 mt-14 -ml-2">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a href="#" class="block py-0 pr-3 ml-0 text-main-color-light mt-1 opacity-50">
            <span class="sr-only">Previous</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#"
            class="w-6 h-6 inline-flex items-center justify-center text-main-color-dark text-middle rounded-full bg-main-color-light pb-2px mx-1">1</a>
        </li>
        <li>
          <a href="#"
            class="w-6 h-6 inline-flex items-center justify-center text-main-color-light text-middle rounded-full pb-2px mx-1">2</a>
        </li>
        <li>
          <a href="#"
            class="w-6 h-6 inline-flex items-center justify-center text-main-color-light text-middle rounded-full pb-2px mx-1">3</a>
        </li>
        <li>
          <a href="#"
            class="w-6 h-6 inline-flex items-center justify-center text-main-color-light text-middle rounded-full pb-2px mx-1">4</a>
        </li>
        <li>
          <a href="#" class="block py-0 px-3 text-main-color-light mt-1">
            <span class="sr-only">Next</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
      </ul>
      <div class="text-main-color-light">{{ props.hasNextPage }},{{ props.hasPreviousPage }}</div>
    </nav>
  </div>

</template>
<script setup lang="ts">
const route = useRoute()
const props = defineProps({
  hasNextPage: Boolean,
  hasPreviousPage: Boolean,
  totalPagi: Number,
  actionPage: Number
})
</script>
