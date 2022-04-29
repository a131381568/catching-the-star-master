// https://docs.cypress.io/api/introduction/api.html

describe('Login', function () {
  let _email = ''
  let _password = ''
  before(() => {
    cy.fixture('test-user.json').then(res => {
      _email = res.email
      _password = res.password
    })
  })
  it('Shows correct text', () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type(_email);
    cy.get('input[name="password"]').type(_password);
    cy.get('button#submit-login').click();
    cy.url().should('include', '/board')
    // cy.contains('li.items-end', 'Header')
  })

  it('Should not have vertical scroll bars on mobile or desktop', () => {
    cy.viewport('iphone-5')
    cy.window().then(() => {
      const htmlScrollWidth = Cypress.$('html')[0].scrollWidth
      const htmlWidth = Cypress.$('html')[0].clientWidth
      const scrollBarWidth = htmlScrollWidth - htmlWidth
      expect(scrollBarWidth).to.be.eq(0)
    })

    cy.viewport('macbook-11')
    cy.window().then(() => {
      const htmlScrollWidth = Cypress.$('html')[0].scrollWidth
      const htmlWidth = Cypress.$('html')[0].clientWidth
      const scrollBarWidth = htmlScrollWidth - htmlWidth
      expect(scrollBarWidth).to.be.eq(0)
    })
  })
})
