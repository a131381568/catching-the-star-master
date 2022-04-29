it('Srarchhh', () => {
  cy.visit('https://www.google.com/?hl=zh_tw')
  cy.get('.gLFyf').type('YouTube{enter}');
  cy.url().should('include', 'https://www.google.com/search?q=YouTube')
})