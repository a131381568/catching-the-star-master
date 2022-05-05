import promisify from 'cypress-promise'
https://docs.cypress.io/api/introduction/api.html
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

describe('星星故事', function async() {
  it('確認資料', async () => {
    cy.visit('/story')
    await promisify(cy.url().should('include', '/story'))
    const timelineGrid = await promisify(cy.wrap('.single-timeline-grid-link'))
    cy.get('h1').invoke('text').should('not.be.empty')
    cy.get('.title-box-tag').invoke('text').should('not.be.empty')
    expect(timelineGrid).to.equal(timelineGrid)
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

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log('error', err)
  console.log('runnable', runnable)
  if (err) {
    return false
  }
})