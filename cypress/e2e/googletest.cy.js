/// <reference types="Cypress" />

import { selectors } from "./utils/selectors"
import { returnSelectorName } from "./utils/utils"



describe('template spec', () => {
 beforeEach(() => { 
    cy.visit('https://qa.myaccount.reguardprotection.com')
 })

  it('my first test', () => {
    cy.get(returnSelectorName(selectors.emailInputField)).type('amukushev78@gmail.com')
    cy.get(returnSelectorName(selectors.passwordInputField)).type('amukushev78@gmail.com')
    cy.get(returnSelectorName(selectors.loginButton)).click()

  })

})