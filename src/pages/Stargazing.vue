<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-7 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- <button @click.prevent="setNewData" class="text-white text-lg">setNewData</button>
    <button @click.prevent="removeLayer" class="text-orange-400  text-lg">removeMark</button> -->
  </div>
  <!---------- 地點列表 ---------->
  <!-- 手機板選單樣式 -->
  <div class="dropdown-menu z-401 absolute hidden mobile:block mt-2 ml-2 shadow-2xl animate__animated animate__flipInX"
    :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]">
    <button id=" dropdownDefault"
      class="duration-1000 text-main-color-black border border-white border-opacity-60 bg-opacity-100 bg-white font-medium text-lg pl-4 py-3 pr-12 relative text-center inline-flex items-center tracking-normal w-full"
      type="button" @click.prevent="togglePlace()">
      {{ actMarkName }}
      <svg class="ml-2 w-4 h-4 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div id="dropdown" class="z-10 bg-main-color-light divide-y divide-gray-100 absolute w-full"
      v-show="togglePlaceVal">
      <ul class="py-1 text-sm text-main-color-black cursor-pointer h-200px overflow-y-auto">
        <li v-for="(val, key) in stargazingList" :key="key"
          @click.stop="clickSingleInfo(val.stargazing_latitude, val.stargazing_longitude), hideInfoBox()"
          class="tracking-normal block py-2 px-4 hover:text-sub-color-dark">{{ val.stargazing_title }}</li>
      </ul>
    </div>
  </div>
  <!-- 桌機左側列表樣式 -->
  <div
    class="stargazing-menu middle-pc:w-1/5 w-table:w-1/3 h-table:w-5/12 w-full h-80vh bg-white z-401 absolute px-7 py-8 shadow-2xl overflow-x-hidden hidden h-table:block animate__animated animate__slideInLeft"
    :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
    <h2 class="font-normal mb-9">地點列表</h2>
    <ul>
      <li v-for="(val, key) in stargazingList" :key="key"
        class="text-main-color-middle cursor-pointer mb-3 font-normal flex items-center tracking-wide group"
        @click.stop="clickSingleInfo(val.stargazing_latitude, val.stargazing_longitude)">
        <img class="w-15px mr-2" src="/svg/mark.svg" />
        <span class="group-hover:text-sp-color-light delay-75 duration-1000 whitespace-nowrap">{{
            val.stargazing_title
        }}</span>
      </li>
    </ul>
  </div>
  <!-- 單一地點介紹 -->
  <div
    class="stargazing-info-card middle-pc:w-1/3 w-table:w-5/12 h-table:w-1/2 w-full h-80vh bg-white z-401 absolute shadow-2xl grid grid-flow-rows animate__animated animate__slideInLeft animate__faster"
    :class="[{ 'animate__slideOutLeft': !infoBoxState }, { '-z-9999': isReady }]">
    <div class="w-full flex items-center justify-between p-4 row-span-1">
      <h2 class="tracking-normal font-normal truncate middle-pc:text-4xl h-table:text-xl mobile:text-xl">{{
          actMarkName
      }}</h2>
      <button @click.stop="hideInfoBox"
        class="close-stargazing-menu-btn p-6 -m-6 relative mobile:right-2 right-7 bottom-7px w-15px h-15px before:absolute before:left-15px before:h-15px before:w-2px before:bg-black before:rotate-45 after:absolute after:left-15px after:h-15px after:w-2px after:bg-black after:-rotate-45"></button>
    </div>
    <div class="w-full min-h-100px bg-bottom bg-no-repeat bg-cover row-span-6 animate__animated animate__faster"
      :style="'background-image: url(' + actMarkImg + ')'" :class="{ 'animate__flipOutX': !actMarkImg }"></div>
    <div class="p-4 text-main-color-middle row-span-4">
      <div class="stargazing-info-description">{{ actMarkDescription }}</div>
    </div>
    <div class="px-4 text-sub-color-light flex items-center row-span-1 mobile:pb-2">
      <img class="w-15px mr-2" src="/svg/mark.svg" />
      <a :href="`https://maps.google.com?q=${actMarkLatitude},${actMarkLongitude}`" target="_blank">{{
          actMarkAddress
      }}</a>
    </div>
  </div>
  <!-- 地圖容器 -->
  <div id="map-container" class="w-full h-80vh middle-pc:mb-60 h-table:mb-24 z-0 animate__animated animate__fadeInRight"
    :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]"></div>
  <Footer />
</template>
<script setup lang="ts">
import { stargazingMapInfo } from '@/api/stargazing'
import { markType, stargazingListArr, layerArr, layerClickEvent } from '@/types/graphql/types'
import { useToggle } from '@vueuse/core'
import L from "leaflet";
// 取得路由
const route = useRoute()
const routeName = String(route.name)
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const isReady = ref(true)

// 宣告欄位
let popupLayer = ref({
  setLatLng: (x: object) => true,
  setContent: (y: string) => true,
  openOn: (z: object) => true
})
const stargazingList = ref<stargazingListArr>([])
let actMarkName = ref<string>("")
let actMarkLatitude = ref<number>(0)
let actMarkLongitude = ref<number>(0)
let actMarkImg = ref<string>("")
let actMarkDescription = ref<string>("")
let actMarkAddress = ref<string>("")
let actMarkLink = ref<string>("")
let infoBoxState = ref<boolean>(false)
let registerMarkersLayer = ref<layerArr>([])

// 預設地圖物件
let coordinate = ref([0, 0])
// coordinate = [22.892768017615417, 120.76385253672235] // 預設林業試驗所六龜試驗林

