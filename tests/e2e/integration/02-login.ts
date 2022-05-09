describe('登入操作', function () {
  it('進入後台登入頁。', () => {
    cy.visit('/login')
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('帳號空白登入，下方顯示警示。', () => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').type('123456');
    cy.get('button#submit-login').click();
    cy.get('span.errors-tip').should('have.text', '請輸入信箱')
  })
  it('密碼空白登入，下方顯示警示。', () => {
    cy.get('input[name="email"]').type("kevin@test.com");
    cy.get('input[name="password"]').clear()
    cy.get('button#submit-login').click();
    cy.get('span.errors-tip').should('have.text', '請輸入密碼')
  })
  it('填非信箱格式，下方顯示警示。', () => {
    cy.get('input[name="email"]').clear().type("xxxxxx");
    cy.get('input[name="password"]').clear().type("123456");
    cy.get('button#submit-login').click();
    cy.get('span.errors-tip').should('have.text', '請輸入信箱格式')
  })
  it('填錯帳號和密碼，跳出警示燈箱。', () => {
    cy.get('input[name="email"]').clear().type("xxxxxx@gmail.com");
    cy.get('input[name="password"]').clear().type("xxxxxxxxxx");
    cy.get('button#submit-login').click();
    cy.get('.pop-msg-content').should('have.text', '登入失敗')
  })
  it('填正確帳號和密碼登入', () => {
    cy.login()
  })
})
