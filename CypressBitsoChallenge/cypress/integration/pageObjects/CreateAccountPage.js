/// <reference types="Cypress" />

class CreateAccoutPage
{

    visit()
    {
         cy.this.visit("https://devmalta.bitso.com/register")
        
    }
   
    selectAccountType()
    {
        const selectAccountType = cy.get('.styles__SelectBox-sc-1pikthk-2')

        selectAccountType.click({force: true})

    }
    selectCountry(value)
    {
        const selectCountry = cy.get('.css-csnngo')      
        selectCountry.click().type(value)
        cy.get('.css-a6evln').type('{enter}')
        return this

    }

    enterEmail(value)
    {
        const enterEmail = cy.get('input[name=email]')
        enterEmail
            .clear()
            .type(value)
        return this

    }

    enterPassword(value)
    {
        const enterPassword = cy.get('input[name=password]')
        
        enterPassword
            .click()
            .clear()
            .type(value)
        return this

    }

    enterConfirmPassword(value)
    {
        const enterConfirmPassword = cy.get('input[name=password_confirmation]')
        enterConfirmPassword
            .click()
            .clear()
            .type(value)
        return this

    }

    checkTermsConditions()
    {
        const checkTermsConditions = cy.get('input[name=accept_terms]')
        
        checkTermsConditions
            .check({force:true})
            .should('be.checked')
        

    }

    checkReceiveBitsoNews()
    {
        const checkReceiveBitsoNews = cy.get('input[name=accept_mail]')
        checkReceiveBitsoNews
            .check({force:true})
            .should('be.checked')
       

    }

    checkPrivatePolicy()
    {
        const checkPrivatePolicy = cy.get('input[name=accept_privacy]')
        checkPrivatePolicy
            .check({force:true})
            .should('be.checked')
     
    }

    checkAcceptNvioTerms()
    {
        const checkAcceptNvioTerms = cy.get('input[name=accept_nvio_terms]')
        checkAcceptNvioTerms.check({force:true}).should('be.checked')
     
    }

    skipNvioTerms()
    { 
       cy.get('button[type=submit]')
            .should('be.visible')
            .should('be.enabled')

    }

    submit()
    {
        const submit = cy.get('button[type=submit]').should('be.visible').should('be.enabled')
        submit
            .click()       

    }

    validateAccountCreation()
    {

        const validateAccountCreation = cy.get('.bQUFwA')
        validateAccountCreation.should('have.text', 'Verify your email').type("{esc}")

    }
    
    


}

export default CreateAccoutPage