import 'cypress-file-upload';
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Yields "foo"
       *
       * @returns {typeof foo}
       * @memberof Chainable
       * @example
       *    cy.foo().then(f = ...) // f is "foo"
       */
      login: typeof login
      checkHoriScroll: typeof checkHoriScroll
      loginDirect: typeof loginDirect
      editMdContent: typeof editMdContent
      saveMdContent: typeof saveMdContent
      restoreEdit: typeof restoreEdit
      checkEmptyValAlert: typeof checkEmptyValAlert
      checkVisitPage: typeof checkVisitPage
      updateImage: typeof updateImage
    }
  }
}
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// 登入
Cypress.Commands.add("login", login)

// 檢查不會左右水平滑動
Cypress.Commands.add("checkHoriScroll", checkHoriScroll)

// 自動請求登入
Cypress.Commands.add("loginDirect", loginDirect)

// 開啟編輯模式 + 鍵入測試文字
Cypress.Commands.add("editMdContent", editMdContent)

// 儲存後進入檢視模式 + 檢查
Cypress.Commands.add("saveMdContent", saveMdContent)

// 將測試後的文字恢復
Cypress.Commands.add("restoreEdit", restoreEdit)

// 將測試後的文字恢復
Cypress.Commands.add("checkEmptyValAlert", checkEmptyValAlert)

// 進入指定頁面並檢查
Cypress.Commands.add("checkVisitPage", checkVisitPage)

// 上傳圖片
Cypress.Commands.add("updateImage", updateImage)

export function login() {
  cy.visit('/login')
  cy.get('input[name="email"]').type("kevin@test.com");
  cy.get('input[name="password"]').type("123456");
  cy.get('button#submit-login').click()
  cy.url().should('include', '/board')
  // cy.contains('li.items-end', 'Header')
  // })
}

export function checkHoriScroll() {
  cy.viewport('iphone-5')
  cy.window().then(() => {
    const htmlScrollWidth = Cypress.$('html')[0].scrollWidth
    const htmlWidth = Cypress.$('html')[0].clientWidth
    const scrollBarWidth = htmlScrollWidth - htmlWidth
    expect(scrollBarWidth).to.be.eq(0)
  })
  cy.viewport('macbook-11')
  cy.window().then(() => {
    const htmlScrollWidth = Cypress.$('html')[0].scrollWidth
    const htmlWidth = Cypress.$('html')[0].clientWidth
    const scrollBarWidth = htmlScrollWidth - htmlWidth
    expect(scrollBarWidth).to.be.eq(0)
  })
}

export function loginDirect() {
  const mutation = ` mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
              name
              uid
              email
              token
              exp
              refreshToken
              refreshExp
              errorTitle
              errorMsg
          }
      }`;
  cy.request({
    url: 'http://localhost:4000/graphql/',  // graphql endpoint
    method: 'POST',
    body: {
      query: mutation, variables: {
        "email": "kevin@test.com",
        "password": "123456"
      }
    },
    failOnStatusCode: false,
    headers: {
      authorization: ''
    }
  }).then((res) => {
    const personalInfo = res.body.data.login
    localStorage.setItem("token", personalInfo.token)
    localStorage.setItem("expired", personalInfo.exp)
    localStorage.setItem("refresh-token", personalInfo.refreshToken)
    localStorage.setItem("refresh-expired", personalInfo.refreshExp)
    expect(localStorage.getItem('token')).to.not.be.null
    expect(localStorage.getItem('expired')).to.not.be.null
    expect(localStorage.getItem('refresh-token')).to.not.be.null
    expect(localStorage.getItem('refresh-expired')).to.not.be.null
  });
}

export function editMdContent(option) {
  let editBtn = option.editBtn
  let editContainer = option.editContainer
  let editTextarea = option.editTextarea

  // 開啟編輯模式
  cy.get(editBtn).click()
  cy.get(editContainer).should('have.class', 'edit-mode')
  // 下方編輯器
  cy.get(editTextarea).type('{movetoend}ooooooooo')
  cy.get(editTextarea).invoke('val').should('contain', 'ooooooooo')
}

export function saveMdContent(option) {
  // 先取得權限
  cy.loginDirect()
  // 點擊儲存
  let saveBtn = option.saveBtn
  let viewContainer = option.viewContainer
  cy.get(saveBtn).click()
  cy.wait(1000)
  cy.get('.admin-stargazer-modal .confirm-true-btn').click()
  cy.wait(1000)
  cy.get(viewContainer).invoke('text').should('contain', 'ooooooooo')
}

export function restoreEdit(option) {
  let editBtn = option.editBtn
  let editContainer = option.editContainer
  let editTextarea = option.editTextarea
  let saveBtn = option.saveBtn
  let viewContainer = option.viewContainer
  // 開啟編輯模式
  cy.get(editBtn).click()
  cy.get(editContainer).should('have.class', 'edit-mode')
  // 鎖定欄位刪除
  cy.get(editTextarea).type("{movetoend}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")
  // 確認測試字樣已刪除
  cy.get(editTextarea).invoke('val').should('not.contain', 'ooooooooo')
  // 先取得權限
  cy.loginDirect()
  // 儲存標語
  cy.get(saveBtn).click()
  cy.wait(1000)
  // 警示窗按確定
  cy.get('.admin-stargazer-modal .confirm-true-btn').click()
  cy.wait(1000)
  // 確認檢視模式下的字串已刪除
  cy.get(viewContainer).invoke('text').should('not.contain', 'ooooooooo')
}

export function checkEmptyValAlert(option) {
  let editBtn = option.editBtn
  let editContainer = option.editContainer
  let editTextarea = option.editTextarea
  let blockTitle = option.blockTitle
  let errorTip = option.errorTip
  let saveBtn = option.saveBtn
  let openEdit = option.openEdit
  if (openEdit === true) {
    // 開啟編輯模式
    cy.get(editBtn).click()
    cy.get(editContainer).should('have.class', 'edit-mode')
  }
  // 測試防呆
  cy.get(editTextarea).clear()
  cy.get(blockTitle).click();
  cy.get(errorTip).should('have.text', '此欄位必填')
  cy.get(blockTitle).click();
  cy.get(saveBtn).should('have.css', 'pointer-events', 'none')
}

export function checkVisitPage(path, title) {
  // 先取得權限
  cy.loginDirect()
  // 進入標語管理頁面
  cy.visit(path)
  cy.title().should('eq', 'Catch The Stars — ' + title)
}

export function updateImage(updateInput) {
  cy.get(updateInput).attachFile('testimg-260x260.jpg')
}
