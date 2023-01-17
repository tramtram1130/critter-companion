describe('Collection User Flow', () => {
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

  it('Should see My Collections title', () => {
    cy.get('.collection-link').click()
    cy.get('.my-collection-title').should('contain', 'My Collection')
  })

  it('Should be able to add bugs to collection', () => {
    cy.get('.card').eq(0).click()
    cy.get('.add-button').click()
    cy.get('.close-modal-button').click()
    cy.get('.card').eq(1).click()
    cy.get('.add-button').click()
    cy.get('.close-modal-button').click()
    cy.get('.collection-link').click()
    cy.get('.card').should('have.length', 2)
  })
})