
describe('DB-TC-017: Verify cart total for one item', () => {
  it('should display the correct total for one product', () => {
    cy.intercept('POST', '**/addtocart').as('addToCart');
    cy.intercept('POST', '**/viewcart*').as('loadCart');

    cy.visit('https://www.demoblaze.com/');

    cy.get('.hrefch').first().click();

    cy.on('window:alert', (message) => {
      expect(message).to.equal('Product added');
    });

    cy.contains('Add to cart').click();

    cy.wait('@addToCart').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });

    cy.contains('Cart').click();

    cy.wait('@loadCart');

    cy.get('#tbodyid tr', { timeout: 10000 })
      .should('have.length', 1);

    cy.get('#totalp')
      .should('be.visible')
      .and('contain.text', '360');
  });
});
