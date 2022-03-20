<template>
  <button @click="modal = true">Open Modal</button>
  <div class="ml-2 relative inline-block">
    <button @click="dropdown = true">Open Dropdown</button>
    <div v-if="dropdown" ref="dropdownRef" class="dropdown-inner">
      Click outside of the dropdown to close it.
    </div>
  </div>

  <!-- 88888 -->
  <!-- <div v-if="modal" ref="modalRef" class="modal fixed m-0 p-0 !w-full !h-full">
    <div class="inner relative">
      <button class="button small" title="Close" @click="modal = false">
        𝖷
      </button>
      <p class="heading">Demo Modal</p>
      <p>Click outside of the modal to close it.</p>
    </div>
  </div> -->
  <!-- 88888 -->

  <div
    id="modal"
    v-if="modal"
    ref="modalRef"
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
      { 'z-50': modal === true },
    ]"
  >
    <div
      class="w-full h-full modal-content relative m-auto bg-gray-100 shadow-lg"
    >
      <div class="p-4 bg-gray-700 text-white">
        <span
          @click="modal = false"
          class="
            closeBtn
            float-right
            text-lg
            font-bold
            hover:text-gray-500
            no-underline
            cursor-pointer
          "
          >&times;</span
        >
        <h2>Modal Header</h2>
      </div>
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
onClickOutside(modalRef, (event) => {
  console.log(event);
  modal.value = false;
});

const dropdown = ref(false);
const dropdownRef = ref(null);
onClickOutside(dropdownRef, (event) => {
  console.log(event);
  dropdown.value = false;
});

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
/* .modal-bg {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -9999;
} */
</style>