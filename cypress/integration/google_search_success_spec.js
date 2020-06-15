describe('Google success search', () => {
    
    it('Successfully loads Google.com', () => {
        cy.visit('https://www.google.com') 
    })

    it('Search for a video', () => {
        cy.get('[name="q"]')
        .type('never gonna give you up youtube')
        .should('have.value', 'never gonna give you up youtube')
        .type('{enter}')
    })
  })