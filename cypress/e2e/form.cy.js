describe('Form User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://acnhapi.com/v1a/bugs', {
      statusCode: 200,
      ok: true,
      fixture: 'bugs'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to fill out form', () => {
    cy.get('form').within(() => {
      cy.get('select')
        .eq(0)
        .select('September')
        .should('have.value', '9')
      cy.get('select')
        .eq(1)
        .select('6PM')
        .should('have.value', '18')
      cy.get('select')
        .eq(2)
        .select('Northern')
        .should('have.value', 'northern')
    })
  })

  it('Should be able to submit search', () => {
    cy.get('form').within(() => {
      cy.get('select').eq(0).select('September')
      cy.get('select').eq(1).select('6PM')
      cy.get('select').eq(2).select('Northern')
    })
    cy.get('button').eq(0).click()
    cy.get('.card').should('have.length', 3)
  })

  it('Should be able to clear search', () => {
    cy.get('form').within(() => {
      cy.get('select').eq(0).select('September')
      cy.get('select').eq(1).select('6PM')
      cy.get('select').eq(2).select('Northern')
    })
    cy.get('button').eq(0).click()
    cy.get('.card').should('have.length', 3)
    cy.get('button').eq(1).click()
    cy.get('.card').should('have.length', 0)
  })
})