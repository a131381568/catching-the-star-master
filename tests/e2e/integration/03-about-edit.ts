// 統一管理路由資訊
const routePath = "/board/slogan"
const pageTitle = "標語管理"

describe('首頁主視覺文字-編輯', function () {
  // 欄位值統一設定
  const homeEditModeBtn = "form.home-slogan .admin-sbtn"
  const homeEditContainerName = "form.home-slogan .editer-inner"
  const homeTitleVal = "input.home-title-input"
  const homeSaveBtn = "form.home-slogan .admin-edit-sbtn"
  const homeTitlView = "form.home-slogan .view-mode > .home-content-title"
  const homeSloganVal = "input.home-slogan"
  const homeSloganView = "form.home-slogan .view-mode > p"
  const homeEditBlockTitle = "form.home-slogan h2"
  const homeTitleErrorTip = ".home-title-errors-tip"
  const homeSloganErrorTip = ".home-slogan-errors-tip"
  // 開始測試動作
  it('進入標語管理', () => {
    cy.checkVisitPage(routePath, pageTitle)
  })
  it('編輯-主視覺文字-上方欄位', () => {
    let option = {
      editBtn: homeEditModeBtn,
      editContainer: homeEditContainerName,
      editTextarea: homeTitleVal
    }
    cy.editMdContent(option)
  })
  it('儲存-上方欄位-檢視模式-檢查', () => {
    let option = {
      saveBtn: homeSaveBtn,
      viewContainer: homeTitlView
    }
    cy.saveMdContent(option)
  })
  it('編輯-主視覺文字-下方欄位', () => {
    let option = {
      editBtn: homeEditModeBtn,
      editContainer: homeEditContainerName,
      editTextarea: homeSloganVal
    }
    cy.editMdContent(option)
  })
  it('儲存-下方欄位-檢視模式-檢查', () => {
    let option = {
      saveBtn: homeSaveBtn,
      viewContainer: homeSloganView
    }
    cy.saveMdContent(option)
  })
  it('恢復原狀', () => {
    let optionTitle = {
      editBtn: homeEditModeBtn,
      editContainer: homeEditContainerName,
      editTextarea: homeTitleVal,
      saveBtn: homeSaveBtn,
      viewContainer: homeTitlView
    }
    let optionSlogan = {
      editBtn: homeEditModeBtn,
      editContainer: homeEditContainerName,
      editTextarea: homeSloganVal,
      saveBtn: homeSaveBtn,
      viewContainer: homeSloganView
    }
    cy.restoreEdit(optionTitle)
    cy.restoreEdit(optionSlogan)
  })
  it('欄位皆空白，顯示警語。', () => {
    // 開啟編輯模式
    cy.get(homeEditModeBtn).click()
    cy.get(homeEditContainerName).should('have.class', 'edit-mode')
    let optionTitle = {
      editBtn: homeEditModeBtn,
      editContainer: homeEditContainerName,
      editTextarea: homeTitleVal,
      blockTitle: homeEditBlockTitle,
      errorTip: homeTitleErrorTip,
      saveBtn: homeSaveBtn,
      openEdit: false
    }
    let optionSlogan = {
      editBtn: homeEditModeBtn,
      editContainer: homeEditContainerName,
      editTextarea: homeSloganVal,
      blockTitle: homeEditBlockTitle,
      errorTip: homeSloganErrorTip,
      saveBtn: homeSaveBtn,
      openEdit: false
    }
    cy.checkEmptyValAlert(optionTitle)
    cy.checkEmptyValAlert(optionSlogan)
  })
})

describe('關於我們—理念-編輯', function () {
  // 欄位值統一設定
  const aboutEditModeBtn = "form.about-slogan .admin-sbtn"
  const aboutEditContainerName = "form.about-slogan .editer-inner"
  const aboutTitleVal = "form.about-slogan input[name='sloganRule']"
  const aboutSaveBtn = "form.about-slogan .admin-edit-sbtn"
  const aboutTitlView = "form.about-slogan .view-mode > .about-content-title"
  const aboutSloganVal = "form.about-slogan textarea"
  const aboutSloganView = "form.about-slogan .view-mode .github-markdown-body"
  const aboutEditBlockTitle = "form.about-slogan h2"
  const aboutTitleErrorTip = ".about-content-philosophy-errors-tip"
  const aboutSloganErrorTip = ".about-content-title-errors-tip"
  // 開始測試動作
  it('進入標語管理', () => {
    cy.checkVisitPage(routePath, pageTitle)
  })
  it('編輯-上方標題', () => {
    let option = {
      editBtn: aboutEditModeBtn,
      editContainer: aboutEditContainerName,
      editTextarea: aboutTitleVal
    }
    cy.editMdContent(option)
  })
  it('儲存-上方標題-檢視模式-檢查', () => {
    let option = {
      saveBtn: aboutSaveBtn,
      viewContainer: aboutTitlView
    }
    cy.saveMdContent(option)
  })
  it('編輯-下方編輯器', () => {
    let option = {
      editBtn: aboutEditModeBtn,
      editContainer: aboutEditContainerName,
      editTextarea: aboutSloganVal
    }
    cy.editMdContent(option)
  })
  it('儲存-下方編輯器-檢視模式-檢查', () => {
    let option = {
      saveBtn: aboutSaveBtn,
      viewContainer: aboutSloganView
    }
    cy.saveMdContent(option)
  })
  it('恢復原狀', () => {
    let optionMd = {
      editBtn: aboutEditModeBtn,
      editContainer: aboutEditContainerName,
      editTextarea: aboutSloganVal,
      saveBtn: aboutSaveBtn,
      viewContainer: aboutSloganView
    }
    let optionTitle = {
      editBtn: aboutEditModeBtn,
      editContainer: aboutEditContainerName,
      editTextarea: aboutTitleVal,
      saveBtn: aboutSaveBtn,
      viewContainer: aboutTitlView
    }
    cy.restoreEdit(optionTitle)
    cy.restoreEdit(optionMd)
  })
  it('欄位皆空白，顯示警語。', () => {
    // 開啟編輯模式
    cy.get(aboutEditModeBtn).click()
    let optionMd = {
      editBtn: aboutEditModeBtn,
      editContainer: aboutEditContainerName,
      editTextarea: aboutSloganVal,
      blockTitle: aboutEditBlockTitle,
      errorTip: aboutTitleErrorTip,
      saveBtn: aboutSaveBtn,
      openEdit: false
    }
    let optionTitle = {
      editBtn: aboutEditModeBtn,
      editContainer: aboutEditContainerName,
      editTextarea: aboutTitleVal,
      blockTitle: aboutEditBlockTitle,
      errorTip: aboutSloganErrorTip,
      saveBtn: aboutSaveBtn,
      openEdit: false
    }
    cy.checkEmptyValAlert(optionMd)
    cy.checkEmptyValAlert(optionTitle)
  })
})

