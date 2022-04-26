<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative">
      <!-- 標題區塊 -->
      <div class="w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap">
        <h1
          class="text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5">
          {{ categoriesTitle }}</h1>
        <button @click.prevent="setConfirmModal"
          class="flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 btn text-center items-center p-0 justify-center">
          {{ categoriesSaveBtn }}
        </button>
      </div>
      <!-- 表單區塊 -->
      <Form ref="addCategoriesForm" :validation-schema="verifyRules" v-slot="{ errors }"
        class="w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between">
        <div class="w-table:w-5/12 w-full">
          <!-- 地點名稱 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">分類名稱</h4>
            <Field name="categoryNameRef" type="text" class="h-16 block m-auto bottom-line-input text-lg"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.categoryNameRef }" v-model="categoryName" />
            <span v-show="errors.categoryNameRef" class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                errors.categoryNameRef
            }}</span>
          </div>
          <!-- 地址說明 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">分類 ID</h4>
            <Field name="categoryIdRef" type="text" class="h-16 block m-auto bottom-line-input text-lg" :class="[
              { 'border-sp-color-dark border-opacity-100': errors.categoryIdRef },
              { 'pointer-events-none border-0': routeName === 'EditSingleCategories' }
            ]" v-model="categoryId" />
            <span v-show="errors.categoryIdRef" class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                errors.categoryIdRef
            }}</span>
          </div>
        </div>
      </Form>
      <div class="w-table:w-9/12 w-full" v-if="routeName === 'EditSingleCategories'">
        <button class="admin-delete-sbtn" @click.prevent="setDelConfirmModal()">
          刪除
        </button>
      </div>
      <Footer class="absolute bottom-0 mobile:left-0" />
    </div>
  </div>
  <PopMessage @popBtnCheck="popBtnCheck"></PopMessage>
</template>
<script setup lang="ts">
import schema from '@/utils/vee-validate-schema'
import { Field, Form } from 'vee-validate';
import { deleteCategory, mutCategory, setNewCategory, getSingleCategory } from '@/api/science'
import { useDebounceFn } from '@vueuse/core'
// 取得路由
const route = useRoute()
const router = useRouter()
const routeName = String(route.name)
const routeCid = String(route.params.cid)
const store = useStore();

// ================================= 設置新增/編輯的標題和按鈕 =================================

const categoriesTitle = computed(() => {
  if (routeName === "AddSingleCategories") {
    return "新增文章分類"
  } else {
    return "編輯文章分類"
  }
})

const categoriesSaveBtn = computed(() => {
  if (routeName === "AddSingleCategories") {
    return "儲存新增"
  } else {
    return "儲存編輯"
  }
})

// ================================= 設定送出表單欄位 =========================================

const addCategoriesForm = ref({
  validate: () => { return { valid: false } }
})

const categoryName = ref("")
const categoryId = ref("")
const verifyRules = {
  categoryNameRef: schema.required,
  categoryIdRef: schema.required
}

// ================================= 送出表單 =========================================

// 設置刪除模式欄位
const modelDelMode = ref(false)

// 跳出燈箱詢問是否確定刪除?
function setDelConfirmModal() {
  modelDelMode.value = true
  store.openPopMsg("確定刪除文章分類?", true)
}

// 跳出燈箱詢問是否確定新增?
function setConfirmModal() {
  modelDelMode.value = false
  store.openPopMsg("確定" + categoriesTitle.value + "?", true)
}

// 確認框 Y/N
const popBtnCheckVal = computed(() => store.get_popMsgBtnReturn)

// 點擊確認
async function popBtnCheck() {
  await popBtnCheckVal
  if (popBtnCheckVal.value && !modelDelMode.value) {
    actionAddCategories()
  }
  if (popBtnCheckVal.value && modelDelMode.value) {
    // console.log("走刪除路線")
    actionDelCategory()
  }
  if (!popBtnCheckVal.value) {
    modelDelMode.value = false
    // console.log("取消刪除: ", modelDelMode.value)
  }
}

// 送出防抖表單
const actionAddCategories = useDebounceFn(async () => {
  const { valid } = await addCategoriesForm.value.validate()
  await popBtnCheckVal
  if (valid && popBtnCheckVal.value) {
    if (routeName === "AddSingleCategories") {
      // 如果是新增版型
      console.log("可以新增")
      const res = await setNewCategory(
        String(categoryName.value),
        String(categoryId.value),
        routeName
      )
      if (res.data.setNewCategory.code) {
        if (res.data.setNewCategory.code > 0) {
          router.push("/board/categories")
        } else {
          store.openPopMsg(res.data.setNewCategory.message, false)
        }
      }
    } else {
      // 如果是編輯版型
      console.log("可以編輯")
      const res = await mutCategory(String(categoryName.value), routeCid, routeName)
      if (res.data.mutCategory.code) {
        if (res.data.mutCategory.code > 0) {
          router.push("/board/categories")
        } else {
          store.openPopMsg(res.data.mutCategory.message, false)
        }
      }
    }
  }
}, 1000)


// 送出刪除表單
const actionDelCategory = async () => {
  console.log("可以刪除")
  await deleteCategory(routeCid, routeName)
  await setTimeout(() => {
    router.push("/board/categories")
  }, 1000);
}


// ================================= 取得指定 cid 文章分類資料 =========================================

async function loadEditCategory() {
  const res = await getSingleCategory(routeCid, routeName)
  categoryName.value = String(res.data.getSingleCategory.post_category_name)
  categoryId.value = String(res.data.getSingleCategory.post_category_id)
}

// ================================= 生命週期 =========================================

// 僅在編輯版型 load 資料
loadEditCategory()

</script>