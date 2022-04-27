<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative">
      <!-- 標題區塊 -->
      <div class="w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap">
        <h1
          class="text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5">
          {{ observatoriesTitle }}</h1>
        <button @click.prevent="setConfirmModal"
          class="flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 text-center items-center p-0 justify-center">
          {{ observatoriesSaveBtn }}
        </button>
      </div>
      <!-- 表單區塊 -->
      <Form ref="formRef" :validation-schema="verifyRules" v-slot="{ errors }"
        class="w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between">
        <div class="w-table:w-5/12 w-full">
          <!-- 天文台分類 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">天文台分類</h4>
            <Field name="observatoriesTitleRef" type="text" class="h-16 block m-auto bottom-line-input text-lg"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.observatoriesTitleRef }"
              v-model="observatoryTitle" />
            <span v-show="errors.observatoriesTitleRef"
              class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                  errors.observatoriesTitleRef
              }}</span>
          </div>
        </div>
        <div class="w-table:w-5/12 w-full">
          <!-- 分類 ID -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">分類 ID</h4>
            <Field name="observatoriesCatIdRef" type="text" class="h-16 block m-auto bottom-line-input text-lg"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.observatoriesCatIdRef }"
              v-model="observatoryCatId" />
            <span v-show="errors.observatoriesCatIdRef"
              class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                  errors.observatoriesCatIdRef
              }}</span>
          </div>
        </div>
        <div class="w-full editer-container">
          <!-- MD 編輯器 -->
          <div class="w-full editer-inner edit-mode md-container">
            <h4 class="text-main-color-light font-normal">表格內容</h4>
            <Field v-show="false" name="observatoriesContentRef" v-model="observatoryContnet" />
            <v-md-editor class="markdown-body" v-model="observatoryContnet" height="550px"></v-md-editor>
            <span v-show="errors.observatoriesContentRef" class="text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.observatoriesContentRef
            }}</span>
          </div>
        </div>
        <div class="w-table:w-10/12 w-full" v-if="routeName === 'EditSingleObservatories'">
          <button class="admin-delete-sbtn" @click.prevent="setDelConfirmModal()">
            刪除
          </button>
        </div>
      </Form>
      <Footer class="absolute bottom-0 mobile:left-0" />
    </div>
  </div>
  <PopMessage @popBtnCheck="popBtnCheck"></PopMessage>
</template>
<script setup lang="ts">
import schema from '@/utils/vee-validate-schema'
import { Field, Form } from 'vee-validate';
import { deleteObservatories, setNewOrganization, getSingleOrganization, mutOrganization } from '@/api/facilities'
import { useDebounceFn } from '@vueuse/core'
// 取得路由
const route = useRoute()
const router = useRouter()
const routeName = String(route.name)
const routeMid = String(route.params.mid)
const store = useStore();

// ================================= 設置新增/編輯的標題和按鈕 =================================

const observatoriesTitle = computed(() => {
  if (routeName === "AddSingleObservatories") {
    return "新增天文台"
  } else {
    return "編輯天文台"
  }
})

const observatoriesSaveBtn = computed(() => {
  if (routeName === "AddSingleObservatories") {
    return "儲存新增"
  } else {
    return "儲存編輯"
  }
})

// ================================= 設定送出表單欄位 =========================================

const formRef = ref({
  validate: () => { return { valid: false } }
})

const observatoryTitle = ref("")
const observatoryCatId = ref("")
const observatoryContnet = ref("")
const verifyRules = {
  observatoriesTitleRef: schema.required,
  observatoriesCatIdRef: schema.required,
  observatoriesContentRef: schema.required,
}

// ================================= 送出表單 =========================================

// 設置刪除模式欄位
const modelDelMode = ref(false)

// 跳出燈箱詢問是否確定刪除?
function setDelConfirmModal() {
  modelDelMode.value = true
  store.openPopMsg("確定刪除?", true)
}

// 跳出燈箱詢問是否確定新增/編輯?
function setConfirmModal() {
  modelDelMode.value = false
  store.openPopMsg("確定" + observatoriesTitle.value + "?", true)
}

// 確認框 Y/N
const popBtnCheckVal = computed(() => store.get_popMsgBtnReturn)

// 點擊確認
async function popBtnCheck() {
  await popBtnCheckVal
  if (popBtnCheckVal.value && !modelDelMode.value) {
    actionAdd()
  }
  if (popBtnCheckVal.value && modelDelMode.value) {
    // console.log("走刪除路線")
    actionDel()
  }
  if (!popBtnCheckVal.value) {
    modelDelMode.value = false
    // console.log("取消刪除: ", modelDelMode.value)
  }
}

// 送出防抖表單
const actionAdd = useDebounceFn(async () => {
  const { valid } = await formRef.value.validate()
  await popBtnCheckVal
  if (valid && popBtnCheckVal.value) {
    if (routeName === "AddSingleObservatories") {
      // 如果是新增版型
      console.log("可以新增")
      // const res = await setNewOrganization(
      //   observatoryTitle.value,
      //   observatoryContnet.value,
      //   observatoryCatId.value,
      //   routeName
      // )
      // if (res.data.setNewOrganization.code) {
      //   if (res.data.setNewOrganization.code > 0) {
      //     router.push("/board/organization")
      //   } else {
      //     store.openPopMsg(res.data.setNewOrganization.message, false)
      //   }
      // }
    } else {
      // 如果是編輯版型
      console.log("可以編輯")
      // const res = await mutOrganization(
      //   routeMid,
      //   observatoryTitle.value,
      //   observatoryContnet.value,
      //   observatoryCatId.value,
      //   routeName
      // )
      // if (res.data.mutOrganization.code) {
      //   if (res.data.mutOrganization.code > 0) {
      //     router.push("/board/organization")
      //   } else {
      //     store.openPopMsg(res.data.mutOrganization.message, false)
      //   }
      // }
    }
  }
}, 1000)

// 送出刪除表單
const actionDel = async () => {
  console.log("可以刪除")
  await deleteObservatories(routeMid, routeName)
  await setTimeout(() => {
    router.push("/board/observatories")
  }, 1000);
}

// ================================= 取得指定 oid 機構資料 =========================================

async function loadEditObservatories() {
  if (routeName === "EditSingleObservatories" && routeMid) {
    // const res = await getSingleOrganization(routeMid, routeName)
    // observatoryTitle.value = res.data.getSingleOrganization.facilities_title
    // observatoryContnet.value = res.data.getSingleOrganization.facilities_description
    // observatoryCatId.value = res.data.getSingleOrganization.facilities_link
  }
}

// ================================= 生命週期 =========================================

// 僅在編輯版型 load 資料
loadEditObservatories()
</script>