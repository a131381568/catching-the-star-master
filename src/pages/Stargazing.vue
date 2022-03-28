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
        @click.stop="clickSingleInfo(val.latitude, val.longitude)"
      >
        <img class="w-15px mr-2" src="/svg/mark.svg" />
        <span class="group-hover:text-sp-color-light delay-75 duration-1000">{{ val.name }}</span>
      </li>
    </ul>
  </div>
  <!-- 單一地點介紹 -->
  <div
    class="w-1/3 h-80vh bg-white z-401 absolute shadow-2xl grid grid-flow-rows"
    v-show="infoBoxState"
  >
    <div class="w-full flex items-center justify-between p-4 row-span-1">
      <h2 class="tracking-normal font-normal truncate">{{ actMarkName }}</h2>
      <button
        @click.stop="hideInfoBox"
        class="p-6 -m-6 relative right-7 bottom-7px w-15px h-15px before:absolute before:left-15px before:h-15px before:w-2px before:bg-black before:rotate-45 after:absolute after:left-15px after:h-15px after:w-2px after:bg-black after:-rotate-45"
      ></button>
    </div>
    <div
      class="w-full min-h-100px bg-bottom bg-no-repeat bg-cover row-span-6"
      :style="'background-image: url(' + actMarkImg + ')'"
    ></div>
    <div class="p-4 text-main-color-middle row-span-4">
      <div>{{ actMarkDescription }}</div>
    </div>
    <div class="px-4 text-sub-color-light flex items-center row-span-1">
      <img class="w-15px mr-2" src="/svg/mark.svg" />
      <a :href="actMarkLink" target="_blank">{{ actMarkAddress }}</a>
    </div>
  </div>
  <!-- 地圖容器 -->
  <div id="map-container" class="w-full h-80vh mb-60"></div>
  <Footer />
</template>
<script setup lang="ts">
import L from "leaflet";

// 型別宣告
type tArr = {
  name: string,
  latitude: number,
  longitude: number,
  img: string,
  description: string,
  address: string,
  link: string
}[];
type tObj = {
  name: string,
  latitude: number,
  longitude: number,
  img: string,
  description: string,
  address: string,
  link: string
}
type layerClickEvent = {
  latlng: {
    lat: number,
    lng: number,
  },
  layer: {
    setIcon(n: object): {}
  }
}
type layerArr = {
  dragging: object,
  options: object,
  _eventParents: object,
  _events: object,
  _icon: object,
  _initHooksCalled: boolean,
  _latlng: string,
  _leaflet_id: number,
  _map: object,
  _mapToAdd: object,
  _shadow: null,
  _zIndex: number,
  _zoomAnimated: boolean,
  setIcon: (n: object) => true,
  getLatLng: () => { lat: null, lng: null },
}[];
type popLayer = {
  options: object,
  _closeButton: object,
  _container: object,
  _containerBottom: number,
  _containerLeft: number,
  _containerWidth: number,
  _content: string,
  _contentNode: object,
  _events: object,
  _firingCount: number,
  _initHooksCalled: boolean,
  _latlng: object,
  _leaflet_id: number,
  _map: null,
  _mapToAdd: null,
  _removeTimeout: number,
  _source: undefined,
  _tip: object,
  _tipContainer: object,
  _wrapper: object,
  _zoomAnimated: boolean,
}

