
describe('DB-TC-019: Remove an item from the cart', () => {
  it('should remove the selected product from the cart', () => {
    cy.intercept('POST', '**/addtocart').as('addToCart');
    cy.intercept('POST', '**/viewcart*').as('loadCart');

    cy.visit('https://www.demoblaze.com/');

    // Select the first available product
    cy.get('.hrefch', { timeout: 10000 })
      .should('be.visible')
      .first()
      .click();

    // Register the alert handler before adding the product
    cy.on('window:alert', (message) => {
      expect(message).to.include('Product added');
    });

    // Add the product to the cart
    cy.contains('Add to cart').click();

    // Confirm the add-to-cart request succeeded
    cy.wait('@addToCart').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });

    // Open the cart
    cy.contains('a', 'Cart').click();
    cy.wait('@loadCart');

    // Confirm that the product appears in the cart
    cy.get('#tbodyid tr', { timeout: 10000 })
      .should('have.length.at.least', 1);

    // Capture the product name before deleting it
    cy.get('#tbodyid tr')
      .first()
      .find('td')
      .eq(1)
      .invoke('text')
      .then((productName) => {
        // Delete the selected product
        cy.get('#tbodyid tr')
          .first()
          .contains('a', 'Delete')
          .click();

        // Confirm that the cart becomes empty
        cy.get('#tbodyid tr', { timeout: 10000 })
          .should('have.length', 0);

        cy.get('#tbodyid')
          .should('not.contain', productName.trim());
      });
  });
});
