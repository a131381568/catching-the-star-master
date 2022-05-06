// import "cypress-localstorage-commands"
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Yields "foo"
       *
       * @returns {typeof foo}
       * @memberof Chainable
       * @example
       *    cy.foo().then(f = ...) // f is "foo"
       */
      login: typeof login
      checkHoriScroll: typeof checkHoriScroll
      loginDirect: typeof loginDirect
    }
  }
}
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// 登入
Cypress.Commands.add("login", login)

// 檢查不會左右水平滑動
Cypress.Commands.add("checkHoriScroll", checkHoriScroll)

// 自動請求登入
Cypress.Commands.add("loginDirect", loginDirect)

export function login() {
  cy.visit('/login')
  cy.get('input[name="email"]').type("kevin@test.com");
  cy.get('input[name="password"]').type("123456");
  cy.get('button#submit-login').click()
  cy.url().should('include', '/board')
  // cy.contains('li.items-end', 'Header')
  // })
}

export function checkHoriScroll() {
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
}

export function loginDirect() {
  const mutation = ` mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
              name
              uid
              email
              token
              exp
              refreshToken
              refreshExp
              errorTitle
              errorMsg
          }
      }`;
  cy.request({
    url: 'http://localhost:4000/graphql/',  // graphql endpoint
    method: 'POST',
    body: {
      query: mutation, variables: {
        "email": "kevin@test.com",
        "password": "123456"
      }
    },
    failOnStatusCode: false,
    headers: {
      authorization: ''
    }
  }).then((res) => {
    const personalInfo = res.body.data.login
    localStorage.setItem("token", personalInfo.token)
    localStorage.setItem("expired", personalInfo.exp)
    localStorage.setItem("refresh-token", personalInfo.refreshToken)
    localStorage.setItem("refresh-expired", personalInfo.refreshExp)
    expect(localStorage.getItem('token')).to.not.be.null
    expect(localStorage.getItem('expired')).to.not.be.null
    expect(localStorage.getItem('refresh-token')).to.not.be.null
    expect(localStorage.getItem('refresh-expired')).to.not.be.null
  });
}