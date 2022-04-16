<template>
  <Header />
  <div
    class="h-table:flex flex-wrap items-start justify-center middle-pc:pt-72 h-table:pt-32 pb-32 middle-pc:px-20 h-table:px-6 px-8 mobile:pt-32">
    <!-- 標題區塊 -->
    <div class="w-10/12 mb-16 mt-3 animate__animated animate__fadeIn animate__delay-1s">
      <h4 class="uppercase text-main-color-light mb-4">Login</h4>
      <h1 class="text-white relative -left-2 mobile:text-5xl">登入管理後臺</h1>
    </div>
    <!-- 返回按鈕 -->
    <div class="w-10/12">
      <!-- 登入 -->
      <input type="text" class="w-48 h-8 block" placeholder="帳號" v-model="loginAccount" />
      <input type="password" class="w-48 h-8 block" placeholder="密碼" v-model="loginPassword" />

      <!-- link -->
      <button @click.prevent="actionLoginAuth"
        class="w-48 btn draw meet inline-block animate__animated animate__flipInX"
        :class="[{ 'animate__delay-4s': getFirstEnter === true }, { 'animate__delay-1s': getFirstEnter === false }]">
        <span>登入</span>
      </button>

      <hr />
      <button class="btn" @click.prevent="getSelfInfo">取得個人資訊</button>
    </div>
  </div>

  <Footer class="absolute left-0 bottom-0 screens-h-500:relative animate__animated animate__fadeIn"
    :class="[{ 'animate__delay-5s': getFirstEnter === true }, { 'animate__delay-2s': getFirstEnter === false }]" />
</template>
<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { loginAuthentication, getSelfInfo } from '@/api/utils'
const store = useStore();
const getFirstEnter = computed(() => store.get_firstEnter);
const loginAccount = ref("")
const loginPassword = ref("")

async function actionLoginAuth() {
  const res = await loginAuthentication(loginAccount.value, loginPassword.value)
  console.log(res)
  if (res) {
    const personalInfo = res.data.login
    await localStorage.setItem("token", personalInfo.token)
    // await useStorage("token", jwtToken)
    // const personalInfo = await getSelfInfo()
    await localStorage.setItem("expired", personalInfo.exp)
    await localStorage.setItem("id", personalInfo.id)
    // await useStorage("expired", personalInfo.data.me.exp)
    // await useStorage("id", personalInfo.data.me.id)
  }
}

</script>