describe('Error Handling User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://acnhapi.com/v1a/bugs', {
      statusCode: 200,
      ok: true,
      fixture: 'bugs'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display an error message if user submits before completing form', () => {
    cy.get('form').within(() => {
      cy.get('button').eq(0).click()
    })
    cy.get('.form-error-msg').should('contain', '...Please fill out the form entirely.')
  })

  it('Should display an error message if user visits their collection without any added', () => {
    cy.get('.collection-link').click()
    cy.get('.collection-error-msg').should('contain', "...It's pretty barren. Please add some critters.")
  })

  it('Should display an error message if user visits a nonexistent url', () => {
    cy.visit('http://localhost:3000/potato')
    cy.url().should('eq', 'http://localhost:3000/potato')
    cy.get('.bad-url-msg').should('contain', "...You've detoured quite a bit.")
  })

  it('Should be able to return home after visiting a nonexistent url', () => {
    cy.visit('http://localhost:3000/potato')
    cy.get('.return-home-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})