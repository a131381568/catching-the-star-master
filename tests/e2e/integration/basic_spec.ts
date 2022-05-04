// https://docs.cypress.io/api/introduction/api.html
describe('前台頁面', function () {
  it('首頁', () => {
    cy.visit('/')
    cy.title().should('eq', 'Catch The Stars — 首頁')
    cy.get('h1 > span').should('not.be.empty')
    cy.get('h4').should('not.be.empty')
    cy.get('.home-read-more').click()
    cy.get('h1').should('have.text', '天文科普')
  })
  it('關於我們', () => {
    cy.visit('/about')
    cy.title().should('eq', 'Catch The Stars — 關於我們')
    cy.get('.about-slogan').should('not.be.empty')
    cy.get('.about-philosophy > .github-markdown-body').should('not.be.empty')
    cy.get('.about-quote > .github-markdown-body').should('not.be.empty')
    cy.get('.about-epilogue > .github-markdown-body').should('not.be.empty')
  })
})
