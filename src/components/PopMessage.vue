<template>
  <div
    class="admin-stargazer-modal bg-black bg-opacity-50 w-full h-full fixed left-0 top-0 flex items-center justify-center animate__animated"
    :class="[{ animate__fadeOut: !modal }, { animate__fadeIn: modal }, { 'z-9999': modalInner }, { '-z-50': !modalInner }]">
    <div class="w-96 h-52 modal-inner bg-white grid grid-rows-4">
      <div class="pop-msg-header w-full bg-main-color-light flex items-center justify-between relative px-4">
        <h6 class="text-middle">通知視窗</h6>
        <button class="button small text-white cursor-pointer group" title="close" @click.prevent="popBtnCheck(false)">
          <span class="w-12 h-12 block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
              <line class="group-hover:stroke-sp-color-light transition-all duration-700" x1="15" y1="15" x2="25"
                y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
              <line class="group-hover:stroke-sp-color-light transition-all duration-700" x1="25" y1="15" x2="15"
                y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
            </svg>
          </span>
        </button>
      </div>
      <div class="pop-msg-content w-full text-middle row-span-2 p-4 border-b border-main-color-light">{{ modalContent }}
      </div>
      <div class="pop-msg-footer w-full text-middle flex content-center">
        <button @click.prevent="popBtnCheck(true)" v-show="modalConfirmStyle"
          class="w-1/2 border-r border-main-color-light hover:bg-sp-color-light transition-all duration-700">確定</button>
        <button @click.prevent="popBtnCheck(false)" v-show="modalConfirmStyle"
          class="w-1/2 hover:bg-main-color-dark hover:text-main-color-light transition-all duration-700">取消</button>
        <button @click.prevent="popBtnCheck(false)" v-show="!modalConfirmStyle"
          class="w-full hover:bg-main-color-dark hover:text-main-color-light transition-all duration-700">確定</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const store = useStore();
// const route = useRoute()
const modalInner = computed(() => store.popMsgStateInner);
const modal = computed(() => store.popMsgState);
const modalContent = computed(() => store.popMsgContent);
const modalConfirmStyle = computed(() => store.get_popMsgConfirm);

// 生命週期 --------------------------------------------------------------
// onMounted(() => {
//   setTimeout(() => {
//     openModal()
//   }, 1000);
// });

const emit = defineEmits<{
  (e: 'popBtnCheck'): void
}>()

// 向上回傳點擊視線
function popBtnCheck(val: boolean) {
  emit("popBtnCheck")
  if (val === true) {
    store.popMsgCheckTrun()
  } else {
    store.closePopMsg()
  }
}
</script>
