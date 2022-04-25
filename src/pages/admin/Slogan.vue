<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative">
      <!-- 標題區塊 -->
      <div class="w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap">
        <h1
          class="text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5">
          標語管理</h1>
      </div>
      <!-- 編輯區塊 -->
      <div class="editer-container w-9/12">
        <Form ref="homeSloganForm" :validation-schema="verifyRules" v-slot="{ errors }"
          class="home-slogan w-full mb-14">
          <div class="map-search-bar flex justify-between mb-8">
            <h2 class="text-main-color-light">首頁—主視覺文字</h2>
            <button class="admin-sbtn" @click.prevent="changehomeSloganEditMode()"
              v-if="!homeSloganEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="changehomeSloganEditMode()"
              v-if="homeSloganEditMode">儲存標語</button>
          </div>
          <div class="editer-inner view-mode" v-if="!homeSloganEditMode">
            <h4 class="home-title"><i>{{ pageTitleFirst }}</i>{{ pageTitleLast }}</h4>
            <p>{{ pageSubTitle }}</p>
          </div>
          <div class="editer-inner edit-mode mb-8" v-if="homeSloganEditMode">
            <Field name="pageTitleRule" type="text" v-model="pageTitle"
              class="home-title-input mb-4 bottom-line-input-gray" placeholder="主視覺標語"
              :class="{ '!border-sp-color-dark': errors.pageTitleRule }" />
            <span v-show="errors.pageTitleRule" class="text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.pageTitleRule
            }}</span>
            <Field name="pageSubTitleRule" type="text" v-model="pageSubTitle"
              class="home-slogan mb-2 bottom-line-input-gray" placeholder="主視覺引言"
              :class="{ '!border-sp-color-dark': errors.pageSubTitleRule }" />
            <span v-show="errors.pageSubTitleRule" class="text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.pageSubTitleRule
            }}</span>
          </div>
        </Form>
        <Form ref="aboutSloganForm" :validation-schema="verifyRules" v-slot="{ errors }"
          class="about-slogan w-full mb-14">
          <div class="map-search-bar flex justify-between mb-8">
            <h2 class="text-main-color-light">關於我們—理念</h2>
            <button class="admin-sbtn" @click.prevent="changeaboutSloganEditMode()"
              v-if="!aboutSloganEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="changeaboutSloganEditMode()"
              v-if="aboutSloganEditMode">儲存標語</button>
          </div>
          <div class="editer-inner view-mode mb-14" v-if="!aboutSloganEditMode">
            <h4 class="text-xl">{{ sloganRef }}</h4>
            <hr class="border-main-color-middle my-8">
            <v-md-preview class="markdown-body" :text="philosophyRef" height="400px"></v-md-preview>
          </div>
          <div class="editer-inner edit-mode md-container" v-if="aboutSloganEditMode">
            <Field name="sloganRule" v-model="sloganRef" class="p-6"
              :class="{ '!bg-sp-color-light': errors.sloganRule }" placeholder="關於我們標語" />
            <span v-show="errors.sloganRule" class="text-sp-color-dark text-xs w-full h-5 block mt-2 mb-5">{{
                errors.sloganRule
            }}</span>
            <Field v-show="false" name="philosophyRule" v-model="philosophyRef" height="400px" />
            <v-md-editor class="markdown-body" v-model="philosophyRef" height="400px"></v-md-editor>
            <span v-show="errors.philosophyRule" class="text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.philosophyRule
            }}</span>
          </div>
        </Form>
        <div class="about-quote w-full">
          <div class="map-search-bar flex justify-between mb-8">
            <h2 class="text-main-color-light">關於我們—引言</h2>
            <button class="admin-sbtn" @click.prevent="changeAboutQuoteEditMode()"
              v-if="!aboutQuoteEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="changeAboutQuoteEditMode()"
              v-if="aboutQuoteEditMode">儲存標語</button>
          </div>
          <div class="editer-inner view-mode mb-14" v-if="!aboutQuoteEditMode">
            <v-md-preview class="markdown-body" :text="quoteRef" height="400px"></v-md-preview>
          </div>
          <div class="editer-inner edit-mode md-container" v-if="aboutQuoteEditMode">
            <v-md-editor class="markdown-body" v-model="quoteRef" height="400px"></v-md-editor>
          </div>
        </div>
        <div class="about-epilogue w-full">
          <div class="map-search-bar flex justify-between mb-8">
            <h2 class="text-main-color-light">關於我們—引言</h2>
            <button class="admin-sbtn" @click.prevent="changeAboutEpilogueEditMode()"
              v-if="!aboutEpilogueEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="changeAboutEpilogueEditMode()"
              v-if="aboutEpilogueEditMode">儲存標語</button>
          </div>
          <div class="editer-inner view-mode mb-14" v-if="!aboutEpilogueEditMode">
            <v-md-preview class="markdown-body" :text="epilogueRef" height="400px"></v-md-preview>
          </div>
          <div class="editer-inner edit-mode md-container" v-if="aboutEpilogueEditMode">
            <v-md-editor class="markdown-body" v-model="epilogueRef" height="400px"></v-md-editor>
          </div>
        </div>
      </div>
      <Footer class="absolute bottom-0 mobile:left-0" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { markType, layerClickEvent, StargazingArr, PageInfoPush, CommonResponse } from '@/types/graphql/types'