// 宣告欄位
let popupLayer = ref({
  setLatLng: (x: object) => true,
  setContent: (y: string) => true,
  openOn: (z: object) => true
})
const stargazingList: tArr = [
  {
    name: "台東：三仙台風景區",
    latitude: 23.12330848849819,
    longitude: 121.40687774577503,
    img: "/img/mark-0001.jpg",
    description: "海浪造型的三仙台，是台東地標，來到觀星時節時，有機會清晰地看見銀河系美景，碧藍大海呼應滿天繁星的紫藍色，有種奇幻之美，快來捕捉這絕美的時刻！",
    address: "臺東縣成功鎮三仙里基翬路74號",
    link: "https://goo.gl/maps/NTmD84bXT3U37VVt9"
  },
  {
    name: "台東：南田觀景台",
    latitude: 22.270049870794672,
    longitude: 120.88903677645098,
    img: "/img/mark-0002.jpg",
    description: "透過專業攝影的快門，清楚地看見星星移動的軌跡，讓人就像是穿越時空般浪漫，簡直就像走進璀璨繁星的無敵星星隧道～",
    address: "臺東縣大武鄉南田",
    link: "https://goo.gl/maps/j7xnTzti8MASyZcx7"
  },
  {
    name: "台東：加路蘭遊憩區",
    latitude: 22.80795281624045,
    longitude: 121.19650638837328,
    img: "/img/mark-0003.jpg",
    description: "加路蘭遊憩區是台東人最美星空的推薦！大片草坪上有特殊的藝術造景，怎麼拍都美！還可以聽著海浪聲，仰望繁點的群星，超療癒啊～",
    address: "臺東縣臺東市富岡漁港往北走1公里",
    link: "https://goo.gl/maps/AgcdwR7vf5qyvUUYA"
  },
  {
    name: "台東：長濱金剛大道",
    latitude: 23.329304670426,
    longitude: 121.44073286111994,
    img: "/img/mark-0004.jpg",
    description: "繁星就像是從銀河偷溜了出來，運氣好時可以在金剛大道觀看銀河橫跨夜空的美，只要仰望臺東的天空，就能看見令人屏息的滿天星斗，讓人讚嘆大自然的不可思議啊～",
    address: "臺東縣長濱鄉東13鄉道(長光產業道路)",
    link: "https://goo.gl/maps/3vh39x3NH3A6ReeT6"
  },
  {
    name: "台東：大武濱海公園",
    latitude: 22.359312118429415,
    longitude: 120.9075719954937,
    img: "/img/mark-0005.jpg",
    description: "沿著海岸線，可見群星閃爍著，大武濱海公園的星群屬於三等星，雖然沒有一等星的星光閃爍，但可以享受躺在海灘旁細數星星的無敵浪漫！",
    address: "臺東縣大武鄉大武濱海公園",
    link: "https://goo.gl/maps/Rj48PiCMQMjnBtB8A"
  },
  {
    name: "綠島：帆船鼻大草原",
    latitude: 22.636130832588435,
    longitude: 121.50827758134503,
    img: "/img/mark-0006.jpg",
    description: "位於台灣本島外的綠島，相較於都市的光害少了許多，尤其是帆船鼻大草原，站在景觀台上擁抱夜空的點點繁星，實在是太幸福啦～",
    address: "臺東縣綠島鄉東南角",
    link: "https://goo.gl/maps/LWwkBgDfsYTouhmQ7"
  },
  {
    name: "蘭嶼：蘭嶼氣象站",
    latitude: 22.037406340161123,
    longitude: 121.55864597644853,
    img: "/img/mark-0007.jpg",
    description: "蘭嶼有台灣最美小島封號，自然原始，讓這裡成了觀星最美小島！置高點的蘭嶼氣象站，是獨占山景及星空的絕美地方，天氣好時，就像是銀河系覆蓋了整個島嶼，哪怕只是一秒，都讓人美到捨不得眨眼～",
    address: "臺東縣蘭嶼鄉紅頭村2號",
    link: "https://goo.gl/maps/AwNsdmEfpZYY7mfR7"
  },
  {
    name: "台東：池上大坡池",
    latitude: 23.11698444511837,
    longitude: 121.22535837679713,
    img: "/img/mark-0008.jpg",
    description: "大坡池白天是花東縱谷知名的景點，不少人會選擇在當地騎單車、賞夏荷、遊竹筏趕送美麗樸素的景色。不過大坡池的夜景也讓人驚艷，天氣好便能看見滿天的星斗倒映於水面中，是賞星必去景點！",
    address: "臺東縣池上鄉(臺9線322K東側轉入)",
    link: "https://goo.gl/maps/5RwmrGRsVf6rZjx78"
  },
  {
    name: "台東：關山親水公園",
    latitude: 23.040162889616862,
    longitude: 121.17393181278385,
    img: "/img/mark-0009.jpg",
    description: "位於海岸山脈與中央山脈縱谷間的關山親水公園，地理位置清淨優雅，是親子旅遊、戲水與騎單車的好去處，白天能眺望關山鎮無邊際的田園風光，而夜間則能抬頭仰望繁星點點的絕美風景。",
    address: "臺東縣關山鎮隆盛路1號",
    link: "https://goo.gl/maps/5zguXmXyLv5F89r77"
  },
  {
    name: "台東：都蘭觀海公園",
    latitude: 22.8729189338634,
    longitude: 121.23487143597846,
    img: "/img/mark-0010.jpg",
    description: "都蘭觀海公園位於臺11線旁，園區內有兩條對外道路，可區分通道管控車輛通行，而且園區停車場位於觀星草原平台的下方，所以不用擔心車燈光害影響觀星，為我們提供最高品質的星空美景。",
    address: "臺東縣東河鄉都蘭61號",
    link: "https://goo.gl/maps/vAQroTKdWDKDUjf48"
  },
  {
    name: "台東：鹿野高台高眺亭",
    latitude: 22.9173827688225,
    longitude: 121.12273028810145,
    img: "/img/mark-0011.jpg",
    description: "鹿野高台為於花東縱谷南段，而鹿野高台也是熱氣球的舉辦的，吸引各地旅客前往朝聖。也因為地勢高，可以俯瞰鹿野溪與卑南溪的匯流口，視野相當開闊，幾乎無光害，是絕佳的觀星地點。",
    address: "台東縣鹿野鄉高台路42巷84號",
    link: "https://goo.gl/maps/hMRm35kSmvkG5R6Y8"
  },
  {
    name: "台東：金針山湛藍若洗觀景平台",
    latitude: 22.626562086369855,
    longitude: 120.97615874768186,
    img: "/img/mark-0012.jpg",
    description: "位於太麻里的金針山是著名的賞花勝地，四季造訪皆能觀賞到滿山遍野不同的花朵盛開美景。除了白天可以賞花看海景外，夜晚也可欣賞星空夜景與月光海色，美不勝收的景色一生一定要去一次。",
    address: "台東縣太麻里鄉大王村",
    link: "https://goo.gl/maps/AHapEU2vd3EKi2Xk6"
  },
  {
    name: "台東：富源景觀平台",
    latitude: 22.828574143383403,
    longitude: 121.15307085653819,
    img: "/img/mark-0013.jpg",
    description: "富源景觀平台視野遼闊，可以360度觀景，一邊能眺望都蘭山與綠島，而另一邊則可以看見卑南溪、小黃山、利吉惡地等獨特地理景觀，把東海岸景緻盡收眼底。開闊的視野是觀星的絕佳景點。",
    address: "臺東縣卑南鄉富源197縣道56公里處",
    link: "https://goo.gl/maps/Wewq4bnDpgtNxoFF6"
  }
]
let actMarkName = ref<string>(stargazingList[0].name || "")
let actMarkLatitude = ref<number>(stargazingList[0].latitude || 0)
let actMarkLongitude = ref<number>(stargazingList[0].longitude || 0)
let actMarkImg = ref<string>(stargazingList[3].img || "")
let actMarkDescription = ref<string>(stargazingList[0].description || "")
let actMarkAddress = ref<string>(stargazingList[0].address || "")
let actMarkLink = ref<string>(stargazingList[0].link || "")
let infoBoxState = ref<boolean>(false)
let registerMarkersLayer = ref<layerArr>([])

