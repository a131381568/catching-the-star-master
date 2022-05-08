<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative">
      <!-- 標題區塊 -->
      <div
        class="single-organ-title-box w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap">
        <h1
          class="text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5">
          {{ organizationTitle }}</h1>
        <button @click.prevent="setConfirmModal"
          :class="{ 'pointer-events-none': !facilitiesTitle || !facilitiesDescription || !facilitiesImagePath || !facilitiesLink }"
          class="flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 text-center items-center p-0 justify-center">
          {{ organizationSaveBtn }}
        </button>
      </div>
      <!-- 表單區塊 -->
      <Form ref="addPlaceForm" :validation-schema="verifyRules" v-slot="{ errors }"
        class="w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between">
        <div class="w-table:w-5/12 w-full">
          <!-- 機構名稱 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">機構名稱</h4>
            <Field name="facilitiesTitleRef" type="text" class="h-16 block m-auto bottom-line-input text-lg"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.facilitiesTitleRef }"
              v-model="facilitiesTitle" />
            <span v-show="errors.facilitiesTitleRef"
              class="organ-title-error-tip text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                  errors.facilitiesTitleRef
              }}</span>
          </div>
          <!-- 外部連結 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">外部連結</h4>
            <Field name="facilitiesLinkRef" type="text" class="h-16 block m-auto bottom-line-input text-lg"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.facilitiesLinkRef }"
              v-model="facilitiesLink" />
            <span v-show="errors.facilitiesLinkRef"
              class="organ-link-error-tip text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                  errors.facilitiesLinkRef
              }}</span>
          </div>
          <!-- 機構介紹 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">機構介紹</h4>
            <Field name="facilitiesDescriptionRef" type="text" as="textarea"
              class="bottom-line-input h-130px resize-none block m-auto text-lg pt-4"
              :class="{ 'border-sp-color-dark border-opacity-100': errors.facilitiesDescriptionRef }"
              v-model="facilitiesDescription" />
            <span v-show="errors.facilitiesDescriptionRef"
              class="organ-des-error-tip text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                  errors.facilitiesDescriptionRef
              }}</span>
          </div>
        </div>
        <div class="w-table:w-5/12 w-full">
          <div class="animate__animated h-52 w-full bg-no-repeat bg-cover bg-center "
            :style="{ 'background-image': 'url(' + uploadImgPath + ')' }"
            :class="[{ 'animate__fadeIn': localBgOpacity }, { 'animate__fadeOut': !localBgOpacity }]">
          </div>
          <div class="upload-bar flex justify-between mt-7 mb-1">
            <h4 class="text-main-color-light font-normal">機構圖片</h4>
            <label class="cursor-pointer admin-sbtn relative flex items-center justify-center">上傳圖片
              <Field name="facilitiesImagePathRef" v-model="facilitiesImagePath" class="update-btn hidden" type="file"
                @change="updateFileAct($event)" />
            </label>
          </div>
          <h5 class="text-main-color-light mb-7">{{ facilitiesImage }}</h5>

          <span v-show="errors.facilitiesImagePathRef"
            class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                errors.facilitiesImagePathRef
            }}</span>
        </div>
        <div class="w-table:w-10/12 w-full" v-if="routeName === 'EditSingleOrganization'">
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
import { editStargazer } from '@/api/stargazing'
import { deleteOrganization, setNewOrganization, getSingleOrganization, mutOrganization } from '@/api/facilities'
import { updateFile } from '@/api/utils'
import { useDebounceFn, onClickOutside } from '@vueuse/core'
// 取得路由
const route = useRoute()
const router = useRouter()
const routeName = String(route.name)
const routeOid = Number(route.params.oid)
const store = useStore();

// ================================= 設置新增/編輯的標題和按鈕 =================================

const organizationTitle = computed(() => {
  if (routeName === "AddSingleOrganization") {
    return "新增機構"
  } else {
    return "編輯機構"
  }
})

const organizationSaveBtn = computed(() => {
  if (routeName === "AddSingleOrganization") {
    return "儲存新增"
  } else {
    return "儲存編輯"
  }
})

