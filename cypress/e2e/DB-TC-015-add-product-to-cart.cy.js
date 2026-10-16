
describe('DB-TC-015: Add product to cart', () => {
  it('should allow a user to add a product to the cart', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.get('.hrefch')
      .first()
      .click();

    cy.contains('Add to cart')
      .should('be.visible')
      .click();

    cy.on('window:alert', (message) => {
      expect(message).to.equal('Product added');
    });
  });
});
