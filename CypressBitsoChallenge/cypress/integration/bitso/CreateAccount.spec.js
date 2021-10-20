/// <reference types="Cypress" />

import CreateAccoutPage from '../pageObjects/CreateAccountPage'
import NaviagtionPage from '../pageObjects/NavigationPage'
const testDatas = require('../../fixtures/testData.json')

// create account was implemented using pageObeject design structure.
describe('Create Acount', function (){


    beforeEach(function(){
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.getCookies().should('be.empty')
        cy.viewport(1280, 720)

        const navigation = new NaviagtionPage

        // Navigate to "https://devmalta.bitso.com/register" to register new account 
        navigation.visit("https://devmalta.bitso.com/register")

        // validate the navigation was to the right page 
        cy.url().should('include', '/devmalta.bitso.com/register')
        cy.title().should('eq', 'Buy and sell bitcoin and other cryptocurrencies in a few minutes | Bitso')
        

    })

    testDatas.forEach(testData => {
        it( "Creating account for" + testData.testDescription,  function() {
        
 
         const createAccount = new CreateAccoutPage
        
         // Complete and submit account opening form
         createAccount.selectAccountType()
         createAccount.selectCountry(testData.country)
         createAccount.enterEmail(testData.email)
         createAccount.enterPassword(testData.password)
         createAccount.enterConfirmPassword(testData.password)
         createAccount.checkTermsConditions()
         createAccount.checkReceiveBitsoNews()
         createAccount.checkPrivatePolicy()         
         cy.get('body').then((body) => {
            if(body.find('input[name=accept_nvio_terms]').length > 0)
            createAccount.checkAcceptNvioTerms()
          })         
         createAccount.submit()
         createAccount.validateAccountCreation() 
        })
    })
    

    

})

