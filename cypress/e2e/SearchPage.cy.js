describe('Search page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    })
    
    it('Campo de busca', () => {
  
      cy.get('form input')
      .should('have.length', 1)
      .type("Aprenda {enter}");

    })
  })