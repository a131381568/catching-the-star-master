// 統一管理路由
const CatRoutePath = '/board/categories'
const CatPageTitle = '文章分類管理'
const AddCatRoutePath = '/board/categories/add'
const AddCatPageTitle = '新增文章分類'
const AddPostRoutePath = '/board/article/add'
const AddPostTitle = '新增文章'

// 文章分類
const SingleCatPageTitle = '.category-layout-title-box h1'
const CatNameInput = '.category-name-input'
const CatNameError = '.category-name-error-tip'
const CatIdInput = '.category-id-input'
const CatIdError = '.category-id-error-tip'
const SingleCatPageSaveBtn = '.category-layout-title-box button'


// describe('新增文章分類。', function () {
//   // 開始測試動作
//   it('進入文章分類新增頁。', () => {
//     cy.checkVisitPage(AddCatRoutePath, AddCatPageTitle)
//     // cy.checkVisitPage(CatRoutePath, CatPageTitle)
//   })
//   it('填空值顯示警示文字。', () => {
//     cy.get(CatNameInput).clear()
//     cy.get(SingleCatPageTitle).click();
//     cy.get(CatNameError).should('have.text', '此欄位必填')
//     cy.get(CatIdInput).clear()
//     cy.get(SingleCatPageTitle).click();
//     cy.get(CatIdError).should('have.text', '此欄位必填')
//     cy.get(SingleCatPageSaveBtn).should('have.css', 'pointer-events', 'none')
//   })
//   it('填上分類資料。', () => {
//     cy.get(CatNameInput).type('分類AAAA');
//     cy.get(CatIdInput).type('cataaaa');
//   })
//   it('儲存新增資料。', () => {
//     // 先取得權限
//     cy.loginDirect()
//     cy.get(SingleCatPageSaveBtn).click()
//     cy.wait(1000)
//     cy.get('.admin-stargazer-modal .confirm-true-btn').click()
//     cy.wait(1000)
//     cy.get('#responsive-table tr').last().children('td[data-title="名稱"]').should('have.text', '分類AAAA')
//   })
// })



describe('新增文章。', function () {
  // 開始測試動作
  it('進入文章新增頁。', () => {
    cy.checkVisitPage(AddPostRoutePath, AddPostTitle)
  })

  it('填空值顯示警示文字。', () => {
    cy.get('.post-title-input').clear()
    cy.get('.post-title-box h1').click();
    cy.get('.post-title-input-error-tip').should('have.text', '此欄位必填')
    cy.get('.v-md-textarea-editor textarea').type('1{backspace}')
    cy.get('.post-content-error-tip').should('have.text', '此欄位必填')
    cy.get('.post-title-box button').should('have.css', 'pointer-events', 'none')
  })

  // it('填上分類資料。', () => {
  //   // 先取得權限
  //   cy.loginDirect()
  //   cy.get('.post-title-input').type('測試用文章AAAA')

  //   cy.get('.post-cat-select button').click().then(() => {
  //     cy.get('.post-cat-select li').last().click()
  //   })

  //   cy.get('.v-md-textarea-editor textarea').type('## 測試用內文 {enter} > quotequote {enter}{enter} - 111111{enter}222222{enter}333333{enter}{backspace}{backspace}{backspace}{enter}endend')

  //   // cy.updateImage('.update-btn')
  // })


  // it('儲存新增資料。', () => {
  //   cy.get(SingleCatPageSaveBtn).click()
  //   cy.wait(1000)
  //   cy.get('.admin-stargazer-modal .confirm-true-btn').click()
  //   cy.wait(1000)
  //   cy.get('#responsive-table tr').last().children('td[data-title="名稱"]').should('have.text', '分類AAAA')
  // })
})