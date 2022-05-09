// 統一管理路由
const stargazerRoutePath = '/board/stargazer'
const stargazerPageTitle = '觀星地點列表'
const addstargazerRoutePath = '/board/stargazer/add'
const addstargazerPageTitle = '新增觀星地點'
// 觀星地點
const singleStargazerTitleLoc = '.single-stargazer-title-box h1'
const stargazerSaveBtn = '.single-stargazer-title-box button'
// 第一次輸入資料
const firstStargazerName = '台北101'
const firstStargazerDes = '台北市信義區信義路五段7號'
const firstStargazerIntro = '高聳的地標性摩天大樓，設有商店、餐廳，以及位於 89 樓的觀景台。'
const firstStargazerLat = '25.033983937454998'
const firstStargazerLon = '121.56457755750542'
// 第二次輸入資料
const scStargazerName = '向山行政暨遊客中心'
const scStargazerDes = '南投縣魚池鄉中山路599號'
const scStargazerIntro = '未來感十足的遊客中心，由團紀彥所設計，坐落於日月潭，並與美麗景色融為一體。'
const scStargazerLat = '23.852132815920466'
const scStargazerLon = '120.90224136862089'
// 輸入資料欄位
const stargazerNameInputLoc = 'input[name="placeNameRef"]'
const stargazerDesInputLoc = 'input[name="placeDescriptionRef"]'
const stargazerIntroInputLoc = 'textarea[name="placeIntroductionRef"]'
const stargazerLatInputLoc = 'input[name="placeLatRef"]'
const stargazerLonInputLoc = 'input[name="placeLonRef"]'
// 警語位置
const stargazerNameErrorLoc = '.stargazer-name-error-tip'
const stargazerDesErrorLoc = '.stargazer-des-error-tip'
const stargazerIntroErrorLoc = '.stargazer-intro-error-tip'
const stargazerLatErrorLoc = '.lat-error-tip'
const stargazerLonErrorLoc = '.lon-error-tip'

describe('新增觀星地點。', function () {
  it('進入新增觀星地點頁面。', () => {
    cy.checkVisitPage(addstargazerRoutePath, addstargazerPageTitle)
  })
  it('測試空白防呆。', () => {
    cy.get(stargazerNameInputLoc).focus()
    cy.get(stargazerDesInputLoc).focus()
    cy.get(stargazerIntroInputLoc).focus()
    cy.get(stargazerLatInputLoc).focus()
    cy.get(stargazerLonInputLoc).focus()
    cy.get(singleStargazerTitleLoc).click()
    cy.get(stargazerNameErrorLoc).should('have.text', '此欄位必填')
    cy.get(stargazerDesErrorLoc).should('have.text', '此欄位必填')
    cy.get(stargazerIntroErrorLoc).should('have.text', '此欄位必填')
    cy.get(stargazerLatErrorLoc).should('have.text', '請輸入緯度')
    cy.get(stargazerLonErrorLoc).should('have.text', '請輸入經度')
  })
  it('輸入資料。', () => {
    cy.loginDirect()
    cy.get(stargazerNameInputLoc).type(firstStargazerName)
    cy.get(stargazerDesInputLoc).type(firstStargazerDes)
    cy.get(stargazerIntroInputLoc).type(firstStargazerIntro)
    cy.get(stargazerLatInputLoc).type(firstStargazerLat)
    cy.get(stargazerLonInputLoc).type(firstStargazerLon)
    // 上傳圖片
    cy.updateImage('.update-btn')
  })

  it('儲存新增資料，並檢查地點列表是否已新增？', () => {
    cy.saveTableEditAction(stargazerSaveBtn, true, '名稱', firstStargazerName)
  })
  it('檢查前台觀星地點，是否已新增？', () => {
    cy.checkStargazing(firstStargazerName, false)
  })
})

describe('編輯觀星地點。', function () {
  it('進入後台觀星地點列表，並進入指定地點編輯頁。', () => {
    cy.checkVisitPage(stargazerRoutePath, stargazerPageTitle)
    cy.get('#responsive-table tbody tr').first().children('td[data-title="名稱"]').should('have.text', firstStargazerName).next().next().children('svg').click()
  })
  it('修改資料。', () => {
    cy.loginDirect()
    cy.get(stargazerNameInputLoc).invoke('val').should('eq', firstStargazerName)
    cy.get(stargazerNameInputLoc).clear().type(scStargazerName)
    cy.get(stargazerDesInputLoc).clear().type(scStargazerDes)
    cy.get(stargazerIntroInputLoc).clear().type(scStargazerIntro)
    cy.get(stargazerLatInputLoc).clear().type(scStargazerLat)
    cy.get(stargazerLonInputLoc).clear().type(scStargazerLon)
  })
  it('儲存修改資料，並檢查後台列表內，地點名稱是否已修改？', () => {
    cy.saveTableEditAction(stargazerSaveBtn, true, '名稱', scStargazerName)
  })
  it('檢查前台觀星地點，地點是否已修改？', () => {
    cy.checkStargazing(scStargazerName, false)
  })
})

describe('刪除觀星地點。', function () {
  it('進入後台觀星列表，並對指定地點點擊刪除。', () => {
    cy.checkVisitPage(stargazerRoutePath, stargazerPageTitle)
    cy.get('#responsive-table tbody tr').first().children('td[data-title="名稱"]').should('have.text', scStargazerName).next().next().next().children('svg').click()
  })
  it('確定刪除，並檢查後台列表是否已刪除？', () => {
    cy.loginDirect()
    cy.wait(1000)
    cy.get('.admin-stargazer-modal .confirm-true-btn').click()
    cy.wait(1000)
    cy.get('#responsive-table tbody tr').first().children('td[data-title="名稱"]').should('not.have.text', scStargazerName)
  })
  it('檢查前台觀星地點，是否已刪除？', () => {
    cy.checkStargazing(scStargazerName, true)
  })
})