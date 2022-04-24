<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32">
    <!-- 標題區塊 -->
    <TitleBox />
    <!-- 瀏覽 md 區塊 -->
    <div
      class="animate__animated animate__fadeIn h-table:w-10/12 bg-opacity-6 bg-white text-main-color-light laptop:p-20 p-10 mobile:p-8 middle-pc:mt-16 mt-8 md-container"
      :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
      <v-md-preview class="markdown-body" :text="mdContent" height="400px"></v-md-preview>
      <!-- <singlePost /> -->
    </div>
    <div class="h-table:w-10/12 h-table:mt-8 mt-5">
      <span class="text-main-color-light text-tiny">{{ date }},</span>
      <router-link class="text-sub-color-light text-tiny" :to="'/archive/' + tag.catId">{{ tag.name }}</router-link>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { getSinglePostById, artistsCategories } from '@/api/science'
// import { markContent } from '@/api/user'
// import singlePost from '@/assets/md/single_post.md'
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
// 取得路由
const route = useRoute();
const router = useRouter();
const routeName = String(route.name)
const getSid = computed(() => Number(route.params.sid));
const date = ref("")
const tag = ref({ name: "", catId: "" })
const mdContent = ref("")

onMounted(async () => {
  // 取得分類  
  const artistsCatRes = await artistsCategories(routeName)
  // 判斷參數是否正常
  if (getSid.value) {
    // 取得單一資料
    const artistsData = await getSinglePostById(getSid.value, routeName)
    if (artistsData.data.getSinglePost) {
      // 查詢分類物件
      const artistCatActName = store.changeCatName(
        artistsCatRes.data.artistsCategories,
        artistsData.data.getSinglePost.categoryid
      )
      // 設置標題
      store.setPageTitle(artistsData.data.getSinglePost.title)
      store.setPageSubTitlee(artistCatActName)
      // 設置內文
      mdContent.value = artistsData.data.getSinglePost.content
      date.value = store.changeDate(Number(artistsData.data.getSinglePost.updatetime))
      tag.value = {
        name: artistCatActName,
        catId: artistsData.data.getSinglePost.categoryid
      }
    } else {
      router.push("/notfound")
    }
  } else {
    router.push("/notfound")
  }
});
</script>
