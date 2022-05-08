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



// describe('新增分類。', function () {
//   // 開始測試動作
//   it('進入文章分類新增頁。', () => {
//     cy.checkVisitPage(addcatRoutePath, addcatPageTitle)
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
//     cy.saveTableEditAction(singleCatPageSaveBtn, false, '名稱', '分類AAAA')
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
//     cy.saveTableEditAction(postSaveBtn, true, '標題', '測試用文章AAAA')
//   })
//   it('進入前台天文科普，檢查分類篩選列，是否有新增分類？', () => {
//     cy.checkScienceTagPost('分類AAAA', '測試用文章AAAA',false)
//   })
//   it('檢查新增的文章內容。', () => {
//     cy.checkPostContent('分類AAAA', '測試用文章AAAA')
//   })
//   it('檢查標籤彙整頁。', () => {
//     cy.checkTagContent('分類AAAA', '測試用文章AAAA')
//   })
// })



// describe('編輯分類。', function () {
//   // 開始測試動作
//   it('進入文章分類列表頁後，指定測試分類編輯。', () => {
//     cy.checkVisitPage(catRoutePath, catPageTitle)
//     cy.get('#responsive-table tr').last().children('td[data-title="名稱"]').should('have.text', '分類AAAA').next().next('td[data-title="編輯"]').children('svg').click()
//   })
//   it('測試空白呆後，修改分類名稱。', () => {
//     // 先取得權限
//     cy.loginDirect()
//     cy.get(catNameInput).clear()
//     cy.get(singlecatPageTitle).click();
//     cy.get(catNameError).should('have.text', '此欄位必填')
//     cy.get(catNameInput).type('分類AAAAB').invoke('val').should('eq', '分類AAAAB');
//   })
//   it('儲存新增資料。', () => {
//     cy.saveTableEditAction(singleCatPageSaveBtn, false, '名稱', '分類AAAAB')
//   })
//   it('檢查分類篩選列，分類是否已改變？', () => {
//     cy.checkScienceTagPost('分類AAAAB', '測試用文章AAAA',false)
//   })
//   it('檢查編輯後的文章內容。', () => {
//     cy.checkPostContent('分類AAAAB', '測試用文章AAAA')
//   })
//   it('檢查標籤彙整頁。', () => {
//     cy.checkTagContent('分類AAAAB', '測試用文章AAAA')
//   })
// })



// describe('刪除分類。', function () {
//   it('進入文章分類列表頁後，指定要刪除的分類。', () => {
//     cy.checkVisitPage(catRoutePath, catPageTitle)
//     cy.get('#responsive-table tbody tr').last().children('td[data-title="名稱"]').should('have.text', '分類AAAAB').next().next().next('td[data-title="刪除"]').children('svg').click()
//     cy.wait(1000)
//     cy.get('.admin-stargazer-modal .confirm-true-btn').click()
//     cy.wait(1000)
//     cy.get('#responsive-table tbody tr').last().children('td[data-title="名稱"]').should('not.have.text', '分類AAAAB')
//   })
//   it('檢查分類篩選列，分類是否已消失？', () => {
//     cy.checkScienceTagPost('分類AAAAB', '測試用文章AAAA', true)
//   })
//   it('檢查編輯後的文章內容。', () => {
//     cy.checkPostContent('未分類', '測試用文章AAAA')
//   })
// })


describe('編輯文章。', function () {
  it('進入文章列表頁。', () => {
    cy.checkVisitPage(postListRoutePath, postListTitle)
    cy.get('#responsive-table tbody tr').first().children('td[data-title="標題"]').should('have.text', '測試用文章AAAA')

  })

})



