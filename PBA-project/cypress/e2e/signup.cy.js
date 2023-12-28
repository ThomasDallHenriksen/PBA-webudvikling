describe('template spec', () => {
  it('sends a message', () => {
    cy.visit('http://localhost:5173/signup');

    cy.viewport(1200, 800);

    cy.get('[placeholder="First name"]').type('Jane');
    cy.get('[placeholder="Last name"]').type('Doe');
    cy.get('[placeholder="Phone number"]').type('88776655');
    cy.get('[placeholder="Email Address"]').type('doe@gmail.com');

    cy.get('select.private').select('organisation');

    cy.get('[placeholder="Organization Name"]').type('Doe Food INC');

    cy.get('[placeholder="Password"]').type('password');

    cy.get('.newacc').click();
  });
});