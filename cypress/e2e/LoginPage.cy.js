describe('Home page', () => {

    beforeEach(() => {
      cy.visit('http://localhost:5173/login');
    })
  
    it('Verificar se campos existem', () => {
      
      cy.get('[data-cy="email"]')
      .should('have.length', 1);
  
      cy.get('[data-cy="password"]')
      .should('have.length', 1);
  
      cy.get('[data-cy="submit"]')
      .should('have.length',1);
    })
  
    it('Validando inputs', () => {
    
        cy.get('[data-cy="submit"]').click()
        .should('have.length',1);
      })
  
  })