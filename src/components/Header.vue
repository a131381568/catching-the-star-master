<template>
  <!-- Container -->
  <div class="fixed flex flex-col items-center justify-center mt-32 z-0">
    <div class="flex flex-col">
      <!-- Navbar -->
      <nav
        class="fixed flex justify-between py-4 w-full top-0 left-0 right-0 z-50"
      >
        <!-- Logo Container -->
        <div class="flex items-center">
          <!-- Logo -->
          <a class="cursor-pointer">
            <svg
              class="logo"
              viewBox="0 0 128 128"
              width="24"
              height="24"
              data-v-5f26462c=""
            >
              <path
                fill="#42b883"
                d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                data-v-5f26462c=""
              ></path>
              <path
                fill="#35495e"
                d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                data-v-5f26462c=""
              ></path>
            </svg>
          </a>
        </div>
        <!-- Icon Menu Section -->
        <div class="flex items-end space-x-5">
          <div
            class="bars cursor-pointer"
            :class="{ active: modal === true }"
            @click.prevent="toggleModal"
          >
            <div class="top-bar"></div>
            <div class="middle-bar"></div>
            <div class="bottom-bar"></div>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <div
    id="modal"
    v-show="modal"
    class="
      modal-bg
      transition-opacity
      duration-500
      fixed
      w-full
      h-full
      left-0
      top-0
      z-10
      overflow-auto
    "
    :class="[
      { 'opacity-0': modal === false },
      { 'opacity-100': modal === true },
      { 'z-40': modal === true },
    ]"
  >
    <div
      class="w-full h-full modal-content relative m-auto bg-gray-100 shadow-lg"
    >
      <div class="p-4">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="p-4 text-white bg-gray-500">
        <h3>Modal Footer</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

// 宣告 data 欄位
const modal = ref(false);
const modalRef = ref(null);

// 綁 methods
function toggleModal() {
  modal.value = !modal.value;
}

// =========================================

// 生命週期

console.log("setup");

onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {
  console.log("onUpdated");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});
onErrorCaptured(() => {
  console.log("onErrorCaptured");
});

onActivated(() => {
  console.log("onActivated");
});
</script>

<style scoped>
.bars {
  font-size: 1em;
  display: inline-block;
}
.bars > div {
  width: 1.25em;
  height: 0.125em;
  margin-bottom: 0.25em;
  transition: all 300ms ease-in-out;
}
.bars.active .top-bar {
  transform: translateY(0.35em) rotate(225deg);
}
.bars.active .middle-bar {
  opacity: 0;
  transform: scale(0);
}
.bars.active .bottom-bar {
  transform: translateY(-0.4em) rotate(-225deg);
}

.bars > div {
  background: #6cf7cb;
}
</style>