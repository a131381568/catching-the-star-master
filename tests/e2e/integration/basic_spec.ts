// https://docs.cypress.io/api/introduction/api.html

// describe('首頁', function () {
//   it('進入頁面。', () => {
//     cy.visit('/')
//     cy.title().should('eq', 'Catch The Stars — 首頁')
//   })
//   it('檢查不會左右水平滑動。', () => {
//     cy.checkHoriScroll()
//   })
//   it('確認各欄位有資料。', () => {
//     cy.get('h1 > span').invoke('text').should('not.be.empty')
//     cy.get('h4').invoke('text').should('not.be.empty')
//     cy.get('.home-read-more').click()
//     cy.get('h1').should('have.text', '天文科普')
//   })
// })

// describe('關於我們', function () {
//   it('進入頁面。', () => {
//     cy.visit('/about')
//     cy.title().should('eq', 'Catch The Stars — 關於我們')
//   })
//   it('檢查不會左右水平滑動。', () => {
//     cy.checkHoriScroll()
//   })
//   it('確認各欄位有資料。', () => {
//     cy.get('.about-slogan').invoke('text').should('not.be.empty')
//     cy.get('.about-philosophy > .github-markdown-body').invoke('text').should('not.be.empty')
//     cy.get('.about-quote > .github-markdown-body').invoke('text').should('not.be.empty')
//     cy.get('.about-epilogue > .github-markdown-body').invoke('text').should('not.be.empty')
//   })
// })

// describe('天文科普', function () {
//   it('進入頁面。', () => {
//     cy.visit('/science')
//     cy.title().should('eq', 'Catch The Stars — 天文科普')
//   })
//   it('檢查不會左右水平滑動。', () => {
//     cy.checkHoriScroll()
//   })
//   it('確認篩選列有資料。', () => {
//     cy.get('.science-filter-item').should('not.be.empty')
//   })
//   it('點擊 Grid Tag，確認彙整頁連結是否正確？', () => {
//     cy.get('.grid-card-tag').should('have.attr', 'href').and('include', 'archive')
//       .then(($href) => {
//         cy.visit(String($href))
//         // cy.title().wait(2000).should('eq', 'Catch The Stars — 標籤')
//         cy.url().should('include', $href)
//         cy.get('h1').invoke('text').should('not.be.empty')
//         cy.get('.title-box-tag').invoke('text').should('not.be.empty')
//         cy.get('.search-item').invoke('text').should('not.be.empty')
//       })
//   })
//   it('點擊文章，確認內容是否正確？', () => {
//     cy.visit('/science')
//     cy.get('.grid-card-read').should('have.attr', 'href').and('include', 'science')
//       .then(($href) => {
//         cy.visit(String($href))
//         cy.url().should('include', $href)
//         // cy.get('h1').invoke('text').should('not.to.match', ':empty')
//         cy.get('h1').invoke('text').should('not.be.empty')
//         cy.get('.title-box-tag').invoke('text').should('not.be.empty')
//         cy.get('.github-markdown-body').invoke('text').should('not.be.empty')
//         cy.get('.post-bottom-meta > a').invoke('text').should('not.be.empty')
//       })
//   })
//   it('檢查不會左右水平滑動。', () => {
//     cy.checkHoriScroll()
//   })
// })

// describe('星星故事', function () {
//   let oriTimelineLength = 0
//   it('進入頁面', () => {
//     cy.visit('/story')
//     const timelineLoad = cy.url().should('include', '/story')
//     expect(timelineLoad).to.equal(timelineLoad)
//   })
//   // it('確認預設數量', async () => {
//   //   const timelineGridLen = await promisify(cy.get('.single-timeline-grid').then($grid => $grid))
//   //   expect(timelineGridLen).to.equal(timelineGridLen)
//   //   oriTimelineLength = timelineGridLen.length
//   // })
//   // it('確認標題', async () => {
//   //   const timelineGridLink = await promisify(cy.get('.single-timeline-grid-link').should('have.attr', 'href'))
//   //   const timelineTitle = await promisify(cy.get('h1').invoke('text').should('not.be.empty'))
//   //   // const timelineSubTitle = await promisify(cy.get('.title-box-tag').invoke('text').should('not.be.empty'))
//   //   expect(timelineGridLink).to.equal(timelineGridLink)
//   //   expect(timelineTitle).to.equal(timelineTitle)
//   //   // expect(timelineSubTitle).to.equal(timelineSubTitle)
//   // })
//   // it('點擊加載更多', async () => {
//   //   const clickAct = await promisify(cy.get('.timeline-loadmore').click())
//   //   const timelineGridLen = await promisify(cy.get('.single-timeline-grid').then($grid => $grid))
//   //   expect(clickAct).to.equal(clickAct)
//   //   expect(timelineGridLen).to.equal(timelineGridLen)
//   //   expect(1 + oriTimelineLength === timelineGridLen.length).to.be.true
//   // })
//   it('確認預設數量', () => {
//     cy.get('.single-timeline-grid').then($grid => {
//       oriTimelineLength = $grid.length
//       expect(oriTimelineLength === 4).to.be.true
//     })
//   })
//   it('確認標題', () => {
//     cy.get('h1').invoke('text').should('not.be.empty')
//   })
//   it('確認副標題', () => {
//     cy.get('.title-box-tag').invoke('text').should('not.be.empty')
//   })
//   it('點擊加載更多', () => {
//     cy.get('.timeline-loadmore').click()
//   })
//   it('確認加載數量', () => {
//     cy.get('.single-timeline-grid').then($newGrid => {
//       console.log($newGrid.length)
//       expect(5 === $newGrid.length).to.be.true
//     })
//   })
//   it('檢查不會左右水平滑動。', () => {
//     cy.checkHoriScroll()
//   })
//   it('點擊 Grid ，確認單一故事連結是否正確？', () => {
//     cy.get('.single-timeline-grid-link').should('have.attr', 'href').and('include', 'story')
//       .then(($href) => {
//         cy.visit(String($href))
//         cy.url().should('include', $href)
//         cy.get('h1').invoke('text').should('not.be.empty')
//         cy.get('.title-box-tag').invoke('text').should('not.be.empty')
//         cy.get('.github-markdown-body').invoke('text').should('not.be.empty')
//       })
//     it('檢查不會左右水平滑動。', () => {
//       cy.checkHoriScroll()
//     })
//   })
// })

describe('天文設施', function () {
  let facilitiesLen = 0
  it('進入頁面。', () => {
    cy.visit('/facilities')
    cy.title().should('eq', 'Catch The Stars — 天文設施')
  })
  it('檢查不會左右水平滑動。', () => {
    cy.checkHoriScroll()
  })
  it('確認各欄位有資料。', () => {
    cy.get('h1').invoke('text').should('not.be.empty')
    cy.get('.title-box-tag').invoke('text').should('not.be.empty')
    // cy.get('.about-slogan').invoke('text').should('not.be.empty')
    // cy.get('.about-philosophy > .github-markdown-body').invoke('text').should('not.be.empty')
    // cy.get('.about-quote > .github-markdown-body').invoke('text').should('not.be.empty')
    // cy.get('.about-epilogue > .github-markdown-body').invoke('text').should('not.be.empty')
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



})

Cypress.on('uncaught:exception', (err, runnable) => {
  // console.log('error', err)
  // console.log('runnable', runnable)
  if (err) {
    return false
  }
})