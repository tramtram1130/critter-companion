describe('Results User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://acnhapi.com/v1a/bugs', {
      statusCode: 200,
      ok: true,
      fixture: 'bugs'
    })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
      cy.get('select').eq(0).select('September')
      cy.get('select').eq(1).select('6PM')
      cy.get('select').eq(2).select('Northern')
    })
    cy.get('button').eq(0).click()
  }) 

  it('Should be able to see results', () => {
    cy.get('.card').should('have.length', 3)
  })

  it('Should be able to click and see details about critter', () => {
    cy.get('.card').eq(0).click()
    cy.get('.modal').should('have.length', 1)
    cy.get('.critter-name').should('contain', 'common butterfly')
    cy.get('.critter-portrait').invoke('attr', 'src').should('contain', 'https://acnhapi.com/v1/images/bugs/1')
    cy.get('.critter-bio').should('contain', 'The common butterfly would have you believe')
    cy.get('.critter-price').should('contain', 'Worth: 160 bells')
    cy.get('.critter-link').should('contain', 'Additional information')
    cy.get('.add-button').should('contain', 'Add to Collection')
    cy.get('.close-modal-button').should('contain', 'Close!')
  })

  it('Should be able to close out of the details', () => {
    cy.get('.card').eq(0).click()
    cy.get('.close-modal-button').click()
    cy.get('.modal').should('have.length', 0)
  })
})