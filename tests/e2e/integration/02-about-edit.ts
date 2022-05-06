describe('登入操作', function () {
  it('後台登入', () => {
    cy.login()
  })
  it('進入標語管理', () => {
    cy.wait(2000)
    cy.visit('/board/slogan')
    cy.wait(1000)
    cy.title().should('eq', 'Catch The Stars — 標語管理')
  })
  // it('首頁主視覺-開啟編輯模式', () => {
  //   cy.get('.home-slogan .admin-sbtn').click()
  //   cy.get('.home-slogan .editer-inner').should('have.class', 'edit-mode')
  // })
  // it('首頁主視覺-開啟編輯模式', () => {
  //   cy.get('.home-slogan .admin-sbtn').type('xxxxxxx{movetoend}')
  //   cy.get('.home-slogan .admin-sbtn').should('contain', 'xxxxxxx')
  // })
})
