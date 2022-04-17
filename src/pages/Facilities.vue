<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- <div class="w-10/12 mt-8 mb-14 bg-white">
      <input type="file" @change="updateFileAct($event)" multiple>
    </div> -->
    <!-- 小標題 -->
    <div class="w-10/12 mt-8 mb-14">
      <h2 class="text-main-color-light text-left animate__animated animate__fadeIn"
        :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
        推廣機構</h2>
    </div>
    <!-- post grid -->
    <div
      class="grid laptop:grid-cols-3 grid-cols-1 large-pc:gap-24 h-table:gap-10 gap-8 h-table:w-10/12 overflow-hidden laptop:pr-0 h-table:pr-36">
      <div class="group animate__animated animate__fadeInUp" :class="{ 'animate__delay-4s': getFirstEnter === true }"
        v-for="(val, key) in eduCategories" :key="key">
        <img
          class="object-cover h-130px w-full delay-75 duration-1000 border border-white border-opacity-0 group-hover:border-opacity-60 border-b-0"
          :src="String(val.facilities_image)" />
        <!-- card -->
        <div
          class="h-72 py-7 px-8 delay-75 duration-1000 bg-white group-hover:bg-opacity-0 border border-white border-opacity-0 group-hover:border-opacity-60 border-t-0"
          :class="[
            { 'bg-opacity-18': (key + 1) % 3 === 0 },
            { 'bg-opacity-12': (key + 3) % 3 === 1 },
            { 'bg-opacity-6': (key + 4) % 3 === 1 }
          ]">
          <!-- title -->
          <p class="text-3xl text-white truncate font-normal">{{ val.facilities_title }}</p>
          <!-- des -->
          <p class="text-main-color-light font-light mt-6 text-lg grid-des-box">{{ val.facilities_description }}</p>
          <!-- link -->
          <a class="mt-7 btn draw meet inline-block" :href="String(val.facilities_link)" target="_blank">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 小標題 -->
    <div class="w-10/12 mt-28 mb-0" ref="block_observatory_target">
      <h2 class="text-main-color-light text-left animate__animated animate__faster"
        :class="{ 'animate__fadeIn': block_observatory_target_isVisible }">天文台</h2>
    </div>
    <!-- 篩選列 -->
    <div class="w-10/12 mt-14 mb-8 inline-flex animate__animated animate__faster"
      :class="{ 'animate__fadeIn': block_observatory_target_isVisible }">
      <ul class="flex flex-wrap" v-if="observatoryCategories">
        <li v-for="(val, key) in observatoryCategories" :key="key">
          <div class="flex items-center mr-10 group">
            <input :id="String(val.observatory_category_id)" type="radio" name="radio" class="hidden"
              v-model="selectCat" :value="val.observatory_category_id" />
            <label :for="String(val.observatory_category_id)" :class="[
              'delay-75', 'duration-1000',
              'flex', 'items-center', 'cursor-pointer', 'text-2xl', 'group-hover:text-sp-color-light',
              { 'text-sub-color-light': val.observatory_category_id === selectCat },
              { 'text-main-color-light': val.observatory_category_id !== selectCat }
            ]">
              <span
                class="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink group-hover:bg-sp-color-light delay-75 duration-1000"
                :class="{ 'bg-sub-color-light': val.observatory_category_id === selectCat }"></span>
              {{ val.observatory_category_name }}
            </label>
          </div>
        </li>
      </ul>
    </div>
    <!-- 瀏覽 md 區塊 -->
    <div v-if="observatoryCategories"
      class="h-table:w-10/12 text-main-color-light md-container facilities-md-container animate__animated animate__delay-1s"
      :class="{ 'animate__fadeIn': block_observatory_target_isVisible }">
      <v-md-preview v-for="(val, key) in observatoryCategories" :key="key"
        class="animate__animated animate__fadeIn animate__faster" :text="val.observatory_post_content"
        v-show="selectCat === val.observatory_category_id"></v-md-preview>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { facilitiesData } from '@/api/facilities'
import { updateFile } from '@/api/utils'
import { FacilitiesArr, ObservatoriesArr } from '@/types/graphql/types'
// 取得路由
const route = useRoute()
const routeName = String(route.name)
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);

const block_observatory_target = ref(null)
const block_observatory_target_isVisible = ref(false)
const { stop } = useIntersectionObserver(
  block_observatory_target,
  ([{ isIntersecting }]) => {
    block_observatory_target_isVisible.value = isIntersecting
    if (isIntersecting) {
      stop()
    }
  }
)

// =============== 載入設施+天文台資訊 ===============

const selectCat = ref<string>("")
const observatoryCategories = ref<ObservatoriesArr>([])
const eduCategories = ref<FacilitiesArr>([])

getFacilitiesListData()

async function getFacilitiesListData() {
  const res = await facilitiesData(routeName)
  if (res && res.data.facilitiesList && res.data.observatoriesList) {
    eduCategories.value = res.data.facilitiesList
    observatoryCategories.value = res.data.observatoriesList
    selectCat.value = String(observatoryCategories.value[0].observatory_category_id)
  }
}

// 測試上傳檔案
const localFile = ref(null)
async function updateFileAct(event: Event) {
  // event: HTMLInputElement & { target: HTMLInputElement }
  const target = (<HTMLInputElement>event.target)
  let fileList = target.files
  if (fileList !== null) {
    const res = await updateFile(fileList[0], routeName)
    localFile.value = res.data.singleUpload
  }
  console.log(localFile.value)
}
</script>