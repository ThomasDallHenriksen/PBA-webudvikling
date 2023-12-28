import React from 'react';
import { mount } from 'cypress-react-unit-test';
import Contact from '../../src/pages/Contact'; // Justér stien efter behov

describe('Contact Component', () => {
  it('displays the contact form and submits it successfully', () => {
    // Montér Contact-komponenten
    mount(<Contact />);
    
    // Din Cypress-assertion går her
    cy.get('.contact-form').should('exist');

    // Simuler at udfylde formularen
    cy.get('.contact-form__name').type('John Doe');
    cy.get('.contact-form__email').type('john.doe@example.com');
    cy.get('.contact-form__phone').type('1234567890');
    cy.get('.contact-form__message').type('This is a test message');

    // Send formularen (simuler knaptryk eller formularen sendes)
    // Justér baseret på den faktiske adfærd af din komponent
    cy.get('.contact-form__submit').click();

    // Check om indsendelsen var vellykket
    cy.get('.success-message').should('contain', 'Form submitted successfully'); // Justér baseret på din faktiske succesmeddelelse
  });

  // Tilføj flere testcases efter behov
});