
describe('DB-TC-019: Remove an item from the cart', () => {
  it('should remove the selected product from the cart', () => {
    cy.visit('https://www.demoblaze.com/');

    // Select the first available product
    cy.get('.hrefch', { timeout: 10000 })
      .should('be.visible')
      .first()
      .click();

    // Add the product to the cart
    cy.get('.btn-success')
      .contains('Add to cart')
      .click();

    // Accept the confirmation alert
    cy.on('window:alert', (message) => {
      expect(message).to.include('Product added');
    });

    // Open the cart
    cy.contains('a', 'Cart').click();

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

        // Confirm that the selected product is removed
        cy.get('#tbodyid tr')
          .should('have.length', 0);

        cy.get('#tbodyid')
          .should('not.contain', productName.trim());
      });
  });
});
