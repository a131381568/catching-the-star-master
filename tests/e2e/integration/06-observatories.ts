// 統一管理路由
const obsRoutePath = '/board/observatories'
const obsPageTitle = '天文台管理'
const addobsRoutePath = '/board/observatories/add'
const addobsPageTitle = '新增天文台'

// 天文台
const singleObsTitleLocation = '.single-obs-title-box h1'
const obsSaveBtn = '.single-obs-title-box button'

const firstObsCatName = '商業行銷'
const firstObsCatId = 'business'
const firstObsContent = '|名稱|口徑|廠牌|赤道儀|圓頂直徑|\n|-|-|-|-|-|\n|ooo天文台|36.0 cm|xxx|oo赤道儀|3.0 m|'
const scObsCatName = '高雄市天文教育館'
const scObsCatId = 'https://khh.travel/zh-tw/attractions/detail/34'
const scObsContent = '位於小港區港和國小內的天文教育館於2000年成立了。'
const obsCatNameInputLocation = 'input[name="observatoriesTitleRef"]'
const obsCatIdInputLocation = 'input[name="observatoriesCatIdRef"]'
const obsContentInputLocation = '.v-md-textarea-editor textarea'
const obsCatNameErrorLocation = '.obs-cat-name-error-tip'
const obsCatIdErrorLocation = '.obs-cat-id-error-tip'
const obsContentErrorLocation = '.obs-content-error-tip'

describe('新增機構。', function () {
  it('進入新增機構頁面。', () => {
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
  // it('儲存新增資料，並檢查後台列表是否已新增？', () => {
  //   cy.saveTableEditAction(obsSaveBtn, false, '分類', firstObsCatName)
  // })
  // it('檢查前台天文機構，是否已新增？', () => {
  //   cy.checkFacilitiesOrgan(scOrganTitleVal, false)
  // })
})


// describe('編輯機構。', function () {
//   it('進入後台機構列表，並進入指定機構編輯頁。', () => {
//     cy.checkVisitPage(obsRoutePath, obsPageTitle)
//     cy.get('#responsive-table tbody tr').last().children('td[data-title="機構"]').should('have.text', firstObsCatName).next().next().children('svg').click()
//   })
//   it('修改資料。', () => {
//     cy.loginDirect()
//     cy.get(obsCatNameInputLocation).invoke('val').should('eq', firstObsCatName)
//     cy.get(obsCatNameInputLocation).clear().type(scObsCatName)
//     cy.get(obsCatIdInputLocation).clear().type(scObsCatId)
//     cy.get(obsContentInputLocation).clear().type(scObsContent)
//   })
//   it('儲存新增資料，並檢查後台列表是否已新增？', () => {
//     cy.saveTableEditAction(obsSaveBtn, false, '機構', scObsCatName)
//   })
//   it('檢查前台天文機構，是否已新增？', () => {
//     cy.checkFacilitiesOrgan(scOrganTitleVal, false)
//   })
// })


// describe('刪除機構。', function () {
//   it('進入後台機構列表，並對指定機構點擊刪除。', () => {
//     cy.checkVisitPage(obsRoutePath, obsPageTitle)
//     cy.get('#responsive-table tbody tr').last().children('td[data-title="機構"]').should('have.text', scObsCatName).next().next().next().children('svg').click()
//   })
//   it('確定刪除，並檢查後台列表是否已刪除？', () => {
//     cy.loginDirect()
//     cy.wait(1000)
//     cy.get('.admin-stargazer-modal .confirm-true-btn').click()
//     cy.wait(1000)
//     cy.get('#responsive-table tbody tr').last().children('td[data-title="機構"]').should('not.have.text', scObsCatName)
//   })
//   it('檢查前台天文機構，是否已刪除？', () => {
//     cy.checkFacilitiesOrgan(scOrganTitleVal, true)
//   })
// })