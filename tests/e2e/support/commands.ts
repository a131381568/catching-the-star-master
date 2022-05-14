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
      checkTagContent: typeof checkTagContent
      checkPostContent: typeof checkPostContent
      checkScienceTagPost: typeof checkScienceTagPost
      saveTableEditAction: typeof saveTableEditAction
      checkFacilitiesOrgan: typeof checkFacilitiesOrgan
      checkFacilitiesObs: typeof checkFacilitiesObs
      checkStargazing: typeof checkStargazing
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

// 確認標籤頁內容
Cypress.Commands.add("checkTagContent", checkTagContent)

// 確認文章內容
Cypress.Commands.add("checkPostContent", checkPostContent)

// 確認天文科普新增標籤和文章內容
Cypress.Commands.add("checkScienceTagPost", checkScienceTagPost)

// 儲存表格的動作, 和確認編輯後的列表是否存在
Cypress.Commands.add("saveTableEditAction", saveTableEditAction)

// 確認前台的天文機構是否新增成功
Cypress.Commands.add("checkFacilitiesOrgan", checkFacilitiesOrgan)

// 確認前台的天文台是否新增成功
Cypress.Commands.add("checkFacilitiesObs", checkFacilitiesObs)

// 確認前台的觀星地點是否新增成功
Cypress.Commands.add("checkStargazing", checkStargazing)

export function login() {
  cy.fixture('test-user.json').then((data) => {
    cy.visit('/login')
    cy.get('input[name="email"]').type(data.email);
    cy.get('input[name="password"]').type(data.password);
    cy.get('button#submit-login').click()
    cy.url().should('include', '/board')
  })
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

  cy.fixture('test-user.json').then((data) => {
    cy.request({
      url: data.graphqlUrl,  // graphql endpoint
      method: 'POST',
      body: {
        query: mutation, variables: {
          "email": data.email,
          "password": data.password
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
  })
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

export function checkTagContent(tagName, postTitle) {
  cy.get('.post-bottom-meta a').click()
  cy.get('h1.title-box-text').should('have.text', tagName)
  cy.get('.search-item p').should('contain', postTitle)
}

export function checkPostContent(tagName, postTitle) {
  cy.get('.title-box-text').should('have.text', postTitle)
  cy.get('.title-box-tag').should('have.text', tagName)
  cy.get('.github-markdown-body h2').should('have.text', '測試用內文')
  cy.get('.github-markdown-body blockquote').should('contain', 'quotequote')
  cy.get('.github-markdown-body ul li').should('contain', '111111')
  cy.get('.github-markdown-body ul li').should('contain', '222222')
  cy.get('.github-markdown-body ul li').should('contain', '333333')
  cy.get('.github-markdown-body > p').should('contain', 'endend')
}

export function checkScienceTagPost(tagName, postTitle, isDel) {
  cy.checkVisitPage('/science', '天文科普')
  if (isDel === true) {
    // 檢查被刪除的標籤
    cy.get('.science-filter-bar li label').should('not.contain', tagName)
    cy.get('.grid-card').first().find('.grid-card-tag').should('have.text', '未分類')
  } else {
    // 檢查新增的文章是否有出現在下方區塊？
    cy.get('.science-filter-bar li label').should('contain', tagName)
    cy.get('.grid-card').first().find('.grid-card-tag').should('have.text', tagName)
  }
  cy.get('.grid-card').first().find('.grid-card-title').should('have.text', postTitle)
  cy.get('.grid-card').first().find('.grid-card-read').click()
}

export function saveTableEditAction(btn, firstOrder, tdTitle, tdText) {
  cy.loginDirect()
  cy.wait(2000)
  cy.get(btn).click()
  cy.wait(1000)
  cy.get('.admin-stargazer-modal .confirm-true-btn').click()
  cy.wait(1000)
  if (firstOrder === true) {
    cy.get('#responsive-table tbody tr').first().children('td[data-title="' + tdTitle + '"]').should('have.text', tdText)
  } else {
    cy.get('#responsive-table tbody tr').last().children('td[data-title="' + tdTitle + '"]').should('have.text', tdText)
  }
}

export function checkFacilitiesOrgan(organTitle, isDel) {
  cy.checkVisitPage('/facilities', '天文設施')
  if (isDel === true) {
    cy.get('.facility-item').last().find('.facility-item-title').should('not.contain', organTitle)
  } else {
    cy.get('.facility-item').last().find('.facility-item-title').should('contain', organTitle)
  }
}

export function checkFacilitiesObs(obsCatName, isDel) {
  cy.checkVisitPage('/facilities', '天文設施')
  if (isDel === true) {
    cy.get('.table-filter li').last().find('.table-name').should('not.contain', obsCatName)
  } else {
    cy.get('.table-filter li').last().find('.table-name').should('contain', obsCatName).click()
    cy.get('.v-md-editor-preview').last().find('tbody tr td').first().should('contain', '天文台')
  }
}

export function checkStargazing(stargazerName, isDel) {
  cy.checkVisitPage('/stargazing', '觀星地點')
  if (isDel === true) {
    cy.get('.stargazing-menu li').first().should('not.contain', stargazerName)
  } else {
    cy.get('.stargazing-menu li').first().should('contain', stargazerName).click()
    cy.get('.leaflet-popup-content').should('contain', stargazerName)
    cy.get('.stargazing-info-card h2').should('contain', stargazerName)
  }
}