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
// 分類
const singlecatPageTitle = '.category-layout-title-box h1'
const catNameInput = '.category-name-input'
const catNameError = '.category-name-error-tip'
const catIdInput = '.category-id-input'
const catIdError = '.category-id-error-tip'
const singleCatPageSaveBtn = '.category-layout-title-box button'
const firstNewCatVal = '分類AAAA'
const firstNewCatIdVal = 'cataaaa'
const scNewCatVal = '分類AAAAB'
const thirdNewCatVal = '太陽系和恆星'
// 文章
const postTitleVal = '.post-title-input'
const singlePostPageTitle = '.post-title-box h1'
const postTitleError = '.post-title-input-error-tip'
const postContentVal = '.v-md-textarea-editor textarea'
const postContentError = '.post-content-error-tip'
const postSaveBtn = '.post-title-box button'
const postCatSelect = '.post-cat-select button'
const firstNewPostTitleVal = '測試用文章AAAA'
const scNewPostTitleVal = '測試用文章BBBB'

describe('新增分類。', function () {
  it('進入後台文章分類新增頁。', () => {
    cy.checkVisitPage(addcatRoutePath, addcatPageTitle)
  })
  it('填空值顯示警示文字。', () => {
    cy.get(catNameInput).clear()
    cy.get(singlecatPageTitle).click();
    cy.get(catNameError).should('have.text', '此欄位必填')
    cy.get(catIdInput).clear()
    cy.get(singlecatPageTitle).click();
    cy.get(catIdError).should('have.text', '此欄位必填')
    cy.get(singleCatPageSaveBtn).should('have.css', 'pointer-events', 'none')
  })
  it('填上分類資料。', () => {
    cy.get(catNameInput).type(firstNewCatVal);
    cy.get(catIdInput).type(firstNewCatIdVal);
  })
  it('儲存新增資料。', () => {
    cy.saveTableEditAction(singleCatPageSaveBtn, false, '名稱', firstNewCatVal)
  })
})

describe('新增文章', function () {
  it('進入後台文章新增頁。', () => {
    cy.checkVisitPage(addPostRoutePath, addPostTitle)
  })
  it('檢查填空值顯示警示文字。', () => {
    cy.get(postTitleVal).clear()
    cy.get(singlePostPageTitle).click();
    cy.get(postTitleError).should('have.text', '此欄位必填')
    cy.get(postContentVal).type('1{backspace}')
    cy.get(postContentError).should('have.text', '此欄位必填')
    cy.get(postSaveBtn).should('have.css', 'pointer-events', 'none')
  })
  it('輸入文章資料。', () => {
    // 先取得權限
    cy.loginDirect()
    cy.get(postTitleVal).type(firstNewPostTitleVal)
    // 選擇分類
    cy.get(postCatSelect).click().then(() => {
      cy.get('.post-cat-select li').last().click()
    })
    // 輸入文章內容
    cy.get(postContentVal).type('## 測試用內文 {enter} > quotequote {enter}{enter} - 111111{enter}222222{enter}333333{enter}{backspace}{backspace}{backspace}{enter}endend')
    // 上傳圖片
    cy.updateImage('.update-btn')
  })
  it('儲存新增資料，並檢查後台列表是否已新增？', () => {
    cy.saveTableEditAction(postSaveBtn, true, '標題', firstNewPostTitleVal)
  })
  it('進入前台天文科普，檢查分類篩選列，是否有新增分類？', () => {
    cy.checkScienceTagPost(firstNewCatVal, firstNewPostTitleVal, false)
  })
  it('檢查新增的文章內容。', () => {
    cy.checkPostContent(firstNewCatVal, firstNewPostTitleVal)
  })
  it('檢查標籤彙整頁。', () => {
    cy.checkTagContent(firstNewCatVal, firstNewPostTitleVal)
  })
})

