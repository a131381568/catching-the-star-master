// 統一管理路由
const obsRoutePath = '/board/observatories'
const obsPageTitle = '天文台管理'
const addobsRoutePath = '/board/observatories/add'
const addobsPageTitle = '新增天文台'
// 天文台
const singleObsTitleLocation = '.single-obs-title-box h1'
const obsSaveBtn = '.single-obs-title-box button'
// 第一次輸入資料
const firstObsCatName = '商業行銷'
const firstObsCatId = 'business'
const firstObsContent = '|名稱|口徑|廠牌|赤道儀|圓頂直徑|\n|-|-|-|-|-|\n|ooo天文台|36.0 cm|xxx|oo赤道儀|3.0 m|'
// 第二次輸入資料
const scObsCatName = '已拆毀'
const scObsContent = '|名稱|口徑|廠牌|赤道儀|圓頂直徑|\n|-|-|-|-|-|\n|xxx天文台|36.0 cm|xxx|oo赤道儀|3.0 m|'
// 輸入資料欄位
const obsCatNameInputLocation = 'input[name="observatoriesTitleRef"]'
const obsCatIdInputLocation = 'input[name="observatoriesCatIdRef"]'
const obsContentInputLocation = '.v-md-textarea-editor textarea'
// 警語位置
const obsCatNameErrorLocation = '.obs-cat-name-error-tip'
const obsCatIdErrorLocation = '.obs-cat-id-error-tip'
const obsContentErrorLocation = '.obs-content-error-tip'

describe('新增天文台。', function () {
  it('進入新增天文台頁面。', () => {
    cy.checkVisitPage(addobsRoutePath, addobsPageTitle)
  })
  it('測試空白防呆。', () => {
    cy.get(obsCatNameInputLocation).focus()
    cy.get(obsCatIdInputLocation).focus()
    cy.get(obsContentInputLocation).type('1{backspace}')
    cy.get(obsCatNameErrorLocation).should('have.text', '此欄位必填')
    cy.get(obsCatIdErrorLocation).should('have.text', '此欄位必填')
    cy.get(obsContentErrorLocation).should('have.text', '此欄位必填')
  })
  it('輸入資料。', () => {
    cy.loginDirect()
    cy.get(obsCatNameInputLocation).type(firstObsCatName)
    cy.get(obsCatIdInputLocation).type(firstObsCatId)
    cy.get(obsContentInputLocation).type(firstObsContent)
  })
  it('儲存新增資料，並檢查後台列表是否已新增？', () => {
    cy.saveTableEditAction(obsSaveBtn, false, '分類', firstObsCatName)
  })
  it('檢查前台天文台，是否已新增？', () => {
    cy.checkFacilitiesObs(firstObsCatName, false)
  })
})

describe('編輯天文台。', function () {
  it('進入後台天文台列表，並進入指定天文台編輯頁。', () => {
    cy.checkVisitPage(obsRoutePath, obsPageTitle)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="分類"]').should('have.text', firstObsCatName).next().next().children('svg').click()
  })
  it('修改資料。', () => {
    cy.loginDirect()
    cy.get(obsCatNameInputLocation).invoke('val').should('eq', firstObsCatName)
    cy.get(obsCatNameInputLocation).clear().type(scObsCatName)
    cy.get(obsContentInputLocation).clear().type(scObsContent)
  })
  it('儲存新增資料，並檢查後台列表內，分類名稱是否已修改？', () => {
    cy.saveTableEditAction(obsSaveBtn, false, '分類', scObsCatName)
  })
  it('檢查前台天文台，分類名稱是否已修改？', () => {
    cy.checkFacilitiesObs(scObsCatName, false)
  })
})

describe('刪除機構。', function () {
  it('進入後台天文台列表，並對指定天文台點擊刪除。', () => {
    cy.checkVisitPage(obsRoutePath, obsPageTitle)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="分類"]').should('have.text', scObsCatName).next().next().next().children('svg').click()
  })
  it('確定刪除，並檢查後台列表是否已刪除？', () => {
    cy.loginDirect()
    cy.wait(1000)
    cy.get('.admin-stargazer-modal .confirm-true-btn').click()
    cy.wait(1000)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="分類"]').should('not.have.text', scObsCatName)
  })
  it('檢查前台天文台，是否已刪除？', () => {
    cy.checkFacilitiesObs(scObsCatName, true)
  })
})