// 預設地圖物件
let coordinate: Array<number>
coordinate = [22.892768017615417, 120.76385253672235] // 預設林業試驗所六龜試驗林

let map = ref({
  zoomControl: {
    setPosition: (n: string) => ""
  },
  remove(): void { },
  on(): void { },
  setView: (x: Array<Number>, y: Number) => true,
  closePopup(): void { }
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
onMounted(() => {
  mapInit()
});

onBeforeUnmount(() => {
  destroyMap()
});

// methods ------------------------------------------------------------------
function clickSingleInfo(lat: number, lon: number) {
  infoBoxState.value = true
  let actInfo = stargazingList.filter(info => info.latitude === lat && info.longitude === lon)

  // 將 active 欄位儲存
  if (actInfo.length > 0) {
    actMarkName.value = actInfo[0].name
    actMarkLatitude.value = actInfo[0].latitude
    actMarkLongitude.value = actInfo[0].longitude
    actMarkImg.value = actInfo[0].img
    actMarkDescription.value = actInfo[0].description
    actMarkAddress.value = actInfo[0].address
    actMarkLink.value = actInfo[0].link
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
  popupLayer.value.setContent(actInfo[0].name)
  popupLayer.value.openOn(map.value);

  // 針對點擊座標定位縮放
  map.value.setView([lat, lon], 11)
}
function showInfoBox() {
  infoBoxState.value = true
}
function hideInfoBox() {
  infoBoxState.value = false
  map.value.closePopup()
  actLayer.value.setIcon(customIcon)

}
function mapInit() {
  // 建立 map 實例
  map.value = L.map('map-container', {
    center: coordinate,
    zoom: 10, // 0-18
    attributionControl: true, // leaflet
    zoomControl: true, // - + 按鈕
    scrollWheelZoom: false,
    zoomAnimation: true,
    fadeAnimation: true,
    markerZoomAnimation: true
  })
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png').addTo(map.value);
  map.value.zoomControl.setPosition('topright');

  // 建立座標圖層
  let markersLayer = L.featureGroup().addTo(map.value);

  // 設置 popup
  popupLayer.value = L.popup({ offset: [0, -13], className: 'stargazing-map-pop' });
  console.log(popupLayer.value)

  // 地圖插點
  stargazingList.forEach(item => {
    setMark(item, markersLayer)
  });
  registerMarkersLayer.value = Object.keys(markersLayer._layers).map(function (_) { return markersLayer._layers[_]; });

  // 綁定點擊事件
  markersLayer.on('click', function (e: layerClickEvent) {
    stargazingList.forEach(item => {
      if (item.latitude === e.latlng.lat && item.longitude === e.latlng.lng) {

        // 將 active 欄位儲存
        actMarkName.value = item.name
        actMarkLatitude.value = item.latitude
        actMarkLongitude.value = item.longitude
        actMarkImg.value = item.img
        actMarkDescription.value = item.description
        actMarkAddress.value = item.address
        actMarkLink.value = item.link

        // 開啟單一資訊欄
        showInfoBox()

        // 先將所有座標換成普通樣式, 再設置 active 樣式
        registerMarkersLayer.value.forEach(markItem => {
          markItem.setIcon(customIcon)
        });
        e.layer.setIcon(activeIcon)

        // 儲存當下 Mark
        actLayer.value = e.layer

        // 綁定 popup 內容
        popupLayer.value.setLatLng(e.latlng)
        popupLayer.value.setContent(item.name)
        popupLayer.value.openOn(map.value);

        // 針對點擊座標定位縮放
        map.value.setView([item.latitude, item.longitude], 11)
      }
    });


  });
}
function setMark(markInfo: tObj, layer: object) {
  const marker = L.marker(
    [markInfo.latitude, markInfo.longitude], {
    icon: customIcon,
    title: markInfo.name,
    opacity: 1.0
  }).addTo(layer);
}
function destroyMap() {
  map.value.remove()
}
</script>
