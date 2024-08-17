describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })

  it('Mudando corres para o dark theme', () => {
    localStorage.clear()
    // cy.visit('http://localhost:5173/')
    
    cy.get('#fa-moon')
    .should('have.length', 1)
    .click();

    cy.get('#fa-moon')
    .should('have.length', 1)
    .click();

    // cy.get('#fa-sun')
    // .should('have.length',1)
    // .click()

  })

  it('Campo de busca', () => {
    // cy.visit('http://localhost:5173/')

    cy.get('form input')
    .should('have.length', 1)
    .type("Aprenda {enter}");


  })
})