/// <reference types="vitest" />
// import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import pkg from './package.json'

import Markdown from 'vite-plugin-md'

process.env.VITE_APP_VERSION = pkg.version
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

const path = require('path')

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  base: './',
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
      include: [/\.vue$/, /\.md$/],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        'pinia',
        {
          '@/store': ['useStore'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      }
    }),
  ],
  resolve: {
    alias: {
      // '@': resolve(__dirname, '/src'),
      '@': _resolve('src'),
      '@assets': _resolve('src/assets'),
      '@comps': _resolve('src/components'),
      '@utils': _resolve('src/utils'),
      '@router': _resolve('src/router'),
      '@store': _resolve('src/store')
    },
  },
  test: {
    include: ['tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
