# Catch the stars

## 一、簡述（Description）

**Catch the stars** 為基於 Vue3 製作而成的天文形象網站。
大多記載文章類型的資料，都被放置在單元`天文科普`、`星星物語`，單元——`天文設施`，介紹天文機構與天文台；單元——`觀星地點`，標註的座標皆為台東耳熟能詳觀星景點。
可藉由登入管理後台，進行前台資料的新增、編輯和修改。

- 前台形象網站 - [http://star.puraliena.com](http://star.puraliena.com)
![home](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/06-fontend-home.jpg)

- 後台管理網站 - [http://star.puraliena.com/login](http://star.puraliena.com/login)
![login](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/07-admin-home.jpg)

> 以下是實際製作後，撰寫的記錄、文件和資料。


## 二、設計稿（Mockup）
- [前台形象網站](https://www.behance.net/gallery/143701077/Catch-the-starts-Frontend)
- [後台管理網站](https://www.behance.net/gallery/143703311/Catch-the-starts-Admin)


## 三、互動原型（Prototype）
- [Figma](https://www.figma.com/proto/CJZnislU95GzNWrhISxrqH/ctsm-frontend?node-id=0%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A3)


## 四、操作流程圖（UI Flow）
- 登入操作圖
![login](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/02-login-flow.gif)
- 編輯標語管理操作圖
![login](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/05-about-edit-flow.gif)
- 觀星地點
  + [新增觀星地點操作圖](https://whimsical.com/MeP6apkTk96bNkk7npKp8g)
  + [編輯觀星地點操作圖](https://whimsical.com/BtE268F5MHSR2yqgsUhRHG)
  + [刪除觀星地點操作圖](https://whimsical.com/FMeregBV1yHQfH8VteifS3)
- 文章分類
  + [新增文章分類操作圖](https://whimsical.com/LzTEoYDcaQBSkHvnXqyG7R)
  + [編輯文章分類操作圖](https://whimsical.com/T3zfjywRo4F6J1uo1ARZKo)
  + [刪除文章分類操作圖](https://whimsical.com/TLedgNSZCJvNrkxuL2hgzn)
- 文章列表
  + [新增文章操作圖](https://whimsical.com/5qCvrSv7NrwkuBpyXiZpoT)
  + [編輯文章操作圖](https://whimsical.com/YXvcXUgaat6jDXDK1j8Lj)
  + [刪除文章操作圖](https://whimsical.com/VPMsHu43vUZumgo3J15Tmv)
- 天文機構
  + [新增天文機構操作圖](https://whimsical.com/JhkcyNUZD27yVgy83XL6wg)
  + [編輯天文機構操作圖](https://whimsical.com/CKu22xZPD5Lfz3x1bVBnKy)
  + [刪除天文機構操作圖](https://whimsical.com/6Yhj5RTbnvuW98zDQXWKnU)
- 天文台
  + [新增天文台操作圖](https://whimsical.com/Mb8RVarFm1cv451EoWtY5D)
  + [編輯天文台操作圖](https://whimsical.com/Y76tAqnCozfF94NvbP6ro3)
  + [刪除天文台操作圖](https://whimsical.com/8S8iDonqA3wjpViGe3pzMz)


## 五、時程與工項（Schedule & Task）
需歷經前面——依據[設計稿](https://github.com/a131381568/catching-the-star-master#%E4%BA%8C%E8%A8%AD%E8%A8%88%E7%A8%BFmockup)製作成最初的[互動原型](https://github.com/a131381568/catching-the-star-master#%E4%B8%89%E4%BA%92%E5%8B%95%E5%8E%9F%E5%9E%8Bprototype)，再藉由原型去梳理出`各種可能性`的[流程圖](https://github.com/a131381568/catching-the-star-master#%E5%9B%9B%E6%93%8D%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9C%96ui-flow)，和釐清需要製作的功能、系統與 UI 的可行性，才有辦法評估出`明確的規格`，和還有多少工項要進行？
- [前台頁面規劃](https://ripple-dust-d2f.notion.site/23865d946d094a8a8bfbe99f791552b4?v=9da1d0522d0749199705f201fc0d4b6f)
- [前台甘特圖](https://www.notion.so/Catching-the-Star-a2ad827a07f64c2ba69ac138e90ab4e6)
- [後台頁面規劃](https://ripple-dust-d2f.notion.site/3fb36641815641838a121097fb6c23b8?v=1b3fdd07eded4149a56eef7524ded4a7)
- [後台甘特圖](https://www.notion.so/Catching-the-Star-c488452269b54603b5af18206f341b14)

專案進行的同時，時程也會因為實際作業而受到影響，像是前端 UI 某些平面上看不到的功能，後端要多花時間`改架構`才有辦法實現？和新增需求會導致時程延後等。
可以的話，在[互動原型](https://github.com/a131381568/catching-the-star-master#%E4%B8%89%E4%BA%92%E5%8B%95%E5%8E%9F%E5%9E%8Bprototype)的階段就進行測試撰寫，才能夠確保後續的變動不太會大。

## 六、使用技術及套件（NPM）
- Vue 相關：
  + vue - SPA 應用框架。
  + pinia - Vuex 的簡化版，管理共用的資料。
  + vue-router - Vue 的路由系統。
  + vue-masonry-wall - 響應式計算砌磚式排列的套件。
  + v-md-editor - 基於 Vue 開發的 markdown 編輯器組件。
  + vueuse - 支援 Composition API 的函式庫。
- Apollo 相關，Apollo Server 為 GraphQL 架構支援 NodeJS 的工具：
  + graphql 和 graphql-tag 為支援 JS 資料查詢語言的本體。  
  + apollo/client 此為客戶端的套件。
  + apollo-upload-client 能夠再 mutation 時支援上傳檔案的功能。
  + apollo-link-context 為前端請求的中間件，能夠用來設置請求的上下文。
  + apollo-link-token-refresh 也是前端請求的中間件，能夠配置 JWT 過期後的作業。
- leaflet - 開源的地圖應用框架。
- vee-validate - 驗證表單框架。
- vite - 本地開發比起 webpack 更有效率的 dev-server（不進行打包）。
- animate.css - 老牌的純 CSS 的動畫特效庫。
- tailwindcss - 是一套 Utility-First CSS 框架，能夠語意化的使用 class 寫 CSS 做客製化切版作業。
- cypress - E2E的測試框架，用來撰寫自動功能測試腳本，好讓每次更版能夠自動檢查。
- typescript - 能夠讓 JS 也有強型別的概念。

## 七、前端路由與組件架構（Vue Router & Component）
![前端路由與組件架構圖](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/03-vue-route-and-component.gif)

## 八、後端相關（CTSM SQL）
- [登入邏輯圖](https://github.com/a131381568/ctsm-sql#%E4%B8%89%E7%99%BB%E5%85%A5%E9%82%8F%E8%BC%AF%E5%9C%96login-logic)
- [資料表關係](https://github.com/a131381568/ctsm-sql#%E5%9B%9B%E8%B3%87%E6%96%99%E8%A1%A8%E9%97%9C%E4%BF%82data-sheet)
- [API 介紹](https://github.com/a131381568/ctsm-sql#%E4%BA%94%E6%9C%AC%E6%A9%9F%E9%96%8B%E7%99%BC-apiapollo-server-api)
- [部署相關](https://github.com/a131381568/ctsm-sql#%E5%85%ADdocker-%E9%83%A8%E7%BD%B2deploy)

## 九、本機開發（Local Development）
1. 確定後端的`資料庫`和`伺服器`都有正常運作。
2. 安裝 NPM 依賴並運行。
```shell
npm install
npm run dev
# 顯示 > Local: http://localhost:3000/
```

## 十、本機測試（Cypress E2E Test）
依據前面[測試流程圖](https://github.com/a131381568/catching-the-star-master#%E5%9B%9B%E6%93%8D%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9C%96ui-flow)的邏輯進行模擬使用者的測試撰寫。
統一放置在 tests/e2e/integration，共用函式則是放在 tests/e2e/support/commands。
確定[本機開發環境](https://github.com/a131381568/catching-the-star-master#%E4%B9%9D%E6%9C%AC%E6%A9%9F%E9%96%8B%E7%99%BClocal-development)已正常運作，可選擇以下方法其一進行測試。

1. GUI 介面測試
```shell
# 可開啟 cypress 介面
npm run test-e2e
# 點選其中一個項目，即可運行測試項目
```

2. CLI 介面測試
```shell
# 會在 CLI 介面把所有測試跑一遍 
npm run test:ci-e2e
# 跑完以後會顯示結果和匯出影片
# 影片會儲存在 tests/e2e/videos
```

以下為產生的影片：
- [01-前台頁面](https://youtu.be/8SeV5otKlAM)
- [02-登入](https://youtu.be/ibhCylahSeM)
- [03-標語編輯](https://youtu.be/ILKQI3LQmmk)
- [04-文章與分類](https://youtu.be/eeA_EC3DlVs)
- [05-天文機構](https://youtu.be/rwFgq2ughyQ)
- [06-天文台](https://youtu.be/1xzfv2aCuo4)

## 十一、聲明（Disclaimer）
- 僅作為學術研究用途，無商業行為。
- 素材與資料來源：台北市立天文科學教育館、南瀛天文教育園區、國立自然科學博物館、交通部中央氣象局、Freepik、Wikipedia、ELLE。