// ================================= 設定送出表單欄位 =========================================

const addPlaceForm = ref({
  validate: () => { return { valid: false } }
})

const facilitiesTitle = ref("")
const facilitiesLink = ref("")
const facilitiesDescription = ref("")
const facilitiesImage = ref("")  // 圖片名稱
const facilitiesImagePath = ref("")  // 圖片路徑
const verifyRules = {
  facilitiesTitleRef: schema.required,
  facilitiesLinkRef: schema.required,
  facilitiesDescriptionRef: schema.required,
  facilitiesImagePathRef: schema.image
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
      facilitiesImage.value = res.data.singleUpload.filename
      facilitiesImagePath.value = res.data.singleUpload.s3Path
    }
  }
}

// 抓取上傳圖片路由
const localBgOpacity = ref(true)
const uploadImgPath = computed(() => {
  if (facilitiesImagePath.value) {
    setTimeout(() => {
      localBgOpacity.value = true
    }, 1000);
    return facilitiesImagePath.value
  } else {
    setTimeout(() => {
      localBgOpacity.value = true
    }, 1000);
    return '/assets/bg/default-image-438x438.gif'
  }
})

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
  store.openPopMsg("確定" + organizationTitle.value + "?", true)
}

// 確認框 Y/N
const popBtnCheckVal = computed(() => store.get_popMsgBtnReturn)

// 點擊確認
async function popBtnCheck() {
  await popBtnCheckVal
  if (popBtnCheckVal.value && !modelDelMode.value) {
    actionAddPlace()
  }
  if (popBtnCheckVal.value && modelDelMode.value) {
    // console.log("走刪除路線")
    actionDelPlace()
  }
  if (!popBtnCheckVal.value) {
    modelDelMode.value = false
    // console.log("取消刪除: ", modelDelMode.value)
  }
}

// 送出防抖表單
const actionAddPlace = useDebounceFn(async () => {
  const { valid } = await addPlaceForm.value.validate()
  await popBtnCheckVal
  if (valid && popBtnCheckVal.value) {
    if (routeName === "AddSingleOrganization") {
      // 如果是新增版型
      console.log("可以新增")
      const res = await setNewOrganization(
        facilitiesTitle.value,
        facilitiesDescription.value,
        facilitiesImagePath.value,
        facilitiesLink.value,
        routeName
      )
      if (res.data.setNewOrganization.code) {
        if (res.data.setNewOrganization.code > 0) {
          router.push("/board/organization")
        } else {
          store.openPopMsg(res.data.setNewOrganization.message, false)
        }
      }
    } else {
      // 如果是編輯版型
      console.log("可以編輯")
      const res = await mutOrganization(
        routeOid,
        facilitiesTitle.value,
        facilitiesDescription.value,
        facilitiesImagePath.value,
        facilitiesLink.value,
        routeName
      )
      if (res.data.mutOrganization.code) {
        if (res.data.mutOrganization.code > 0) {
          router.push("/board/organization")
        } else {
          store.openPopMsg(res.data.mutOrganization.message, false)
        }
      }
    }
  }
}, 1000)

// 送出刪除表單
const actionDelPlace = async () => {
  console.log("可以刪除")
  await deleteOrganization(routeOid, routeName)
  await setTimeout(() => {
    router.push("/board/organization")
  }, 1000);
}

// ================================= 取得指定 oid 機構資料 =========================================

async function loadEditOrganization() {
  if (routeName === "EditSingleOrganization" && routeOid) {
    const res = await getSingleOrganization(routeOid, routeName)
    facilitiesTitle.value = String(res.data.getSingleOrganization.facilities_title)
    facilitiesDescription.value = String(res.data.getSingleOrganization.facilities_description)
    facilitiesLink.value = String(res.data.getSingleOrganization.facilities_link)
    let path = String(res.data.getSingleOrganization.facilities_image)
    let split = path.split('/')
    facilitiesImage.value = split[split.length - 1]
    facilitiesImagePath.value = path
  }
}

// ================================= 生命週期 =========================================

// 僅在編輯版型 load 資料
loadEditOrganization()
</script>