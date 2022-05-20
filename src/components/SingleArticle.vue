<template>
  <div class="flex items-stretch">
    <AdminSidebar />
    <div 
      class="laptop:w-4/5 laptop:left-0 left-7 mobile:left-11 w-full mobile:w-admin-m-content h-table:flex flex-wrap items-start justify-center content-start middle-pc:pt-36 h-table:pt-32 pb-52 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32 relative"
      @click.self="closeDefaultMenu()"
    >
      <!-- 標題區塊 -->
      <div
        class="post-title-box w-9/12 mobile:w-11/12 flex justify-between mb-20 mobile:mb-9 mobile:block mobile:mx-auto flex-wrap">
        <h1
          class="text-white relative -left-2 -top-2 mobile:text-5xl w-table:w-3/4 w-full mobile:w-full w-table:m-0 mb-5">
          {{ articleTitle }}</h1>
        <button
          :class="{ 'pointer-events-none': !postTitle || !postContent || !selectCat || !postImgPath }"
          class="flex btn draw meet text-lg w-2/12 mobile:w-full mobile:mt-6 h-12 text-center items-center p-0 justify-center"
          @click.prevent="setConfirmModal">
          {{ articleSaveBtn }}
        </button>
      </div>
      <!-- 表單區塊 -->
      <Form
        ref="addArticleForm" v-slot="{ errors }" :validation-schema="verifyRules"
        class="w-9/12 flex flex-wrap mobile:w-11/12 table-container mobile:m-auto justify-between editer-container">
        <div class="pro-pc:w-7/12 middle-pc:w-2/3 w-full flex content-center large-pc:mb-0 mb-14 mobile:flex-wrap">
          <!-- 上傳封面圖片 -->
          <div
            class="flex-shrink-0 animate__animated h-304px w-304px mini-mobile:w-200px mini-mobile:h-200px bg-no-repeat bg-cover bg-center rounded-full"
            :style="{ 'background-image': 'url(' + uploadImgPath + ')' }"
            :class="[{ 'animate__fadeIn': localBgOpacity }, { 'animate__fadeOut': !localBgOpacity }]">
          </div>
          <div class="flex-shrink-0 upload-bar mobile:mt-7 self-center relative h-table:left-8">
            <h4 class="text-main-color-light font-normal w-full mb-4">封面圖片</h4>
            <h5 class="text-main-color-light mb-4 truncate w-10/12">{{ postImg }}</h5>
            <label class="cursor-pointer admin-sbtn relative w-24 flex justify-center pt-1">上傳圖片
              <Field
                v-model="postImgPath" name="postImgPathRef" class="update-btn hidden" type="file"
                @change="updateFileAct($event)" />
            </label>
            <span v-show="errors.postImgPathRef" class="text-sp-color-dark text-xs w-full h-5 block m-auto mt-4">{{
                errors.postImgPathRef
            }}</span>
          </div>
        </div>
        <div class="pro-pc:w-5/12 large-pc:w-1/3 w-full">
          <!-- 文章標題 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal">文章標題</h4>
            <Field
              v-model="postTitle" name="postTitleRef" type="text"
              class="post-title-input h-16 block m-auto bottom-line-input text-lg" :class="{ 'border-sp-color-dark border-opacity-100': errors.postTitleRef }" />
            <span
              v-show="errors.postTitleRef"
              class="post-title-input-error-tip text-sp-color-dark text-xs w-full h-5 block m-auto mt-2">{{
                  errors.postTitleRef
              }}</span>
          </div>
          <!-- 文章分類 -->
          <div class="input-group mb-14">
            <h4 class="text-main-color-light font-normal mb-4">文章分類</h4>
            <Field v-show="false" v-model="selectCat" name="selectCatRule" type="text" class="post-cat-input" />
            <!-- 選單樣式 -->
            <div class="post-cat-select dropdown-menu z-40 w-full mb-4 relative animate__animated animate__fadeIn">
              <button
                id="dropdownDefault"
                class="w-full duration-1000 text-main-color-light border border-white border-opacity-30 hover:border-opacity-0 bg-opacity-0 bg-white hover:bg-opacity-18 hover:text-sub-color-light focus:bg-opacity-18 focus:outline-none focus:border-opacity-0 focus:text-sub-color-light text-lg pl-4 p-3 relative text-center inline-flex items-center tracking-wide-content"
                type="button" @click.prevent="toggleFilter()">
                {{ selectName }}
                <svg
                  class="ml-2 w-4 h-4 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                v-show="toggleFilterVal" id="dropdown"
                class="z-10 bg-main-color-light divide-y divide-gray-100 absolute w-full">
                <ul class="py-1 text-sm text-main-color-black cursor-pointer">
                  <!-- <li class="tracking-wide-content block py-2 px-4 hover:text-sub-color-dark">選擇分類</li> -->
                  <li
                    v-for="(val, key) in filterCategories" :key="key"
                    class="tracking-wide-content block py-2 px-4 hover:text-sub-color-dark"
                    @click.stop="selectDropCat(String(val.post_category_id))">{{ val.post_category_name }}
                  </li>
                </ul>
              </div>
            </div>
            <span
              v-show="errors.selectCatRule"
              class="post-cat-select-error-tip text-sp-color-dark text-xs w-full h-5 block m-auto">{{
                  errors.selectCatRule
              }}</span>
          </div>
        </div>
        <div class="w-full editer-inner edit-mode md-container mt-16">
          <Field v-show="false" v-model="postContent" name="postContentRef" />
          <v-md-editor v-model="postContent" class="markdown-body" height="550px"></v-md-editor>
          <span
            v-show="errors.postContentRef"
            class="post-content-error-tip text-sp-color-dark text-xs w-full h-5 block mt-2">{{
                errors.postContentRef
            }}</span>
        </div>
        <div v-if="routeName === 'EditSingleArticle'" class="middle-pc:w-10/12 w-full mt-16">
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
import { ArtistsCategories } from '@/types/graphql/types'
import schema from '@/utils/vee-validate-schema'
import { Field, Form } from 'vee-validate';
import { artistsCategories } from '@/api/science'
import { setNewPost, deletePost, getSinglePostById, mutSinglePost } from '@/api/science'
import { updateFile } from '@/api/utils'
import { useDebounceFn,useToggle } from '@vueuse/core'
// 取得路由
const route = useRoute()
const router = useRouter()
const routeName = String(route.name)
const routePid = Number(route.params.pid)
const store = useStore();