describe('編輯分類。', function () {
  it('進入後台文章分類列表頁後，指定測試分類編輯。', () => {
    cy.checkVisitPage(catRoutePath, catPageTitle)
    cy.get('#responsive-table tr').last().children('td[data-title="名稱"]').should('have.text', firstNewCatVal).next().next('td[data-title="編輯"]').children('svg').click()
  })
  it('測試空白呆後，修改分類名稱。', () => {
    // 先取得權限
    cy.loginDirect()
    cy.get(catNameInput).clear()
    cy.get(singlecatPageTitle).click();
    cy.get(catNameError).should('have.text', '此欄位必填')
    cy.get(catNameInput).type(scNewCatVal).invoke('val').should('eq', scNewCatVal);
  })
  it('儲存新增資料。', () => {
    cy.saveTableEditAction(singleCatPageSaveBtn, false, '名稱', scNewCatVal)
  })
  it('檢查分類篩選列，分類是否已改變？', () => {
    cy.checkScienceTagPost(scNewCatVal, firstNewPostTitleVal, false)
  })
  it('檢查編輯後的文章內容。', () => {
    cy.checkPostContent(scNewCatVal, firstNewPostTitleVal)
  })
  it('檢查標籤彙整頁。', () => {
    cy.checkTagContent(scNewCatVal, firstNewPostTitleVal)
  })
})

describe('刪除分類。', function () {
  it('進入後台文章分類列表頁後，指定要刪除的分類。', () => {
    cy.checkVisitPage(catRoutePath, catPageTitle)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="名稱"]').should('have.text', scNewCatVal).next().next().next('td[data-title="刪除"]').children('svg').click()
    cy.wait(1000)
    cy.get('.admin-stargazer-modal .confirm-true-btn').click()
    cy.wait(1000)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="名稱"]').should('not.have.text', scNewCatVal)
  })
  it('檢查分類篩選列，分類是否已消失？', () => {
    cy.checkScienceTagPost(scNewCatVal, firstNewPostTitleVal, true)
  })
  it('檢查編輯後的文章內容。', () => {
    cy.checkPostContent('未分類', firstNewPostTitleVal)
  })
})

describe('編輯文章。', function () {
  it('進入後台文章列表頁。', () => {
    cy.checkVisitPage(postListRoutePath, postListTitle)
    cy.get('#responsive-table tbody tr').first().children('td[data-title="標題"]').should('have.text', firstNewPostTitleVal).next().next().next('td[data-title="編輯"]').children('svg').click()
  })
  it('修改文章資料。', () => {
    // 先取得權限
    cy.loginDirect()
    cy.get(postTitleVal).clear()
    cy.get(postTitleVal).type(scNewPostTitleVal)
    // 選擇分類
    cy.get(postCatSelect).click().then(() => {
      cy.get('.post-cat-select li').first().click()
    })
    cy.get('.post-cat-select > button').should('contain', thirdNewCatVal)
  })
  it('儲存修改資料。', () => {
    cy.saveTableEditAction(postSaveBtn, true, '標題', scNewPostTitleVal)
  })
  it('檢查前台天文科普顯示文章。', () => {
    cy.checkScienceTagPost(thirdNewCatVal, scNewPostTitleVal, false)
  })
  it('檢查編輯後的文章內容。', () => {
    cy.checkPostContent(thirdNewCatVal, scNewPostTitleVal)
  })
  it('檢查標籤彙整頁。', () => {
    cy.checkTagContent(thirdNewCatVal, scNewPostTitleVal)
  })
})

describe('刪除文章。', function () {
  it('進入後台文章列表頁。', () => {
    cy.checkVisitPage(postListRoutePath, postListTitle)
    cy.get('#responsive-table tbody tr').first().children('td[data-title="標題"]').should('have.text', scNewPostTitleVal).next().next().next().next('td[data-title="刪除"]').children('svg').click()
    cy.wait(1000)
    cy.get('.admin-stargazer-modal .confirm-true-btn').click()
    cy.wait(1000)
    cy.get('#responsive-table tbody tr').first().children('td[data-title="標題"]').should('not.have.text', scNewPostTitleVal)
  })
  it('檢查前台天文科普顯示文章。', () => {
    cy.checkVisitPage('/science', '天文科普')
    cy.get('.grid-card').first().find('.grid-card-title').should('not.have.text', scNewPostTitleVal)
  })
})