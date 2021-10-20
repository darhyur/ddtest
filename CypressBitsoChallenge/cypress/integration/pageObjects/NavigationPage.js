class NaviagtionPage
{

    visit(value)
    {
         cy.visit(value)
        
    }
    modalPresenet()
    {
        const modal = cy.get('[data-testid=modal-close]')
        modal.should('be.visible')
        return this
       
    }

    closeModal()
    {
        const cancel = cy.get('[data-testid=modal-close]')
        cancel.click()
    }

}

export default NaviagtionPage
