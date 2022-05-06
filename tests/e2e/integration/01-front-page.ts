// https://docs.cypress.io/api/introduction/api.html

describe('首頁', function () {
  it('進入頁面。', () => {
    cy.visit('/')
    cy.title().should('eq', 'Catch The Stars — 首頁')
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('確認各欄位有資料。', () => {
    cy.get('h1 > span').invoke('text').should('not.be.empty')
    cy.get('h4').invoke('text').should('not.be.empty')
    cy.get('.home-read-more').click()
    cy.get('h1').should('have.text', '天文科普')
  })
})

describe('關於我們', function () {
  it('進入頁面。', () => {
    cy.visit('/about')
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    cy.get('.menu-grid-ul a[href="/about"]').click()
    cy.title().should('eq', 'Catch The Stars — 關於我們')
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('確認各欄位有資料。', () => {
    cy.get('.about-slogan').invoke('text').should('not.be.empty')
    cy.get('.about-philosophy > .github-markdown-body').invoke('text').should('not.be.empty')
    cy.get('.about-quote > .github-markdown-body').invoke('text').should('not.be.empty')
    cy.get('.about-epilogue > .github-markdown-body').invoke('text').should('not.be.empty')
  })
})

describe('天文科普', function () {
  it('進入頁面。', () => {
    cy.visit('/science')
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    cy.get('.menu-grid-ul a[href="/science"]').click()
    cy.title().should('eq', 'Catch The Stars — 天文科普')
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('確認篩選列有資料。', () => {
    cy.get('.science-filter-item').should('not.be.empty')
  })
  it('點擊 Grid Tag，確認彙整頁連結是否正確？', () => {
    cy.get('.grid-card-tag').should('have.attr', 'href').and('include', 'archive')
      .then(($href) => {
        cy.visit(String($href))
        // cy.title().wait(2000).should('eq', 'Catch The Stars — 標籤')
        cy.url().should('include', $href)
        cy.get('h1').invoke('text').should('not.be.empty')
        cy.get('.title-box-tag').invoke('text').should('not.be.empty')
        cy.get('.search-item').invoke('text').should('not.be.empty')
      })
  })
  it('點擊文章，確認內容是否正確？', () => {
    cy.visit('/science')
    cy.get('.grid-card-read').should('have.attr', 'href').and('include', 'science')
      .then(($href) => {
        cy.visit(String($href))
        cy.url().should('include', $href)
        // cy.get('h1').invoke('text').should('not.to.match', ':empty')
        cy.get('h1').invoke('text').should('not.be.empty')
        cy.get('.title-box-tag').invoke('text').should('not.be.empty')
        cy.get('.github-markdown-body').invoke('text').should('not.be.empty')
        cy.get('.post-bottom-meta > a').invoke('text').should('not.be.empty')
      })
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
})

describe('星星故事', function () {
  let oriTimelineLength = 0
  it('進入頁面', () => {
    cy.visit('/story')
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    cy.get('.menu-grid-ul a[href="/story"]').click()
    const timelineLoad = cy.url().should('include', '/story')
    expect(timelineLoad).to.equal(timelineLoad)
  })
  it('確認預設數量', () => {
    cy.get('.single-timeline-grid').then($grid => {
      oriTimelineLength = $grid.length
      expect(oriTimelineLength === 4).to.be.true
    })
  })
  it('確認標題', () => {
    cy.get('h1').invoke('text').should('not.be.empty')
  })
  it('確認副標題', () => {
    cy.get('.title-box-tag').invoke('text').should('not.be.empty')
  })
  it('點擊加載更多', () => {
    // cy.wait('.modal-bg')
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    cy.get('.timeline-loadmore').click()
  })
  it('確認加載數量', () => {
    cy.wait(2000)
    cy.get('.single-timeline-grid').then($newGrid => {
      console.log($newGrid.length)
      expect(5 === $newGrid.length).to.be.true
    })
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('點擊 Grid ，確認單一故事連結是否正確？', () => {
    cy.get('.single-timeline-grid-link').should('have.attr', 'href').and('include', 'story')
      .then(($href) => {
        cy.visit(String($href))
        cy.url().should('include', $href)
        cy.get('h1').invoke('text').should('not.be.empty')
        cy.get('.title-box-tag').invoke('text').should('not.be.empty')
        cy.get('.github-markdown-body').invoke('text').should('not.be.empty')
      })
    it('檢查不會左右水平滑動。', () => {
      cy.checkHoriScroll()
    })
  })
})

describe('天文設施', function () {
  let facilitiesLen = 0
  let tableFilter = 0
  it('進入頁面。', () => {
    cy.visit('/facilities')
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    cy.get('.menu-grid-ul a[href="/facilities"]').click()
    cy.title().should('eq', 'Catch The Stars — 天文設施')
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('確認各欄位有資料。', () => {
    cy.get('h1').invoke('text').should('not.be.empty')
    cy.get('.title-box-tag').invoke('text').should('not.be.empty')
  })
  it('確認-推廣機構-數量', () => {
    cy.get('.facility-item').then($grid => {
      facilitiesLen = $grid.length
      expect($grid.length > 0).to.be.true
    })
  })
  it('推廣機構-連結確認', () => {
    for (let index = 0; index < facilitiesLen; index++) {
      cy.get('.facility-item a').eq(index).should('have.attr', 'href')
    }
  })
  it('確認-天文台篩選-頁籤', () => {
    cy.get('.table-filter li').then($tab => {
      tableFilter = $tab.length
      expect($tab.length > 0).to.be.true
    })
  })

  it('天文台-頁籤內容確認', () => {
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    for (let index = 0; index < tableFilter; index++) {
      cy.get('.table-filter li label').eq(index).click()
      cy.wait(1500)
      cy.get('.facilities-md-container .github-markdown-body').eq(index).invoke('text').should('not.be.empty')
    }
  })

})

describe('觀星地點', function () {
  let localNum = 0
  let markNum = 0
  it('進入頁面。', () => {
    cy.visit('/stargazing')
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    cy.get('.menu-grid-ul a[href="/stargazing"]').click()
    cy.title().should('eq', 'Catch The Stars — 觀星地點')
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('確認標題副標題。', () => {
    cy.get('h1').invoke('text').should('not.be.empty')
    cy.get('.title-box-tag').invoke('text').should('not.be.empty')
  })
  it('確認左側地圖選單和座標數量。', () => {
    cy.get('.stargazing-menu').should('be.visible');
    cy.get('.stargazing-menu li').then($local => {
      localNum = $local.length
      expect(localNum > 0).to.be.true
    })
    cy.get('.leaflet-marker-icon').then($mark => {
      markNum = $mark.length
      expect(markNum > 0).to.be.true
    })
    expect(localNum === markNum).to.be.true
  })
  it('地點資訊確認。', () => {
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    for (let index = 0; index < markNum; index++) {
      cy.get('.stargazing-menu li').eq(index).click()
      cy.wait(1000)
      cy.get('.stargazing-info-card h2').invoke('text').should('not.be.empty')
      cy.get('.stargazing-info-description').invoke('text').should('not.be.empty')
      cy.get('.close-stargazing-menu-btn').click()
      cy.wait(1000)
    }
  })
})

describe('搜尋', function () {
  let postItems = 0
  it('進入頁面。', () => {
    cy.get('.menu-toggle-btn').click()
    cy.wait(2000)
    cy.get('.menu-grid-ul a[href="/search"]').click()
    cy.title().should('eq', 'Catch The Stars — 搜尋頁面')
  })
  it('確認為未搜尋前。', () => {
    cy.get('.post-grid-items').should('not.be.visible')
  })
  it('空白搜尋，下方顯示警示', () => {
    cy.get('.search-btn').click()
    cy.wait(1000)
    cy.get('.errors-tip').should('have.css', 'display', 'block')
  })
  it('Key 關鍵字-星-後搜尋。', () => {
    cy.get('input[placeholder="Search"]').type('星')
    cy.get('.search-btn').click()
    cy.wait(1000)
    cy.get('.post-grid-items').should('be.visible')
    cy.get('.post-grid-item').then($postItem => {
      postItems = $postItem.length
      expect(postItems > 0).to.be.true
    })
  })
  it('點擊加載更多。', () => {
    cy.wait(2000)
    cy.get('.search-loadmore').click()
  })
  it('確認加載數量。', () => {
    cy.wait(2000)
    cy.get('.post-grid-item').then($newPostItem => {
      expect(3 + postItems === $newPostItem.length).to.be.true
    })
  })
  it('搜尋不佳關鍵字，回傳查無資訊。', () => {
    cy.get('input[placeholder="Search"]').clear().type("wwwwxxxxwwxx");
    cy.get('.search-btn').click()
    cy.wait(1000)
    cy.get('.search-nothing-tip').should('have.css', 'display', 'block')
  })

  it('點左上 Logo 回到首頁', () => {
    cy.get('.header-logo > a').click()
    cy.wait(2000)
    cy.title().should('eq', 'Catch The Stars — 首頁')
  })

})

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err) {
    return false
  }
})