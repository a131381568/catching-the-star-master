# Catch the stars

## 一、簡述（Description）

**Catch the stars** 為彙整天文相關資訊的形象網站。
大多記載文章類型的資料，都被放置在單元<font color=#008000>天文科普</font>、<font color=#008000>星星物語</font>，單元——<font color=#008000>天文設施</font>，介紹天文機構與天文台；單元——<font color=#008000>觀星地點</font>，標註的座標皆為台東耳熟能詳觀星景點。
可藉由登入管理後台，進行前台資料的新增、編輯和修改。

- 前台形象網站 - [http://star.puraliena.com](http://star.puraliena.com)
![home](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/06-fontend-home.jpg)

- 後台管理網站 - [http://star.puraliena.com/login](http://star.puraliena.com/login)
![login](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/07-admin-home.jpg)

> 以下是實際製作後，撰寫的記錄、文件和資料。


## 二、設計稿（Mockup）
- 前台形象網站 - [Catch the starts - Frontend](https://www.behance.net/gallery/143701077/Catch-the-starts-Frontend)
- 後台管理網站 - [Catch the starts - Admin](https://www.behance.net/gallery/143703311/Catch-the-starts-Admin)


## 三、互動原型（Prototype）
- Figma - [DEMO](https://www.figma.com/proto/CJZnislU95GzNWrhISxrqH/ctsm-frontend?node-id=0%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A3)


## 四、操作流程圖（UI Flow）
- 登入邏輯圖
![login](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/01-login-logic.gif)
- 登入操作圖
![login](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/02-login-flow.gif)
- 編輯標語管理操作圖
![login](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/05-about-edit-flow.gif)
- 觀星地點
  + 新增觀星地點操作圖 - [Whimsical Board](https://whimsical.com/MeP6apkTk96bNkk7npKp8g)
  + 編輯觀星地點操作圖 - [Whimsical Board](https://whimsical.com/BtE268F5MHSR2yqgsUhRHG)
  + 刪除觀星地點操作圖 - [Whimsical Board](https://whimsical.com/FMeregBV1yHQfH8VteifS3)
- 文章分類
  + 新增文章分類操作圖 - [Whimsical Board](https://whimsical.com/LzTEoYDcaQBSkHvnXqyG7R)
  + 編輯文章分類操作圖 - [Whimsical Board](https://whimsical.com/T3zfjywRo4F6J1uo1ARZKo)
  + 刪除文章分類操作圖 - [Whimsical Board](https://whimsical.com/TLedgNSZCJvNrkxuL2hgzn)
- 文章列表
  + 新增文章操作圖 - [Whimsical Board](https://whimsical.com/5qCvrSv7NrwkuBpyXiZpoT)
  + 編輯文章操作圖 - [Whimsical Board](https://whimsical.com/YXvcXUgaat6jDXDK1j8Lj)
  + 刪除文章操作圖 - [Whimsical Board](https://whimsical.com/VPMsHu43vUZumgo3J15Tmv)
- 天文機構
  + 新增天文機構操作圖 - [Whimsical Board](https://whimsical.com/JhkcyNUZD27yVgy83XL6wg)
  + 編輯天文機構操作圖 - [Whimsical Board](https://whimsical.com/CKu22xZPD5Lfz3x1bVBnKy)
  + 刪除天文機構操作圖 - [Whimsical Board](https://whimsical.com/6Yhj5RTbnvuW98zDQXWKnU)
- 天文台
  + 新增天文台操作圖 - [Whimsical Board](https://whimsical.com/Mb8RVarFm1cv451EoWtY5D)
  + 編輯天文台操作圖 - [Whimsical Board](https://whimsical.com/Y76tAqnCozfF94NvbP6ro3)
  + 刪除天文台操作圖 - [Whimsical Board](https://whimsical.com/8S8iDonqA3wjpViGe3pzMz)


## 五、時程與工項（Schedule & Task）
需歷經前面——依據<font color=#008000>設計稿</font>製作成最初的<font color=#008000>互動原型</font>，再藉由原型去梳理出<font color=#FF6600>各種可能性</font>的<font color=#008000>流程圖</font>，和釐清需要製作的功能、系統與 UI 的可行性，才有辦法評估出<font color=#FF6600>明確的規格</font>，和還有多少工項要進行？

- [前台甘特圖](https://www.notion.so/Catching-the-Star-a2ad827a07f64c2ba69ac138e90ab4e6)

- [後台甘特圖](https://www.notion.so/Catching-the-Star-c488452269b54603b5af18206f341b14)

專案進行的同時，時程也會因為實際作業而受到影響，像是前端 UI 某些平面上看不到的功能，後端要多花時間<font color=#FF6600>改架構</font>才有辦法實現？和新增需求會導致時程延後等。
可以的話，在<font color=#FF6600>互動原型</font>的階段就進行測試撰寫，才能夠確保後續的變動不太會大。

## 六、使用技術及套件（NPM）
- Vue 相關：
  + vue - SPA 應用框架，Vue 的本體。
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

## 七、前端路由與組件架構（Vue Router）
![前端路由與組件架構圖](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/03-vue-route-and-component.gif)

## 八、待分類
部分會移到後端倉庫介紹，和 apollo server 一起。

### 登入邏輯圖
![登入邏輯圖](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/01-login-logic.gif)

### 資料表
![資料表介紹](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/04-data-sheet.gif)

### 測試介紹
- 測試介紹 ⇒ 測試流程圖 ⇒ 測試影片 - [video](https://youtube.com/playlist?list=PLHcJgg1S4pNcOKaWk1TY1Iuu07o9oUpFc)
- API 介面

## 九、聲明（Disclaimer）
- 僅作為學術研究用途，無商業行為。
- 素材與資料來源：台北市立天文科學教育館、南瀛天文教育園區、國立自然科學博物館、交通部中央氣象局、Freepik、Wikipedia、ELLE。