import schema from '@/utils/vee-validate-schema'
import { Field, Form } from 'vee-validate';
import { setNewStargazer, getSingleStargazer, editStargazer } from '@/api/stargazing'
import { updateFile } from '@/api/utils'
import { useDebounceFn, onClickOutside } from '@vueuse/core'
// 取得路由
const route = useRoute()
const router = useRouter()
const routeName = String(route.name)
const store = useStore();

const pageTitle = ref("Catch the stars")
const pageTitleFirst = computed(() => pageTitle.value.split(" ")[0]);
const pageTitleLast = computed(() => pageTitle.value.replace(pageTitleFirst.value, ''));
const pageSubTitle = ref("誰能數得清天上的星星？誰能說出它們對世界的影響？——詹・湯姆遜")

const sloganRef = ref("我們是「雲上的小貓」，致力於寫下故事、留下故事。")

const philosophyRef = ref("人是被賦予豐富情感的動物，會笑、會哭、會憤怒、會感動，所以有溫度的故事是能夠觸動人心的，甚至能夠在心中種下一顆希望的種子，在未來成長為茁壯的大樹。<br /><br />正因凡走過必留下痕跡，可以是歷史？<br />也可以是虛構的童話？<br />不管它是什麼？<br /><br />總會能夠會帶給我們些什麼？<br />對吧？<br /><br />無論是虛無飄渺的疑問？還是膽戰心驚的恐懼？又或著肯定的勇氣？每個人都有故事，因為這是我們自己開啟的故事——。")

const quoteRef = ref("「我和他就好像天上的星星，遠看好像距離很近，但實際上卻是相當遙遠的。」<br /><br />「這片夜空中，只有一顆星星在微弱的閃鑠著，好像很孤單一樣？但是我們每個人只要一抬頭就能看見它，<br />所以即使身在遠方，星星也能夠獨自努力發光了。」<br /><br />——《虎與龍》")

const epilogueRef = ref("『打從地球誕生的那一刻起，天空就已經用這樣的姿態為我們在夜晚蓋上滿天星斗的布幕了。』<br /><br />在這宏觀的世界，世人們將星座和神話故事相互結合，把夜空中同一個區域的星星，分為一個個的星座，每一個星座都有屬於它們自己的故事，令人嚮往和好奇。<br /><br />而製造這浪漫的舞台，究竟是什麼構造？它們的由來又什麼？是否是我們能夠觸手可及的呢？<br />它們一直都存在我們的身旁，只是我們一直都沒注意到而已。<br /><br /><strong class=\"text-sp-color-light\">這次讓我們來好好記下它們的存在的軌跡。</strong>")

// ================================= 設定送出表單欄位 =========================================

const homeSloganEditMode = ref(false)
function changehomeSloganEditMode() {
  homeSloganEditMode.value = !homeSloganEditMode.value
}

const aboutSloganEditMode = ref(false)
function changeaboutSloganEditMode() {
  aboutSloganEditMode.value = !aboutSloganEditMode.value
}

const aboutQuoteEditMode = ref(false)
function changeAboutQuoteEditMode() {
  aboutQuoteEditMode.value = !aboutQuoteEditMode.value
}

const aboutEpilogueEditMode = ref(false)
function changeAboutEpilogueEditMode() {
  aboutEpilogueEditMode.value = !aboutEpilogueEditMode.value
}

// 驗證容器和規則
const homeSloganForm = ref({
  validate: () => { return { valid: false } }
})

const aboutSloganForm = ref({
  validate: () => { return { valid: false } }
})

const verifyRules = {
  pageTitleRule: schema.required,
  pageSubTitleRule: schema.required,
  sloganRule: schema.required,
  philosophyRule: schema.required,
  quoteRule: schema.required,
  epilogueRule: schema.required
}

// ================================= 生命週期 =========================================


onMounted(async () => {
  // 
});

onBeforeUnmount(() => {
  //
});
</script>