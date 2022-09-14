describe('empty spec', () => {

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login')
    cy.wait(1000)
  })


  it('1. login menu test', () => {
    cy.get('.kakao').should('exist')
    cy.get('.google').should('exist')
    cy.get('.facebook').should('exist')
    cy.get('.lk-button').should('exist')

    // Forgot password
    cy.get(':nth-child(2) > .btn_common').click()
    cy.wait(500)
    cy.contains('이메일 발송').should('exist')

    // email input false
    cy.contains('이메일 형식으로 입력해 주세요').should('not.exist')

    cy.get('[placeholder="이메일을 입력해주세요"]').type('@dl29240730')
    cy.get('.reset-modal > .lk-button').click()
    cy.wait(500)
    cy.contains('이메일 형식으로 입력해 주세요').should('exist') 

    // check
    cy.contains('비밀번호를 재설정할 수 있는 링크를 메일로 발송하였습니다.').should('not.exist')
    cy.get('[placeholder="이메일을 입력해주세요"]').clear()
    cy.get('[placeholder="이메일을 입력해주세요"]').type('ruoghks@gmail.com')
    cy.get('.reset-modal > .lk-button').click() 
    cy.wait(500)
    cy.contains('비밀번호를 재설정할 수 있는 링크를 메일로 발송하였습니다.').should('exist')

    // Ok button
    cy.contains('확인').click()
  })
  
  it('1-1. Login failse (error email&error password)', () => {
    // email text input false
    cy.contains('가입된 이메일이 아닙니다. 입력한 내용을 다시 확인해주세요.').should('not.exist')

    cy.get('[type="text"]').type('admin')
    cy.get('[type="password"]').type('admin')
    cy.get('.lk-button').click()

    cy.contains('가입된 이메일이 아닙니다. 입력한 내용을 다시 확인해주세요.').should('exist') 
  })

  it('1-2. Login failse(no password)', () => {
    // email text input false
    cy.contains('비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.').should('not.exist')

    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('admin')
    cy.get('.lk-button').click()

    cy.contains('비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.').should('exist') 
  })

  it('1-3. Login failse(no email & password)', () => {
    // email text input false
    cy.get('.form_group > .error-message').should('not.exist')
    cy.get('.lk-button').click()
    cy.get('.form_group > .error-message').should('exist') 
  })

  it('1-4. Login should mypage login & logout', () => {
    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('.lk-button').click()

    // site page verification
    cy.url().should('include','/mypage')
    cy.wait(1000)
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })
  })

})