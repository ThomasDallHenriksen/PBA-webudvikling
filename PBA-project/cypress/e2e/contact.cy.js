describe('template spec', () => {
  it('sends a message', () => {
    cy.visit('http://localhost:5173/contact');

    cy.viewport(1200, 800);

    cy.get('.contact-form__name').type('Jane Doe');
    cy.get('.contact-form__email').type('jane@live.dk');
    cy.get('.contact-form__phone').type('11223344');
    cy.get('.contact-form__message').type('dette er en test besked');

    cy.wait();

    cy.get('.contact-form__submit').click();
  });
});