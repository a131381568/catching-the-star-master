// 統一管理路由
const organRoutePath = '/board/organization'
const organPageTitle = '天文機構管理'
const addOrganRoutePath = '/board/organization/add'
const addOrganPageTitle = '新增機構'

// 機構
const singleOragnTitleLocation = '.single-organ-title-box h1'
const saveBtn = '.single-organ-title-box button'
const firstOrganTitleVal = '中央研究院天文物理研究所'
const firstOrganLinkVal = 'https://www.asiaa.sinica.edu.tw/'
const firstOrganDesVal = '本所位於國立台灣大學校總區內之「天文數學館」，另於夏威夷設有辦事處。'
const scOrganTitleVal = '高雄市天文教育館'
const scOrganLinkVal = 'https://khh.travel/zh-tw/attractions/detail/34'
const scOrganDesVal = '位於小港區港和國小內的天文教育館於2000年成立了。'
const titleInputLocation = 'input[name="facilitiesTitleRef"]'
const linkInputLocation = 'input[name="facilitiesLinkRef"]'
const desInputLocation = 'textarea[name="facilitiesDescriptionRef"]'
const titleErrorLocation = '.organ-title-error-tip'
const linkErrorLocation = '.organ-link-error-tip'
const desErrorLocation = '.organ-des-error-tip'

describe('新增機構。', function () {
  it('進入新增機構頁面。', () => {
    cy.checkVisitPage(addOrganRoutePath, addOrganPageTitle)
  })
  it('測試空白防呆。', () => {
    cy.get(titleInputLocation).focus()
    cy.get(linkInputLocation).focus()
    cy.get(desInputLocation).focus()
    cy.get(singleOragnTitleLocation).click()
    cy.get(titleErrorLocation).should('have.text', '此欄位必填')
    cy.get(linkErrorLocation).should('have.text', '此欄位必填')
    cy.get(desErrorLocation).should('have.text', '此欄位必填')
  })
  it('輸入資料。', () => {
    cy.loginDirect()
    cy.get(titleInputLocation).type(firstOrganTitleVal)
    cy.get(linkInputLocation).type(firstOrganLinkVal)
    cy.get(desInputLocation).type(firstOrganDesVal)
    cy.updateImage('.update-btn')
  })
  it('儲存新增資料，並檢查後台列表是否已新增？', () => {
    cy.saveTableEditAction(saveBtn, false, '機構', firstOrganTitleVal)
  })
  it('檢查前台天文機構，是否已新增？', () => {
    cy.checkFacilitiesOrgan(firstOrganTitleVal, false)
  })
})


describe('編輯機構。', function () {
  it('進入後台機構列表，並進入指定機構編輯頁。', () => {
    cy.checkVisitPage(organRoutePath, organPageTitle)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="機構"]').should('have.text', firstOrganTitleVal).next().next().children('svg').click()
  })
  it('修改資料。', () => {
    cy.loginDirect()
    cy.get(titleInputLocation).invoke('val').should('eq', firstOrganTitleVal)
    cy.get(titleInputLocation).clear().type(scOrganTitleVal)
    cy.get(linkInputLocation).clear().type(scOrganLinkVal)
    cy.get(desInputLocation).clear().type(scOrganDesVal)
  })
  it('儲存新增資料，並檢查後台列表是否已新增？', () => {
    cy.saveTableEditAction(saveBtn, false, '機構', scOrganTitleVal)
  })
  it('檢查前台天文機構，是否已新增？', () => {
    cy.checkFacilitiesOrgan(scOrganTitleVal, false)
  })
})


describe('刪除機構。', function () {
  it('進入後台機構列表，並對指定機構點擊刪除。', () => {
    cy.checkVisitPage(organRoutePath, organPageTitle)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="機構"]').should('have.text', scOrganTitleVal).next().next().next().children('svg').click()
  })
  it('確定刪除，並檢查後台列表是否已刪除？', () => {
    cy.loginDirect()
    cy.wait(1000)
    cy.get('.admin-stargazer-modal .confirm-true-btn').click()
    cy.wait(1000)
    cy.get('#responsive-table tbody tr').last().children('td[data-title="機構"]').should('not.have.text', scOrganTitleVal)
  })
  it('檢查前台天文機構，是否已刪除？', () => {
    cy.checkFacilitiesOrgan(scOrganTitleVal, true)
  })
})