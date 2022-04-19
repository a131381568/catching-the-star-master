<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative">
      <!-- 標題區塊 -->
      <div class="w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto">
        <h1 class="text-white relative -left-2 -top-2 mobile:text-5xl w-3/4 mobile:w-full">新增觀星地點</h1>
        <router-link to="/board/stargazer/add"
          class="flex btn draw meet text-lg w-2/12 mobile:w-1/3 mobile:mt-6 h-12 btn text-center items-center p-0 justify-center pb-1">
          儲存新增
        </router-link>
      </div>
      <!-- 表單區塊 -->
      <div class="w-9/12 flex mobile:w-11/12 table-container mobile:m-auto justify-between">
        <Form ref="addPlaceForm" :validation-schema="verifyRules" v-slot="{ errors }" class="w-5/12">
          <!-- 地點名稱 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">地點名稱</h4>
            <Field name="placeNameRef" type="text"
              class="w-full h-8 block m-auto bg-transparent border-t-0 border-b border-x-0 text-middle px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light"
              :class="{ 'border-red-700 border-opacity-100': errors.placeNameRef }" v-model="placeName" />
            <span v-show="errors.placeNameRef" class="text-red-700 text-xs w-full h-5 block m-auto mt-2">{{
              errors.placeNameRef
            }}</span>
          </div>
          <!-- 地址說明 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">地址說明</h4>
            <Field name="placeDescriptionRef" type="text"
              class="w-full h-8 block m-auto bg-transparent border-t-0 border-b border-x-0 text-middle px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light"
              :class="{ 'border-red-700 border-opacity-100': errors.placeDescriptionRef }" v-model="placeDescription" />
            <span v-show="errors.placeDescriptionRef" class="text-red-700 text-xs w-full h-5 block m-auto mt-2">{{
              errors.placeDescriptionRef
            }}</span>
          </div>
          <!-- 地點介紹 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">地點介紹</h4>
            <Field name="placeIntroductionRef" type="text" as="textarea"
              class="w-full h-200px resize-none block m-auto bg-transparent border-t-0 border-b border-x-0 text-middle px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light"
              :class="{ 'border-red-700 border-opacity-100': errors.placeIntroductionRef }"
              v-model="placeIntroduction" />
            <span v-show="errors.placeIntroductionRef" class="text-red-700 text-xs w-full h-5 block m-auto mt-2">{{
              errors.placeIntroductionRef
            }}</span>
          </div>
          <!-- 地點經緯度 -->
          <div class="input-group mb-14">
            <div class="map-search-bar flex justify-between">
              <h4 class="text-main-color-light font-normal">地點經緯度</h4>
              <button class="w-24 h-9 bg-sub-color-light text-middle">地圖查詢</button>
            </div>
            <div
              class="relative place-lat-lon-container flex space-x-3 justify-between before:content-[','] before:block before:absolute before:-bottom-1 before:left-1/2-3px before:text-main-color-light before:opacity-70">
              <Field name="placeLatRef" type="text" placeholder="Latitude"
                class="w-full h-8 bg-transparent border-t-0 border-b border-x-0 text-middle px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light focus:placeholder-transparent"
                :class="{ 'border-red-700 border-opacity-100': errors.placeLatRef }" v-model="placeLat" />
              <Field name="placeLonRef" type="text" placeholder="Longitude"
                class="w-full h-8 bg-transparent border-t-0 border-b border-x-0 text-middle px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light focus:placeholder-transparent"
                :class="{ 'border-red-700 border-opacity-100': errors.placeLonRef }" v-model="placeLon" />
            </div>
            <div class="alert-message flex space-x-3 justify-between">
              <div :class="{ 'visible': errors.placeLatRef }" class="text-red-700 text-xs w-full h-5 block m-auto mt-2">
                {{
                  errors.placeLatRef
                }}</div>
              <div :class="{ 'visible': errors.placeLonRef }" class="text-red-700 text-xs w-full h-5 block m-auto mt-2">
                {{
                  errors.placeLonRef
                }}</div>
            </div>
          </div>
        </Form>
        <div class="w-5/12">
          <div class="h-52 w-full bg-slate-500 bg-default-upload-img bg-no-repeat bg-cover bg-center"></div>
          <div class="upload-bar flex justify-between my-7">
            <h4 class="text-main-color-light font-normal">地點圖片</h4>
            <button class="w-24 h-9 bg-sub-color-light text-middle">上傳圖片
              <input type="file" @change="updateFileAct($event)" multiple>
            </button>
          </div>
        </div>
      </div>
      <Footer class="absolute bottom-0 mobile:left-0" />
    </div>
  </div>
</template>
<script setup lang="ts">
import schema from '@/utils/vee-validate-schema'
import { Field, Form } from 'vee-validate';
import { stargazerList } from '@/api/stargazing'
import { StargazingArr, PageInfoPush } from '@/types/graphql/types'
import { updateFile } from '@/api/utils'
import { useDebounceFn } from '@vueuse/core'

// 輸入欄位綁定
const addPlaceForm = ref({
  validate: () => { return { valid: false } }
})

const placeName = ref("")
const placeDescription = ref("")
const placeIntroduction = ref("")
const placeLat = ref(null)  // 緯度
const placeLon = ref(null) // 經度
const placeImg = ref("")  // 緯度
const verifyRules = {
  placeNameRef: schema.required,
  placeDescriptionRef: schema.required,
  placeIntroductionRef: schema.required,
  placeLatRef: schema.required,
  placeLonRef: schema.required
}

// 取得路由
const route = useRoute()
const routeName = String(route.name)

// 宣告列表預設值
const actionPage = ref(1)
const stargazingEdges = ref<StargazingArr>([])
const stargazingPageInfo = ref<PageInfoPush>({
  hasNextPage: false,
  hasPreviousPage: false,
  start: 0,
  end: 0,
  totalPagi: 0
})

// 生命週期 --------------------------------------------------------------
onMounted(async () => {
  // 取得地圖列表資訊
  await getStargazerList(1)
});

// ======================= 函式 ==============================
async function getStargazerList(pagi: Number) {
  const res = await stargazerList(Number(pagi), 10, routeName)
  stargazingEdges.value = []
  setTimeout(() => {
    stargazingEdges.value = res.data.stargazingPagi.edges
    stargazingPageInfo.value = res.data.stargazingPagi.pageInfo
  }, 300);
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