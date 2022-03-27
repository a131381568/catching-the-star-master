<template>
  <Header />
  <div class="md:flex flex-wrap items-start justify-center pt-72 pb-7 2xl:px-20 md:px-6 px-4">
    <!-- 標題區塊 -->
    <TitleBox />
  </div>
  <!-- 地點列表 -->
  <div class="w-1/5 h-80vh bg-white z-401 absolute px-7 py-8 shadow-2xl">
    <h2 class="font-normal mb-9">地點列表</h2>
    <ul>
      <li
        v-for="(val, key) in stargazingList"
        :key="key"
        class="text-main-color-middle cursor-pointer mb-3 font-normal flex items-center tracking-wide group"
      >
        <img class="w-15px mr-2" src="/svg/mark.svg" />
        <span class="group-hover:text-sp-color-light delay-75 duration-1000">{{ val.name }}</span>
      </li>
    </ul>
  </div>
  <!-- 地圖容器 -->
  <div id="map-container" class="w-full h-80vh mb-60"></div>
  <Footer />
</template>
<script setup lang="ts">
import L from "leaflet";

// 資料列表
const stargazingList = [
  {
    name: "台東：三仙台風景區",
    latitude: "23.12330848849819",
    longitude: "121.40687774577503",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：南田觀景台",
    latitude: "22.270049870794672",
    longitude: "120.88903677645098",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：加路蘭遊憩區",
    latitude: "22.80795281624045 ",
    longitude: "121.19650638837328",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：長濱金剛大道",
    latitude: "23.329304670426",
    longitude: "121.44073286111994",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：大武濱海公園",
    latitude: "22.359312118429415",
    longitude: "120.9075719954937",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "綠島：帆船鼻大草原",
    latitude: "22.636130832588435",
    longitude: "121.50827758134503",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "蘭嶼：蘭嶼氣象站",
    latitude: "22.037406340161123",
    longitude: "121.55864597644853",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：大坡池",
    latitude: "23.11698444511837",
    longitude: "121.22535837679713",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：關山親水公園",
    latitude: "23.040162889616862",
    longitude: "121.17393181278385",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：都蘭觀海公園",
    latitude: "22.8729189338634",
    longitude: "121.23487143597846",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：鹿野高台高眺亭",
    latitude: "22.9173827688225",
    longitude: "121.12273028810145",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：金針山湛藍若洗觀景平台",
    latitude: "22.626562086369855",
    longitude: "120.97615874768186",
    img: "",
    description: "",
    address: "",
    link: ""
  },
  {
    name: "台東：富源景觀平台",
    latitude: "22.828574143383403",
    longitude: "121.15307085653819",
    img: "",
    description: "",
    address: "",
    link: ""
  }
]

// 預設地圖物件
let map = {
  zoomControl: {
    setPosition: (n: string) => ""
  },
  remove() {
    return true
  }
}
let coordinate = [22.892768017615417, 120.76385253672235]; // 預設林業試驗所六龜試驗林

function mapInit() {
  // .setView(coordinate, 9)
  map = L.map('map-container', {
    center: coordinate,
    zoom: 9, // 0-18
    attributionControl: true, // leaflet
    zoomControl: true, // - + 按鈕
    scrollWheelZoom: false
  })
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png').addTo(map);
  map.zoomControl.setPosition('topright');
}

function destroyMap() {
  map.remove()
}

onMounted(() => {
  mapInit()
});

onBeforeUnmount(() => {
  destroyMap()
});

</script>
