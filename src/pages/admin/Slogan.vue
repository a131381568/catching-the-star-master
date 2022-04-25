<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative">
      <!-- 標題區塊 -->
      <div class="h-table:w-9/12 w-full flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap">
        <!-- -left-2 -top-2 -->
        <h1 class="text-white relative mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5">
          標語管理</h1>
      </div>
      <!-- 編輯區塊 -->
      <div class="editer-container h-table:w-9/12 w-full">
        <Form ref="homeSloganForm" :validation-schema="homeSloganFormRules" v-slot="{ errors }"
          class="home-slogan w-full mb-14">
          <div class="flex justify-between mb-8 flex-wrap mobile:mb-4">
            <h2 class="text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4">首頁—主視覺文字</h2>
            <button class="admin-sbtn" @click.prevent="setEditMode('homeSloganForm')"
              v-if="!homeSloganEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="setConfirmModal('homeSloganForm')"
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
        <Form ref="aboutSloganForm" :validation-schema="aboutSloganFormRules" v-slot="{ errors }"
          class="about-slogan w-full mb-14">
          <div ref="aboutSloganEditOuter" class="flex justify-between mb-8 flex-wrap mobile:mb-4">
            <h2 class="text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4">關於我們—理念</h2>
            <button class="admin-sbtn" @click.prevent="setEditMode('aboutSloganForm')"
              v-if="!aboutSloganEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="setConfirmModal('aboutSloganForm')"
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
            <Field v-show="false" name="philosophyRule" v-model="philosophyRef" />
            <v-md-editor class="markdown-body" v-model="philosophyRef" height="400px"></v-md-editor>
            <span v-show="errors.philosophyRule" class="text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.philosophyRule
            }}</span>
          </div>
        </Form>
        <Form ref="aboutQuoteForm" :validation-schema="aboutQuoteFormRules" v-slot="{ errors }"
          class="about-quote w-full mb-14">
          <div class="flex justify-between mb-8 flex-wrap mobile:mb-4">
            <h2 class="text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4">關於我們—引言</h2>
            <button class="admin-sbtn" @click.prevent="setEditMode('aboutQuoteForm')"
              v-if="!aboutQuoteEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="setConfirmModal('aboutQuoteForm')"
              v-if="aboutQuoteEditMode">儲存標語</button>
          </div>
          <div class="editer-inner view-mode mb-14" v-if="!aboutQuoteEditMode">
            <v-md-preview class="markdown-body" :text="quoteRef" height="400px"></v-md-preview>
          </div>
          <div class="editer-inner edit-mode md-container" v-if="aboutQuoteEditMode">
            <Field v-show="false" name="quoteRule" v-model="quoteRef" />
            <v-md-editor class="markdown-body" v-model="quoteRef" height="400px"></v-md-editor>
            <span v-show="errors.quoteRule" class="text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.quoteRule
            }}</span>
          </div>
        </Form>
        <Form ref="aboutEpilogueForm" :validation-schema="aboutEpilogueFormRules" v-slot="{ errors }"
          class="about-epilogue w-full mb-14">
          <div class="flex justify-between mb-8 flex-wrap mobile:mb-4">
            <h2 class="text-main-color-light mobile:text-3xl mobile:w-full mobile:mb-4">關於我們—結語</h2>
            <button class="admin-sbtn" @click.prevent="setEditMode('aboutEpilogueForm')"
              v-if="!aboutEpilogueEditMode">編輯標語</button>
            <button class="admin-edit-sbtn" @click.prevent="setConfirmModal('aboutEpilogueForm')"
              v-if="aboutEpilogueEditMode">儲存標語</button>
          </div>
          <div class="editer-inner view-mode mb-14" v-if="!aboutEpilogueEditMode">
            <v-md-preview class="markdown-body" :text="epilogueRef" height="400px"></v-md-preview>
          </div>
          <div class="editer-inner edit-mode md-container" v-if="aboutEpilogueEditMode">
            <Field v-show="false" name="epilogueRule" v-model="epilogueRef" />
            <v-md-editor class="markdown-body" v-model="epilogueRef" height="400px"></v-md-editor>
            <span v-show="errors.epilogueRule" class="text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.epilogueRule
            }}</span>
          </div>
        </Form>
      </div>
      <Footer class="absolute bottom-0 mobile:left-0" />
    </div>
  </div>
  <PopMessage @popBtnCheck="popBtnCheck"></PopMessage>
</template>
<script setup lang="ts">
import schema from '@/utils/vee-validate-schema'
import { Field, Form } from 'vee-validate';
import { sloganLoad, editHomeSlogan, mutAboutSlogan, mutAboutQuote, mutAboutEpilogue } from '@/api/about'
import { useDebounceFn, useElementBounding, watchThrottled } from '@vueuse/core'
// 取得路由
const route = useRoute()
const routeName = String(route.name)
const routeQuery = computed(() => String(route.query.edit));
const store = useStore();

// ================================= 設定送出表單欄位 =========================================

