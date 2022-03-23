<template>
  <h2 class="!mt-0">111111111111111</h2>
  <button
    class="px-3 py-2 bg-white border border-gray-300 rounded-md shadow max-h-96"
  >
    count is: 3333
  </button>
  <p>儲存<code>count</code>至<em>pinia</em></p>
  <hr />
  <button class="px-3 py-2 bg-white border border-gray-300 rounded-md shadow">
    countA is: 222
  </button>
  <p>儲存<code>countA</code>至<em>pinia</em></p>
  <hr />
  <ul>
    <li>
      <router-link to="/">首頁</router-link>
    </li>
    <li>
      <router-link to="/about">關於我們</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
// useStore, and computed are automatically imported. See vite.config.ts for details.
</script>
