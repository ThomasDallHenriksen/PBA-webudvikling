import React from 'react';
import Contact from './Contact';

describe('<Contact />', () => {
  it('renders', () => {
    cy.viewport(1280, 800);
    cy.mount(<Contact />);
  });

  it('submits the contact form', () => {
    cy.viewport(1280, 800);
    cy.mount(<Contact />);

    // Log en besked for at indikere, at formularen udfyldes
    cy.log('Filling out the contact form');

    // Simuler at udfylde formularen
    cy.get('.contact-form__name').type('john doe');
    cy.get('.contact-form__email').type('john@live.com');
    cy.get('.contact-form__phone').type('1234');
    cy.get('.contact-form__message').type('hi');

    // Log en besked for at indikere, at formularen sendes
    cy.log('Submitting the contact form');

    // Fortsæt testen ved at klikke på knappen for at sende formularen
    cy.get('.contact-form__submit').click();
  });
});