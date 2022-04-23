<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative">
      <!-- 標題區塊 -->
      <div class="w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto">
        <h1 class="text-white relative -left-2 -top-2 mobile:text-5xl w-3/4 mobile:w-full">新增觀星地點</h1>
        <button @click.prevent="actionAddPlace"
          class="flex btn draw meet text-lg w-2/12 mobile:w-1/3 mobile:mt-6 h-12 btn text-center items-center p-0 justify-center">
          儲存新增
        </button>
      </div>
      <!-- 表單區塊 -->
      <Form ref="addPlaceForm" :validation-schema="verifyRules" v-slot="{ errors }"
        class="w-9/12 flex mobile:w-11/12 table-container mobile:m-auto justify-between">
        <div class="w-5/12">
          <!-- 地點名稱 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">地點名稱</h4>
            <Field name="placeNameRef" type="text"
              class="w-full h-8 block m-auto bg-transparent border-t-0 border-b border-x-0 text-lg px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.placeNameRef }" v-model="placeName" />
            <span v-show="errors.placeNameRef" class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
              errors.placeNameRef
            }}</span>
          </div>
          <!-- 地址說明 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">地址說明</h4>
            <Field name="placeDescriptionRef" type="text"
              class="w-full h-8 block m-auto bg-transparent border-t-0 border-b border-x-0 text-lg px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.placeDescriptionRef }"
              v-model="placeDescription" />
            <span v-show="errors.placeDescriptionRef" class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
              errors.placeDescriptionRef
            }}</span>
          </div>
          <!-- 地點介紹 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">地點介紹</h4>
            <Field name="placeIntroductionRef" type="text" as="textarea"
              class="w-full h-200px resize-none block m-auto bg-transparent border-t-0 border-b border-x-0 text-lg px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.placeIntroductionRef }"
              v-model="placeIntroduction" />
            <span v-show="errors.placeIntroductionRef"
              class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                errors.placeIntroductionRef
              }}</span>
          </div>
          <!-- 地點經緯度 -->
          <div class="input-group mb-14">
            <div class="map-search-bar flex justify-between">
              <h4 class="text-main-color-light font-normal">地點經緯度</h4>
              <button class="admin-sbtn" @click.prevent="openModal">地圖查詢</button>
            </div>
            <div
              class="relative place-lat-lon-container flex space-x-3 justify-between before:content-[','] before:block before:absolute before:-bottom-1 before:left-1/2-3px before:text-main-color-light before:opacity-70">
              <Field name="placeLatRef" type="text" placeholder="Latitude"
                class="w-full h-8 bg-transparent border-t-0 border-b border-x-0 text-middle px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light focus:placeholder-transparent"
                :class="{ 'border-sp-color-dark border-opacity-100': errors.placeLatRef }" v-model="placeLat" />
              <Field name="placeLonRef" type="text" placeholder="Longitude"
                class="w-full h-8 bg-transparent border-t-0 border-b border-x-0 text-middle px-0 py-7 border-main-color-light border-opacity-30 focus:outline-0 focus:ring-0 focus:border-opacity-70 focus:border-white text-main-color-light focus:placeholder-transparent"
                :class="{ 'border-sp-color-dark border-opacity-100': errors.placeLonRef }" v-model="placeLon" />
            </div>
            <div class="alert-message flex space-x-3 justify-between">
              <div :class="{ 'visible': errors.placeLatRef }"
                class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">
                {{
                  errors.placeLatRef
                }}</div>
              <div :class="{ 'visible': errors.placeLonRef }"
                class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">
                {{
                  errors.placeLonRef
                }}</div>
            </div>
          </div>
        </div>
        <div class="w-5/12">
          <div class="animate__animated h-52 w-full bg-no-repeat bg-cover bg-center "
            :style="{ 'background-image': 'url(' + uploadImgPath + ')' }"
            :class="[{ 'animate__fadeIn': localBgOpacity }, { 'animate__fadeOut': !localBgOpacity }]">
          </div>
          <div class="upload-bar flex justify-between mt-7 mb-1">
            <h4 class="text-main-color-light font-normal">地點圖片</h4>
            <label class="admin-sbtn relative flex items-center justify-center">上傳圖片
              <Field name="placeImgPathRef" v-model="placeImgPath" class="hidden" type="file"
                @change="updateFileAct($event)" />
            </label>
          </div>
          <h5 class="text-main-color-light mb-7">{{ placeImg }}</h5>

          <span v-show="errors.placeImgPathRef" class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
            errors.placeImgPathRef
          }}</span>
        </div>

      </Form>

      <Footer class="absolute bottom-0 mobile:left-0" />
    </div>
    <!-------------- 燈箱 --------------->
    <div
      class="admin-stargazer-modal bg-black bg-opacity-80 w-full h-full fixed left-0 top-0 flex items-center justify-center animate__animated"
      :class="[{ animate__fadeOut: !modal }, { animate__fadeIn: modal }, { 'z-9999': modalInner }, { '-z-50': !modalInner }]">
      <button class="absolute right-4 top-4 button small text-white" title="close" @click.prevent="closeModal">
        𝖷
      </button>
      <div id="map-container" ref="mapModalRef" class="w-5/6 h-4/5 modal-inner">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import L from "leaflet";
