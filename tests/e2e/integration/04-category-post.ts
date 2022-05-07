// 統一管理路由
const catRoutePath = '/board/categories'
const catPageTitle = '文章分類管理'
const addcatRoutePath = '/board/categories/add'
const addcatPageTitle = '新增文章分類'
const postListRoutePath = '/board/article'
const postListTitle = '文章列表'
const addPostRoutePath = '/board/article/add'
const addPostTitle = '新增文章'
const scienceRoutePath = '/science'
const scienceTitle = '天文科普'

// 文章分類
const singlecatPageTitle = '.category-layout-title-box h1'
const catNameInput = '.category-name-input'
const catNameError = '.category-name-error-tip'
const catIdInput = '.category-id-input'
const catIdError = '.category-id-error-tip'
const singleCatPageSaveBtn = '.category-layout-title-box button'


// describe('新增文章分類。', function () {
//   // 開始測試動作
//   it('進入文章分類新增頁。', () => {
//     cy.checkVisitPage(addcatRoutePath, addcatPageTitle)
//     // cy.checkVisitPage(catRoutePath, catPageTitle)
//   })
//   it('填空值顯示警示文字。', () => {
//     cy.get(catNameInput).clear()
//     cy.get(singlecatPageTitle).click();
//     cy.get(catNameError).should('have.text', '此欄位必填')
//     cy.get(catIdInput).clear()
//     cy.get(singlecatPageTitle).click();
//     cy.get(catIdError).should('have.text', '此欄位必填')
//     cy.get(singleCatPageSaveBtn).should('have.css', 'pointer-events', 'none')
//   })
//   it('填上分類資料。', () => {
//     cy.get(catNameInput).type('分類AAAA');
//     cy.get(catIdInput).type('cataaaa');
//   })
//   it('儲存新增資料。', () => {
//     // 先取得權限
//     cy.loginDirect()
//     cy.get(singleCatPageSaveBtn).click()
//     cy.wait(1000)
//     cy.get('.admin-stargazer-modal .confirm-true-btn').click()
//     cy.wait(1000)
//     cy.get('#responsive-table tr').last().children('td[data-title="名稱"]').should('have.text', '分類AAAA')
//   })
// })



// describe('新增文章', function () {
//   const postTitleVal = '.post-title-input'
//   const singlePostPageTitle = '.post-title-box h1'
//   const postTitleError = '.post-title-input-error-tip'
//   const postContentVal = '.v-md-textarea-editor textarea'
//   const postContentError = '.post-content-error-tip'
//   const postSaveBtn = '.post-title-box button'
//   const postCatSelect = '.post-cat-select button'

//   // 開始測試動作
//   it('進入文章新增頁。', () => {
//     cy.checkVisitPage(addPostRoutePath, addPostTitle)
//   })

//   it('檢查填空值顯示警示文字。', () => {
//     cy.get(postTitleVal).clear()
//     cy.get(singlePostPageTitle).click();
//     cy.get(postTitleError).should('have.text', '此欄位必填')
//     cy.get(postContentVal).type('1{backspace}')
//     cy.get(postContentError).should('have.text', '此欄位必填')
//     cy.get(postSaveBtn).should('have.css', 'pointer-events', 'none')
//   })

//   it('輸入文章資料。', () => {
//     // 先取得權限
//     cy.loginDirect()
//     cy.get(postTitleVal).type('測試用文章AAAA')
//     // 選擇分類
//     cy.get(postCatSelect).click().then(() => {
//       cy.get('.post-cat-select li').last().click()
//     })
//     // 輸入文章內容
//     cy.get(postContentVal).type('## 測試用內文 {enter} > quotequote {enter}{enter} - 111111{enter}222222{enter}333333{enter}{backspace}{backspace}{backspace}{enter}endend')
//     // 上傳圖片
//     cy.updateImage('.update-btn')
//   })

//   it('儲存新增資料，並檢查後台列表是否已新增？', () => {
//     // cy.checkVisitPage(postListRoutePath, postListTitle)
//     cy.loginDirect()
//     cy.wait(2000)
//     cy.get(postSaveBtn).click()
//     cy.wait(1000)
//     cy.get('.admin-stargazer-modal .confirm-true-btn').click()
//     cy.wait(1000)
//     cy.get('#responsive-table tbody tr').first().children('td[data-title="標題"]').should('have.text', '測試用文章AAAA')
//   })

//   it('進入前台天文科普。', () => {
//     cy.checkVisitPage(scienceRoutePath, scienceTitle)
//   })

//   it('檢查分類篩選列，是否有新增分類？', () => {
//     cy.get('.science-filter-bar li label').should('contain', '分類AAAA')
//   })

//   it('檢查新增的文章是否有出現在下方區塊？', () => {
//     cy.get('.grid-card').first().find('.grid-card-title').should('have.text', '測試用文章AAAA')
//     cy.get('.grid-card').first().find('.grid-card-tag').should('have.text', '分類AAAA')
//     cy.get('.grid-card').first().find('.grid-card-read').click()
//   })

//   it('檢查新增的文章內容。', () => {
//     cy.get('.title-box-text').should('have.text', '測試用文章AAAA')
//     cy.get('.title-box-tag').should('have.text', '分類AAAA')
//     cy.get('.github-markdown-body h2').should('have.text', '測試用內文')
//     cy.get('.github-markdown-body blockquote').should('contain', 'quotequote')
//     cy.get('.github-markdown-body ul li').should('contain', '111111')
//     cy.get('.github-markdown-body ul li').should('contain', '222222')
//     cy.get('.github-markdown-body ul li').should('contain', '333333')
//     cy.get('.github-markdown-body > p').should('contain', 'endend')
//   })

//   it('檢查標籤彙整頁。', () => {
//     cy.get('.post-bottom-meta a').click()
//     cy.get('h4.title-box-tag').should('have.text', 'cataaaa')
//     cy.get('h1.title-box-text').should('have.text', '分類AAAA')
//     cy.get('.search-item p').should('contain', '測試用文章AAAA')
//   })
// })


