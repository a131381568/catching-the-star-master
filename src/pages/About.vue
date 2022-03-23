<template>
  <Header />
  <div
    class="
      md:flex
      flex-wrap
      items-start
      justify-center
      pt-72
      pb-32
      2xl:px-20
      md:px-6
      px-4
    "
  >
    <!-- 標題區塊 -->
    <div class="w-10/12 mb-16 mt-3">
      <h4 class="uppercase text-main-color-light mb-4">About us</h4>
      <h1 class="text-white relative -left-2">關於我們</h1>
    </div>
    <!-- 主視覺 -->
    <div class="xl:w-5/12 lg:w-2/5 h-full">
      <img class="w-auto" src="/img/about-bg.jpg" />
    </div>
    <!-- 內文 -->
    <div class="xl:w-5/12 md:w-1/2 md:pl-24 md:mt-0 mt-6">
      <div
        class="
          callout-box
          bg-main-color-light
          p-10
          text-main-color-black
          font-bold
          mb-8
          border-l-callout-box-boder border-sub-color-dark
          relative
        "
      >
        我們是「雲上的小貓」，致力於寫下故事、留下故事。
        <span
          class="
            text-sub-color-dark text-9xl
            font-serif font-light
            absolute
            -top-2
            right-1
          "
          >”</span
        >
      </div>
      <div class="text-main-color-light">
        <p>
          人是被賦予豐富情感的動物，會笑、會哭、會憤怒、會感動，所以有溫度的故事是能夠觸動人心的，甚至能夠在心中種下一顆希望的種子，在未來成長為茁壯的大樹。<br />
          &nbsp;<br />
          正因凡走過必留下痕跡，可以是歷史？<br />
          也可以是虛構的童話？<br />
          不管它是什麼？<br />
          &nbsp;<br />
          總會能夠會帶給我們些什麼？<br />
          對吧？<br />
          &nbsp;<br />
          無論是虛無飄渺的疑問？還是膽戰心驚的恐懼？又或著肯定的勇氣？每個人都有故事，因為這是我們自己開啟的故事——。
        </p>
      </div>
    </div>
  </div>
  <!-- 引言 -->
  <div
    class="
      md:flex
      flex-wrap
      items-start
      justify-center
      py-24
      px-4
      bg-main-color-black
      text-main-color-light
    "
  >
    <div class="w-10/12 text-center">
      <img class="mx-auto mb-10" src="/svg/hand.svg" />
      <p>
        「我和他就好像天上的星星，遠看好像距離很近，但實際上卻是相當遙遠的。」<br />
        &nbsp;<br />
        「這片夜空中，只有一顆星星在微弱的閃鑠著，好像很孤單一樣？但是我們每個人只要一抬頭就能看見它，<br />
        所以即使身在遠方，星星也能夠獨自努力發光了。」<br />
        &nbsp;<br />
        ——《虎與龍》
      </p>
    </div>
  </div>
  <!-- 結語區塊 -->
  <div class="md:flex flex-wrap items-start justify-center py-24 px-4 bg-white">
    <div class="w-10/12 text-left text-main-color-black">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe
        quod tenetur! Enim delectus, doloremque consectetur esse dolores
        exercitationem ratione obcaecati odit in laudantium reiciendis debitis?
        Suscipit fugiat fuga voluptas!
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