import { markType, layerClickEvent } from '@/types/graphql/types'
import schema from '@/utils/vee-validate-schema'
import { Field, Form } from 'vee-validate';
import { stargazerList } from '@/api/stargazing'
import { StargazingArr, PageInfoPush } from '@/types/graphql/types'
import { updateFile } from '@/api/utils'
import { useDebounceFn, onClickOutside } from '@vueuse/core'
// 取得路由
const route = useRoute()
const routeName = String(route.name)


// ================================= 設定送出表單欄位 =========================================

const addPlaceForm = ref({
  validate: () => { return { valid: false } }
})

const placeName = ref("")
const placeDescription = ref("")
const placeIntroduction = ref("")
const placeLat = ref<number | null>(null)  // 緯度
const placeLon = ref<number | null>(null) // 經度
const placeImg = ref("")  // 圖片名稱
const placeImgPath = ref("")  // 圖片路徑
const verifyRules = {
  placeNameRef: schema.required,
  placeDescriptionRef: schema.required,
  placeIntroductionRef: schema.required,
  placeLatRef: schema.required,
  placeLonRef: schema.required,
  placeImgPathRef: schema.image
}

// ================================= 設定燈箱 =========================================

const modalInner = ref(false)
const mapModalRef = ref(null)
const modal = ref(false)

onClickOutside(mapModalRef,
  (event) => {
    if (modal.value === true || modalInner.value === true) {
      closeModal()
    }
  }
)

function closeModal() {
  // console.log("closeModal")
  modal.value = false
  setTimeout(() => {
    modalInner.value = false
  }, 1000);
}

function openModal() {
  // console.log("openModal")
  modal.value = true
  setTimeout(() => {
    modalInner.value = true
  }, 300);
}

// ================================= 設定地圖 =========================================

// 宣告欄位
let popupLayer = ref({
  setLatLng: (x: object) => true,
  setContent: (y: string) => true,
  openOn: (z: object) => true
})
let actMarkName = ref<string>("")
let actMarkLatitude = ref<number>(0)
let actMarkLongitude = ref<number>(0)
let actMarkImg = ref<string>("")
let actMarkDescription = ref<string>("")
let actMarkAddress = ref<string>("")
let actMarkLink = ref<string>("")

// 預設地圖物件
let coordinate = ref([0, 0])

let map = ref({
  zoomControl: {
    setPosition: (n: string) => ""
  },
  remove(): void { },
  on(n: string, event: any): void { },
  setView: (x: Array<Number>, y: Number) => true,
  closePopup(): void { },
  removeLayer(layerObj: object): void { }
})

const customIcon = L.icon({
  iconUrl: '/img/mark-op.png',
  iconSize: [50, 50]
});

function mapInit() {
  // 建立 map 實例
  map.value = L.map('map-container', {
    center: coordinate.value,
    zoom: 10, // 0-18
    attributionControl: false, // leaflet
    zoomControl: true, // - + 按鈕
    scrollWheelZoom: false,
    zoomAnimation: true,
    fadeAnimation: true,
    markerZoomAnimation: true,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  })
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png').addTo(map.value);
  map.value.zoomControl.setPosition('topright');

  // 建立座標圖層
  let markersLayer = L.featureGroup().addTo(map.value);

  // 設置 popup 
  popupLayer.value = L.popup({ offset: [0, -13], className: 'stargazing-map-pop' });
  map.value.on('click', function (event: layerClickEvent) {
    onMapClick(event, markersLayer);
  })
}

