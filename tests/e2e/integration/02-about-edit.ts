describe('首頁主視覺文字-編輯', function () {
  // beforeEach(() => {
  //   // 每次進行動作以前都會取得權限
  //   cy.loginDirect()
  // });

  let homeTitleInput = ""

  it('進入標語管理', () => {
    // 先取得權限
    cy.loginDirect()
    // 進入標語管理頁面
    cy.visit('/board/slogan')
    cy.title().should('eq', 'Catch The Stars — 標語管理')
  })

  it('編輯模式', () => {
    cy.get('form.home-slogan .admin-sbtn').click()
    cy.get('form.home-slogan .editer-inner').should('have.class', 'edit-mode')
    cy.get('input.home-title-input').type('{movetoend}xxxxxxxxx')
    cy.get('input.home-title-input').invoke('val').should('contain', 'xxxxxxxxx').then(res => {
      homeTitleInput = String(res)
      console.log(homeTitleInput)
      cy.get('input.home-slogan').type('{movetoend}' + homeTitleInput + 'ooooooooo')
    })

    cy.get('input.home-slogan').invoke('val').should('contain', 'ooooooooo')
  })

  // it('儲存-檢視模式-檢查', () => {
  //   // 先取得權限
  //   cy.loginDirect()
  //   // 點擊儲存
  //   cy.get('form.home-slogan .admin-edit-sbtn').click()
  //   cy.wait(1000)
  //   cy.get('.admin-stargazer-modal .confirm-true-btn').click()
  //   cy.wait(1000)
  //   cy.get('form.home-slogan .view-mode > .home-content-title').invoke('text').should('contain', 'xxxxxxxxx')
  //   cy.get('form.home-slogan .view-mode > p').invoke('text').should('contain', 'ooooooooo')
  // })

  // it('恢復原狀', () => {
  //   // 進入編輯模式
  //   cy.get('form.home-slogan .admin-sbtn').click()
  //   cy.get('form.home-slogan .editer-inner').should('have.class', 'edit-mode')
  //   // 鎖定欄位刪除
  //   cy.get('input.home-title-input').type("{movetoend}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")
  //   cy.get('input.home-slogan').type("{movetoend}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")
  //   // 確認測試字樣已刪除
  //   cy.get('input.home-title-input').invoke('val').should('not.contain', 'xxxxxxxxx')
  //   cy.get('input.home-slogan').invoke('val').should('not.contain', 'ooooooooo')
  //   // 先取得權限
  //   cy.loginDirect()
  //   // 儲存標語
  //   cy.get('form.home-slogan .admin-edit-sbtn').click()
  //   cy.wait(1000)
  //   // 警示窗按確定
  //   cy.get('.admin-stargazer-modal .confirm-true-btn').click()
  //   cy.wait(1000)
  //   // 確認檢視模式下的字串已刪除
  //   cy.get('form.home-slogan .view-mode > .home-content-title').invoke('text').should('not.contain', 'xxxxxxxxx')
  //   cy.get('form.home-slogan .view-mode > p').invoke('text').should('not.contain', 'ooooooooo')
  // })
})


// describe('關於我們—理念-編輯', function () {

//   it('編輯模式', () => {
//     // 開啟編輯模式
//     cy.get('form.about-slogan .admin-sbtn').click()
//     cy.get('form.about-slogan .editer-inner').should('have.class', 'edit-mode')
//     // 上方標題
//     cy.get('.about-slogan input[name="sloganRule"]').type('{movetoend}xxxxxxxxx')
//     cy.get('.about-slogan input[name="sloganRule"]').invoke('val').should('contain', 'xxxxxxxxx')
//     // 下方編輯器
//     cy.get('.about-slogan textarea').type('{movetoend}ooooooooo')
//     cy.get('.about-slogan textarea').invoke('val').should('contain', 'ooooooooo')
//   })

//   it('儲存-檢視模式-檢查', () => {
//     // 先取得權限
//     cy.loginDirect()
//     // 點擊儲存
//     cy.get('form.about-slogan .admin-edit-sbtn').click()
//     cy.wait(1000)
//     cy.get('.admin-stargazer-modal .confirm-true-btn').click()
//     cy.wait(1000)
//     cy.get('form.about-slogan .view-mode > .about-content-title').invoke('text').should('contain', 'xxxxxxxxx')
//     cy.get('form.about-slogan .view-mode .github-markdown-body').invoke('text').should('contain', 'ooooooooo')
//   })

//   it('恢復原狀', () => {
//     // 進入編輯模式
//     cy.get('form.about-slogan .admin-sbtn').click()
//     cy.get('form.about-slogan .editer-inner').should('have.class', 'edit-mode')
//     // 鎖定欄位刪除
//     cy.get('.about-slogan input[name="sloganRule"]').type("{movetoend}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")
//     cy.get('.about-slogan textarea').type("{movetoend}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")
//     // 確認測試字樣已刪除
//     cy.get('.about-slogan input[name="sloganRule"]').invoke('val').should('not.contain', 'xxxxxxxxx')
//     cy.get('.about-slogan textarea').invoke('val').should('not.contain', 'ooooooooo')
//     // 先取得權限
//     cy.loginDirect()
//     // 儲存標語
//     cy.get('form.about-slogan .admin-edit-sbtn').click()
//     cy.wait(1000)
//     // 警示窗按確定
//     cy.get('.admin-stargazer-modal .confirm-true-btn').click()
//     cy.wait(1000)
//     // 確認檢視模式下的字串已刪除
//     cy.get('form.about-slogan .view-mode > .about-content-title').invoke('text').should('not.contain', 'xxxxxxxxx')
//     cy.get('form.about-slogan .view-mode .github-markdown-body').invoke('text').should('not.contain', 'ooooooooo')
//   })
// })


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err) {
    return false
  }
})