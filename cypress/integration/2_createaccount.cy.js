describe('empty spec', () => {

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/createaccount')

    cy.get('.email').click()
  })


  it('2-1. createaccount failse (error email)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')

    cy.get('#id').type('admin')
    cy.get('.lk-button').click()

    cy.get('.error-message').should('exist') 
  })

  it('2-2. createaccount failse(no password)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')
    cy.contains('약관에 동의하셔야 합니다.').should('not.exist')

    cy.get('#id').type('ruoghks@gmail.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('admin')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('admin')
    cy.get('.lk-button').click()

    cy.get('.error-message').should('exist')
  })

  it('2-3. createaccount failse(no email & password)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')
    cy.get('.lk-button').click()
    cy.get('.error-message').should('exist') 
  })

  it('2-4. createaccount failse(no checkbox)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')

    cy.get('#id').type('ruoghks@gmail.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('@dl29240730')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('이경환')

    cy.get('[for="check_01"]').click()

    cy.get('.lk-button').click()
    
    cy.get('.error-message').should('exist') 
  })

  it('2-5. createaccount failse(no checkbox)', () => {
    cy.get('#id').type('ruoghks@gmail.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('@dl29240730')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('이경환')

    cy.get('[style="margin-top: 14px;"] > .lk-checkbox > .checkmark').click()
    cy.get('[style="margin-top: 19px;"] > .lk-checkbox > .checkmark').click()

    cy.get('.lk-button').click()
  })
/*
  it('2-6. createaccount ', () => {
    cy.get('#id').type('pogap61665@otodir.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('@dl29240730')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('이경환')

    cy.get('[style="margin-top: 14px;"] > .lk-checkbox > .checkmark').click()
    cy.get('[style="margin-top: 19px;"] > .lk-checkbox > .checkmark').click()

    cy.get('.lk-button').click()
    
    // site page verification
    cy.url().should('include','/mypage')
    cy.wait(1000)
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })
  })*/

})