function onMapClick(event: layerClickEvent, layer: any) {
  let lat = event.latlng.lat; // 緯度
  let lng = event.latlng.lng; // 經度
  let placeInfo = {
    "stargazing_title": "",
    "stargazing_latitude": lat,
    "stargazing_longitude": lng,
    "stargazing_image": "",
    "stargazing_description": "",
    "stargazing_address": "",
    "stargazing_link": "",
    "stargazing_lid": ""
  }

  // 地圖插點
  layer.clearLayers();
  setMark(placeInfo, layer)

  // 綁定 popup 內容
  popupLayer.value.setLatLng(event.latlng)
  popupLayer.value.setContent(`<div class="admin-stargazer-pop">緯度：${lat}<br/>經度：${lng}<br /><button id="pop-check-btn">套用座標</button></div>`)
  popupLayer.value.openOn(map.value);

  // 綁定套用座標事件
  const popBtn = document.getElementById("pop-check-btn")
  L.DomEvent.on(popBtn, 'click', (event: MouseEvent) => {
    setActMarkData(placeInfo)
    closeModal()
    applyLatLon()
  })

  // 針對點擊座標定位縮放
  map.value.setView([lat, lng], 10)

  // 將 active 欄位儲存
  actMarkLatitude.value = lat
  actMarkLongitude.value = lng
}

function applyLatLon() {
  placeLat.value = actMarkLatitude.value
  placeLon.value = actMarkLongitude.value
}

function setMark(markInfo: markType, layer: object) {
  const marker = L.marker(
    [markInfo.stargazing_latitude, markInfo.stargazing_longitude], {
    icon: customIcon,
    title: markInfo.stargazing_title,
    opacity: 1.0
  }).addTo(layer);
}

function setDefaultActData() {
  let defaultPlaceInfo = {
    "stargazing_title": "",
    "stargazing_latitude": 22.828574143383403,
    "stargazing_longitude": 121.15307085653819,
    "stargazing_image": "",
    "stargazing_description": "",
    "stargazing_address": "",
    "stargazing_link": "",
    "stargazing_lid": ""
  }
  coordinate.value = [defaultPlaceInfo.stargazing_latitude, defaultPlaceInfo.stargazing_longitude]
  setActMarkData(defaultPlaceInfo)
}

function setActMarkData(obj: markType) {
  actMarkName.value = obj.stargazing_title
  actMarkLatitude.value = obj.stargazing_latitude
  actMarkLongitude.value = obj.stargazing_longitude
  actMarkImg.value = obj.stargazing_image
  actMarkDescription.value = obj.stargazing_description
  actMarkAddress.value = obj.stargazing_address
  actMarkLink.value = obj.stargazing_link
}

function destroyMap() {
  map.value.remove()
}

// ================================= 上傳檔案 =========================================

const localFile = ref(null)
async function updateFileAct(event: Event) {
  // event: HTMLInputElement & { target: HTMLInputElement }
  const target = (<HTMLInputElement>event.target)
  let fileList = target.files
  if (fileList !== null) {
    // 將預設圖片淡出
    localBgOpacity.value = false
    // 上傳檔案
    const res = await updateFile(fileList[0], routeName)
    if (res.data.singleUpload.errorTitle) {
      alert(res.data.singleUpload.errorTitle)
    } else {
      localFile.value = res.data.singleUpload
      placeImg.value = res.data.singleUpload.filename
      placeImgPath.value = res.data.singleUpload.s3Path
    }
  }
}

// 抓取上傳圖片路由
const localBgOpacity = ref(true)
const uploadImgPath = computed(() => {
  if (placeImgPath.value) {
    setTimeout(() => {
      localBgOpacity.value = true
    }, 1000);
    return 'https://puraliena.com' + placeImgPath.value
  } else {
    setTimeout(() => {
      localBgOpacity.value = true
    }, 1000);
    return '/assets/bg/default-image-438x438.gif'
  }
})


// 送出防抖表單
const actionAddPlace = useDebounceFn(async () => {
  const { valid } = await addPlaceForm.value.validate()
  console.log(valid)
  if (valid) {
    console.log("可以新增")
  } else {
    console.log("不能新增")
  }
})


// 生命週期 --------------------------------------------------------------
onMounted(async () => {
  // 先設定預設值
  await setDefaultActData()
  // 地圖實體化
  await mapInit()
});

onBeforeUnmount(() => {
  destroyMap()
});
</script>