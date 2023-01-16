describe('Home View User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://acnhapi.com/v1a/bugs', {
      statusCode: 200,
      ok: true,
      fixture: 'bugs'
    })
    cy.visit('http://localhost:3000/')
  }) 

  it('Should see app title', () => {
    cy.get('.app-name').should('contain', 'Critter Companion')
  })

  it('Should see navigation bar', () => {
    cy.get('.header').within(() => {
      cy.get('a').eq(0).should('have.descendants', 'img')
      cy.get('a').eq(1).should('contain', 'My Collection')
    })
  })

  it('Should see search form', () => {
    cy.get('form').within(() => {
      cy.get('select').eq(0).should('contain', 'Month')
      cy.get('select').eq(1).should('contain', 'Time of the Day')
      cy.get('select').eq(2).should('contain', 'Hemisphere')
      cy.get('button').eq(0).should('contain', 'Search')
      cy.get('button').eq(1).should('contain', 'Clear')
    })
  })

  it('Should see a cute dancing villager GIF', () => {
    cy.get('.home-gif-container').should('have.descendants', 'img')
  })
  
  it('Should be able to navigate to the collection page and back', () => {
    cy.get('a').eq(1).click()
    cy.url().should('eq', 'http://localhost:3000/collection')
    cy.get('a').eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})