let map = ref({
  zoomControl: {
    setPosition: (n: string) => ""
  },
  remove(): void { },
  on(): void { },
  setView: (x: Array<Number>, y: Number) => true,
  closePopup(): void { },
  removeLayer(layerObj: object): void { }
})
let actLayer = ref({
  setIcon: (n: object) => { }
})
const customIcon = L.icon({
  iconUrl: '/img/mark-op.png',
  iconSize: [50, 50]
});
const activeIcon = L.icon({
  iconUrl: '/img/mark-op-act.png',
  iconSize: [50, 50]
});

// circle life --------------------------------------------------------------
onMounted(async () => {
  // 取得地圖列表資訊
  await getStargazingMapInfo()
  // 先設定預設值
  await setDefaultActData()
  // 地圖實體化
  await mapInit()
});

onBeforeUnmount(() => {
  destroyMap()
});

// 手機版的選單 --------------------------------------------------------------
const [togglePlaceVal, togglePlace] = useToggle()

// ======================= 函式 ==============================

async function getStargazingMapInfo() {
  const res = await stargazingMapInfo(routeName)
  stargazingList.value = res.data.stargazingList
}

function clickSingleInfo(lat: number, lon: number) {
  infoBoxState.value = true
  let actInfo = stargazingList.value.filter(info => info.stargazing_latitude === lat && info.stargazing_longitude === lon)
  // 關閉手機版選單
  togglePlaceVal.value = false

  // 將 active 欄位儲存
  if (actInfo.length > 0) {
    actMarkName.value = actInfo[0].stargazing_title
    actMarkLatitude.value = actInfo[0].stargazing_latitude
    actMarkLongitude.value = actInfo[0].stargazing_longitude
    actMarkImg.value = actInfo[0].stargazing_image
    actMarkDescription.value = actInfo[0].stargazing_description
    actMarkAddress.value = actInfo[0].stargazing_address
    actMarkLink.value = actInfo[0].stargazing_link
  }

  // 設置 active 座標
  registerMarkersLayer.value.forEach(markItem => {
    if (markItem.getLatLng().lat === lat && markItem.getLatLng().lng === lon) {
      markItem.setIcon(activeIcon)
      // 儲存當下 Mark
      actLayer.value = markItem
    }
  });

  // 綁定 popup 內容
  popupLayer.value.setLatLng([lat, lon])
  popupLayer.value.setContent(actInfo[0].stargazing_title)
  popupLayer.value.openOn(map.value);

  // 針對點擊座標定位縮放
  map.value.setView([lat, lon], 11)
}

function showInfoBox() {
  infoBoxState.value = true
}

function hideInfoBox() {
  infoBoxState.value = false
  // map.value.closePopup()
  actLayer.value.setIcon(customIcon)
}

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
  // console.log(popupLayer.value)

  // 地圖插點
  stargazingList.value.forEach(item => {
    setMark(item, markersLayer)
  });
  registerMarkersLayer.value = Object.keys(markersLayer._layers).map(function (_) { return markersLayer._layers[_]; });

  // 綁定點擊事件
  markersLayer.on('click', function (e: layerClickEvent) {
    stargazingList.value.forEach(item => {
      if (item.stargazing_latitude === e.latlng.lat && item.stargazing_longitude === e.latlng.lng) {

        // 先關閉單一資訊欄
        hideInfoBox()

        setTimeout(() => {
          // 將 active 欄位儲存
          setActMarkData(item)
          // 開啟單一資訊欄
          showInfoBox()
        }, 1000);

        // 先將所有座標換成普通樣式, 再設置 active 樣式
        registerMarkersLayer.value.forEach(markItem => {
          markItem.setIcon(customIcon)
        });
        e.layer.setIcon(activeIcon)

        // 儲存當下 Mark
        actLayer.value = e.layer

        // 綁定 popup 內容
        popupLayer.value.setLatLng(e.latlng)
        popupLayer.value.setContent(item.stargazing_title)
        popupLayer.value.openOn(map.value);

        // 針對點擊座標定位縮放
        map.value.setView([item.stargazing_latitude, item.stargazing_longitude], 11)
      }
    });
  });

  setTimeout(() => {
    // 地圖已設置
    isReady.value = false
  }, 3000);

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
  if (stargazingList.value.length > 0) {
    coordinate.value = [stargazingList.value[0].stargazing_latitude, stargazingList.value[0].stargazing_longitude]
    setActMarkData(stargazingList.value[0])
  }
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


// 測試新增資料

let testLayer = ref({})

function setNewData() {
  let copyObj = {
    stargazing_title: 'xxxxx',
    stargazing_latitude: 25.033866188405085,
    stargazing_longitude: 121.5645582937896,
    stargazing_image: 'https://stage.taipei101mall.com.tw/uploads/content/3539a78f-df62-177c-f388-09243bc44ed2.png',
    stargazing_description: 'desssss',
    stargazing_address: '我是地址',
    stargazing_link: 'https://stage.taipei101mall.com.tw/article/390?article_type_id=0&article_tag_id=0&page=1'
  }
  let copyArr = JSON.parse(JSON.stringify(stargazingList.value))
  copyArr[0] = copyObj
  stargazingList.value = copyArr
  setActMarkData(copyObj)

  // popup
  popupLayer.value.setLatLng([copyObj.stargazing_latitude, copyObj.stargazing_longitude])
  popupLayer.value.setContent(copyObj.stargazing_title)
  map.value.setView([copyObj.stargazing_latitude, copyObj.stargazing_longitude], 11)

  // 建立座標圖層
  testLayer.value = L.featureGroup().addTo(map.value);

  // 地圖插點
  setMark(copyObj, testLayer.value)
}

function removeLayer() {
  map.value.removeLayer(testLayer.value)
}
</script>
