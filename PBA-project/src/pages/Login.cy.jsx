import React from 'react';
import Login from './Login';

describe('<Login />', () => {
  it('renders', () => {
    cy.viewport(1280, 800);
    cy.mount(<Login />);
  });

  it('logs in with valid credentials', () => {
    cy.viewport(1280, 800);
    cy.mount(<Login />);

    // Log en besked for at indikere, at brugeroplysningerne udfyldes
    cy.log('Filling out the login form');

    // Simuler indtastning af brugeroplysninger
    cy.get('[type="text"]').type('th@th.com');
    cy.get('[type="password"]').type('12345');

    // Log en besked for at indikere, at login-formularen sendes
    cy.log('Submitting the login form');

    // Fortsæt testen ved at klikke på login-knappen
    cy.get('.newacc').click();

  });
});