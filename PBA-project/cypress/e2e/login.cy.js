describe('template spec', () => {
  it('sends a message', () => {
    cy.visit('http://localhost:5173/login');

    cy.viewport(1200, 800);

    cy.get('[type="text"]').type('th@th.dk');
    cy.get('[type="password"]').type('12345');

    cy.get('.newacc').click();
  });
});