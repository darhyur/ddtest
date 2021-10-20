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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('navigation', (value) => {


    cy.visit(value)

    cy.visit('https://devmalta.bitso.com/')

    cy.url().should('include', '/devmalta.bitso.com')
    cy.title().should('eq', 'Buy and sell bitcoin and other cryptocurrencies in a few minutes | Bitso') 

})

// user login command
Cypress.Commands.add('login', (email, password) => {

    // cy.visit('https://devmalta.bitso.com/')
    // cy.get('.styles__NavLink-sc-1gbvqbn-9 > span').click()
    

    cy.wait(2*1000)
    cy.get('#client_id').clear().type(email)
    cy.get('#password').clear().type(password)
    cy.get('button[type=submit]').click()
    // cy.url().should('include', 'https://devmalta.bitso.com/wallet')
    // cy.title().should('have.text', 'Buy and sell bitcoin and other cryptocurrencies in a few minutes | Bitso') 

})



// let's make a custom command to read the values from the list
Cypress.Commands.add('coinList', (selector, selectorButton, selector3, selector4) => {
    
      // validate url and page
    // cy.url().should('include', '/devmalta.bitso.com/wallet')
    // cy.title().should('eq', 'Buy and sell bitcoin and other cryptocurrencies in a few minutes | Bitso')
    cy.wait(2*1000) 
    cy.get(selector,  { timeout: 10000 }).should('be.visible');
    cy.get(selector).each((li, index, $list) => {
      // cy.get(selector,  { timeout: 10000 }).should('be.visible');

      if(index!=0) {
        cy.wrap(li).click() 
        cy.log(li.text()) 
        cy.get(selectorButton).click() 
        cy.wait(1000)
        cy.get(selector3, { timeout: 10000 }).should('be.visible');
        cy.get(selector3).should('have.text','Oops! Something went wrong').type("{esc}")

        // cy.get('.moon-alert')
        //  cy.get(selector4).click()


       
      

         // unable to validate this because there was no pop up on clicking the coins in the wallet
        // cy.get('[data-testid=modal-close]').should('eq', 'Oops! something went wrong This transaction exceeds your limit. Increase your limit to continue.')

      }
    
      })
      
  })







Cypress.Commands.add('addBeneficiary', (firstName,lastName, SecondLastName, dateOfBirth, kinship, beneficiaryPercengate) => {

  cy.wait(2*1000)
    cy.get('input[name=first_name]').clear().type(firstName)
    cy.get('input[name=last_name]').clear().type(lastName)
    cy.get('input[name=second_last_name]').clear().type(SecondLastName)
    cy.get('input[name=dob]').clear().type(dateOfBirth)
    cy.get('.ifIvxV').click()  
    cy.get('.css-1xxn25v')    
    .each(($el, index, list) => {   
           var kin = $el.text()
           cy.log(list)
           cy.log(kin)
           cy.log(index)
           cy.log($el)
           if ( kin == kinship ) 
           {  
             cy.log ('fine fine fine')
             cy.wrap($el).click()

           }
    })
    cy.get('input[name=percentage]').clear().type(beneficiaryPercengate)
    cy.get('button[data-testid=add-beneficiary-button]').click()
    cy.get('.bQUFwA').should('have.text', 'Confirm beneficiary')
   
   
    cy.get('.bQUFwA').should('have.text', 'Confirm beneficiary' )
    cy.get('input[type=password]').clear().should('have.text', '')
    cy.get('.gtHFRY').should('be.disabled')
    cy.get('[data-testid="modal-close"]').click()
   

})


Cypress.Commands.add('logout', ( )=> {

  cy.wait(2*1000)
  cy.get(':nth-child(5) > div.styles__DropdownToggle-sc-1wdqgcn-5.dYFgib > div.styles__WrapperLabel-sc-1wdqgcn-1.isSyRw').click()
  cy.get('.styles__DropdownMenu-sc-1wdqgcn-3.fjWyIV > ul > li').click()
 
  cy.url().should('eq', 'https://devmalta.bitso.com/login')
  cy.log('user logged out successfully')

})