const pageTitle = ref("")
const pageTitleFirst = computed(() => pageTitle.value.split(" ")[0]);
const pageTitleLast = computed(() => pageTitle.value.replace(pageTitleFirst.value, ''));
const pageSubTitle = ref("")
const sloganRef = ref("")
const philosophyRef = ref("")
const quoteRef = ref("")
const epilogueRef = ref("")

// ================================= 設置表單容器開關 =========================================

const homeSloganEditMode = ref(false)
const aboutSloganEditMode = ref(false)
const aboutQuoteEditMode = ref(false)
const aboutEpilogueEditMode = ref(false)

// 開啟編輯狀態
function setEditMode(refName: string) {
  switch (refName) {
    case "homeSloganForm":
      homeSloganEditMode.value = true
      break;
    case "aboutSloganForm":
      aboutSloganEditMode.value = true
      break;
    case "aboutQuoteForm":
      aboutQuoteEditMode.value = true
      break;
    case "aboutEpilogueForm":
      aboutEpilogueEditMode.value = true
      break;
    default:
      break;
  }
}

// ================================= 驗證容器和規則 ================================= 

const homeSloganForm = ref({
  validate: () => { return { valid: false } }
})
const aboutSloganForm = ref({
  validate: () => { return { valid: false } }
})
const aboutQuoteForm = ref({
  validate: () => { return { valid: false } }
})
const aboutEpilogueForm = ref({
  validate: () => { return { valid: false } }
})
const homeSloganFormRules = {
  pageTitleRule: schema.required,
  pageSubTitleRule: schema.required,
}
const aboutSloganFormRules = {
  sloganRule: schema.required,
  philosophyRule: schema.required,
}
const aboutQuoteFormRules = {
  quoteRule: schema.required
}
const aboutEpilogueFormRules = {
  epilogueRule: schema.required
}

// ================================= 資料處理函式 =========================================

async function initSloganDate() {
  const sloganLoadRes = await sloganLoad(routeName)
  const aboutData = sloganLoadRes.data.aboutInfo
  const homeData = sloganLoadRes.data.pageInfo.filter(item => item.page_route === "Home")
  pageTitle.value = String(homeData[0].page_title)
  pageSubTitle.value = String(homeData[0].sub_page_title)
  sloganRef.value = String(aboutData.slogan)
  philosophyRef.value = String(aboutData.philosophy)
  quoteRef.value = String(aboutData.quote)
  epilogueRef.value = String(aboutData.epilogue)
}

// ================================= 送出表單 =========================================

// 設置活動表單欄位
const activeFormeRef = ref("")

// 跳出燈箱詢問是否確定新增?
function setConfirmModal(refName: string) {
  store.openPopMsg("確定儲存變更?", true)
  activeFormeRef.value = refName
}

// 確認框 Y/N
const popBtnCheckVal = computed(() => store.get_popMsgBtnReturn)

// 點擊確認
const popBtnCheck = useDebounceFn(async () => {
  const homeSloganFormCheck = await homeSloganForm.value.validate()
  const aboutSloganFormCheck = await aboutSloganForm.value.validate()
  const aboutQuoteFormCheck = await aboutQuoteForm.value.validate()
  const aboutEpilogueFormCheck = await aboutEpilogueForm.value.validate()
  await popBtnCheckVal
  switch (activeFormeRef.value) {
    case "homeSloganForm":
      if (popBtnCheckVal.value && homeSloganFormCheck.valid) {
        editHomeSlogan(pageTitle.value, pageSubTitle.value, routeName)
        homeSloganEditMode.value = false
      }
      break;
    case "aboutSloganForm":
      if (popBtnCheckVal.value && aboutSloganFormCheck.valid) {
        mutAboutSlogan(sloganRef.value, philosophyRef.value, routeName)
        aboutSloganEditMode.value = false
      }
      break;
    case "aboutQuoteForm":
      if (popBtnCheckVal.value && aboutQuoteFormCheck.valid) {
        mutAboutQuote(quoteRef.value, routeName)
        aboutQuoteEditMode.value = false
      }
      break;
    case "aboutEpilogueForm":
      if (popBtnCheckVal.value && aboutEpilogueFormCheck.valid) {
        mutAboutEpilogue(epilogueRef.value, routeName)
        aboutEpilogueEditMode.value = false
      }
      break;
    default:
      break;
  }
}, 1000)

// ================================= 監聽和滾動關於我們理念區塊 =========================================

const aboutSloganEditOuter = ref(null)
const aboutRect = reactive(useElementBounding(aboutSloganEditOuter))
function scrollToAbout() {
  setTimeout(() => {
    if (routeQuery.value === "about") {
      const top = aboutRect.top
      const origin = document.querySelector(".app-inner")
      if (origin) {
        origin.scrollTo({ 'behavior': 'smooth', 'top': 5 + top })
      }
    }
  }, 700)
}
watch(routeQuery, () => {
  scrollToAbout()
})

// ================================= 生命週期 =========================================

initSloganDate()

onMounted(() => {
  scrollToAbout()
});
</script>