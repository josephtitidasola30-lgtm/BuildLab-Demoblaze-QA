
describe('DB-TC-002: Open product details', () => {
  it('should display the selected product details', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.get('.hrefch')
      .first()
      .click();

    cy.get('.name')
      .should('be.visible');

    cy.get('.price-container')
      .should('be.visible');
  });
});