describe('關於我們—引言-編輯', function () {
  // 欄位值統一設定
  const quoteEditModeBtn = "form.about-quote .admin-sbtn"
  const quoteEditContainerName = "form.about-quote .editer-inner"
  const quoteVal = "form.about-quote textarea"
  const quoteSaveBtn = "form.about-quote .admin-edit-sbtn"
  const quoteView = "form.about-quote .view-mode .github-markdown-body"
  const quoteEditBlockTitle = "form.about-quote h2"
  const quoteErrorTip = ".about-content-quote-errors-tip"
  // 開始測試動作
  it('進入標語管理', () => {
    cy.checkVisitPage(routePath, pageTitle)
  })
  it('開啟編輯模式', () => {
    let option = {
      editBtn: quoteEditModeBtn,
      editContainer: quoteEditContainerName,
      editTextarea: quoteVal
    }
    cy.editMdContent(option)
  })
  it('儲存-檢視模式-檢查', () => {
    let option = {
      saveBtn: quoteSaveBtn,
      viewContainer: quoteView
    }
    cy.saveMdContent(option)
  })
  it('恢復原狀', () => {
    let option = {
      editBtn: quoteEditModeBtn,
      editContainer: quoteEditContainerName,
      editTextarea: quoteVal,
      saveBtn: quoteSaveBtn,
      viewContainer: quoteView
    }
    cy.restoreEdit(option)
  })
  it('欄位皆空白，顯示警語。', () => {
    let option = {
      editBtn: quoteEditModeBtn,
      editContainer: quoteEditContainerName,
      editTextarea: quoteVal,
      blockTitle: quoteEditBlockTitle,
      errorTip: quoteErrorTip,
      saveBtn: quoteSaveBtn,
      openEdit: true
    }
    cy.checkEmptyValAlert(option)
  })
})

describe('關於我們—結語-編輯', function () {
  // 欄位值統一設定
  const epilogueEditModeBtn = "form.about-epilogue .admin-sbtn"
  const epilogueEditContainerName = "form.about-epilogue .editer-inner"
  const epilogueVal = "form.about-epilogue textarea"
  const epilogueSaveBtn = "form.about-epilogue .admin-edit-sbtn"
  const epilogueView = "form.about-epilogue .view-mode .github-markdown-body"
  const epilogueEditBlockTitle = "form.about-epilogue h2"
  const epilogueErrorTip = ".about-content-epilogue-errors-tip"
  // 開始測試動作
  it('進入標語管理', () => {
    cy.checkVisitPage(routePath, pageTitle)
  })
  it('開啟編輯模式', () => {
    let option = {
      editBtn: epilogueEditModeBtn,
      editContainer: epilogueEditContainerName,
      editTextarea: epilogueVal
    }
    cy.editMdContent(option)
  })
  it('儲存-檢視模式-檢查', () => {
    let option = {
      saveBtn: epilogueSaveBtn,
      viewContainer: epilogueView
    }
    cy.saveMdContent(option)
  })
  it('恢復原狀', () => {
    let option = {
      editBtn: epilogueEditModeBtn,
      editContainer: epilogueEditContainerName,
      editTextarea: epilogueVal,
      saveBtn: epilogueSaveBtn,
      viewContainer: epilogueView
    }
    cy.restoreEdit(option)
  })
  it('欄位皆空白，顯示警語。', () => {
    let option = {
      editBtn: epilogueEditModeBtn,
      editContainer: epilogueEditContainerName,
      editTextarea: epilogueVal,
      blockTitle: epilogueEditBlockTitle,
      errorTip: epilogueErrorTip,
      saveBtn: epilogueSaveBtn,
      openEdit: true
    }
    cy.checkEmptyValAlert(option)
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err) {
    return false
  }
})