// ================================= 設置新增/編輯的標題和按鈕 =================================

const articleTitle = computed(() => {
  if (routeName === "AddSingleArticle") {
    return "新增文章"
  } else {
    return "編輯文章"
  }
})

const articleSaveBtn = computed(() => {
  if (routeName === "AddSingleArticle") {
    return "儲存新增"
  } else {
    return "儲存編輯"
  }
})

// ================================= 設定送出表單欄位 =========================================

const addArticleForm = ref({
  validate: () => { return { valid: false } }
})

const postTitle = ref("")
const postImg = ref("")  // 圖片名稱
const postImgPath = ref("")  // 圖片路徑
const postContent = ref("")
const verifyRules = {
  postTitleRef: schema.required,
  selectCatRule: schema.required,
  postImgPathRef: schema.image,
  postContentRef: schema.required
}
const [toggleFilterVal, toggleFilter] = useToggle()
const selectCat = ref("")
const filterCategories = ref<ArtistsCategories>([])
const selectName = computed(() => {
  let active = store.changeCatName(filterCategories.value, selectCat.value)
  if (active) {
    return active
  } else {
    return "選擇分類"
  }
})


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
      postImg.value = res.data.singleUpload.filename
      postImgPath.value = res.data.singleUpload.s3Path
    }
  }
}

// 抓取上傳圖片路由
const localBgOpacity = ref(true)
const uploadImgPath = computed(() => {
  if (postImgPath.value) {
    setTimeout(() => {
      localBgOpacity.value = true
    }, 1000);
    return postImgPath.value
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
  store.openPopMsg("確定刪除觀星地點?", true)
}

// 跳出燈箱詢問是否確定新增/編輯?
function setConfirmModal() {
  modelDelMode.value = false
  store.openPopMsg("確定" + articleTitle.value + "?", true)
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
  const { valid } = await addArticleForm.value.validate()
  await popBtnCheckVal
  if (valid && popBtnCheckVal.value) {
    if (routeName === "AddSingleArticle") {
      // 如果是新增版型
      console.log("可以新增")
      const res = await setNewPost(
        postTitle.value,
        selectCat.value,
        postContent.value,
        postImgPath.value,
        routeName
      )
      if (res.data.setNewPost.code) {
        if (res.data.setNewPost.code > 0) {
          router.push("/board/article")
        } else {
          store.openPopMsg(res.data.setNewPost.message, false)
        }
      }
    } else {
      // 如果是編輯版型
      console.log("可以編輯")
      const res = await mutSinglePost(routePid, postTitle.value, selectCat.value, postContent.value, postImgPath.value, routeName)
      if (res.data.mutSinglePost.code) {
        if (res.data.mutSinglePost.code > 0) {
          router.push("/board/article")
        } else {
          store.openPopMsg(res.data.mutSinglePost.message, false)
        }
      }
    }
  }
}, 1000)

// 送出刪除表單
const actionDelPlace = async () => {
  console.log("可以刪除")
  await deletePost(routePid, routeName)
  await setTimeout(() => {
    router.push("/board/article")
  }, 1000);
}


// ============================== 分類選單 ==============================

// 開啟分類選單
function selectDropCat(catId: string) {
  toggleFilterVal.value = false
  selectCat.value = catId
}

// 關閉分類選單
function closeDefaultMenu() {
  if (toggleFilterVal.value === true) {
    toggleFilterVal.value = false
  }
}

// 請求分類
async function getArtistsCategories() {
  const res = await artistsCategories(routeName, false)
  const filterBar = res.data.artistsCategories.filter(item => item.post_category_id !== '')
  filterCategories.value = filterBar
}

// ============================== 取得指定 cid 資料 ==============================

async function loadEditArtcle() {
  if (routeName === "EditSingleArticle" && routePid) {
    const res = await getSinglePostById(routePid, routeName, false)
    postTitle.value = String(res.data.getSinglePost.title)
    postContent.value = String(res.data.getSinglePost.content)
    selectCat.value = String(res.data.getSinglePost.categoryid)
    let path = String(res.data.getSinglePost.image.replace(/\s+/g, ''))
    let split = path.split('/')
    postImg.value = split[split.length - 1]
    postImgPath.value = path

    // 如果是未分類就清空值
    if (selectName.value === '選擇分類') {
      selectCat.value = ""
    }
  }
}

// ================================= 生命週期 =========================================

onBeforeMount(async () => {
  await getArtistsCategories()
  await loadEditArtcle()
})
</script>