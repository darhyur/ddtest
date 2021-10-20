/// <reference types="Cypress" />
const testDatas = require('../../fixtures/testData.json')


// the implementation uses cypress command file located in the support folder
describe('login and click wallet after account creation is successful and account validation is done', function (){

    beforeEach(function(){
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.getCookies().should('be.empty')  
        cy.viewport(1280, 720)       

    })

    afterEach(function() {

        cy.logout()
        
      })
    


    testDatas.forEach(testData => {
        it("Login and loop through all coins" + testData.testDescription, function() {
        // naviagte to login page
         cy.visit('https://devmalta.bitso.com')
         cy.get('.styles__NavLink-sc-1gbvqbn-9 > span').click()
         // call login command to login user 
         cy.login(testData.email1, testData.password)
         cy.wait(1000)
       
         //looping through the available coins

        cy.coinList('.fPjeRI', '.moon-arrow_deposit', '.crklmm' )
          
 
        })
    })
    


   
})
