/// <reference types="Cypress" />
const testDatas = require('../../fixtures/testData.json')

//const { data } = require("cypress/types/jquery")


// the implementation uses cypress command file located in the support folder
describe('add beneficiary to account', function (){
    // beforeEach(function(){
    //     cy.fixture('testData').then(function(data){

    //     this.data=data

    //     })

    // })

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
        it("Add beneficiary to " + testData.testDescription, function() {
         // navigate to add beneficiaries 
        cy.visit('https://devmalta.bitso.com/r/user/beneficiaries/add')
 
          // call login 
          
          cy.login(testData.email1, testData.password)
          //Add beneficiary to Mexico account
          cy.addBeneficiary(testData.firstName, testData.lastName, testData.SecondLastName, testData.dateOfBirth, testData.kinship, testData.beneficiaryPercengate, testData.PIN)
         
 
 
        })
    })
    

    
})

