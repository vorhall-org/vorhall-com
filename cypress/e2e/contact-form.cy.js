/* eslint-disable no-undef */

describe('contact form', () => {
  it('shows error for non-valid email address', () => {
    cy.visit('http://localhost:8888/contact/');

    const emailElement = cy
      .get('[data-cy="form"]')
      .get('[data-cy="email"]');

    emailElement.type('foo@bar');

    cy.get('[data-cy="submit"]')
      .click();

    emailElement
      .invoke('attr', 'name')
      .then((name) => {
        cy
          .get(`#${name}-error`)
          .should('be.visible');
      });
  });

  it('will show success message when successfully send', () => {
    cy.visit('http://localhost:8888/contact/');

    const formElement = cy
      .get('[data-cy="form"]');

    formElement
      .get('[data-cy="email"]')
      .type('foo@bar.com');

    formElement
      .get('[data-cy="name"]')
      .type('cypress test name');

    formElement
      .get('[data-cy="text"]')
      .type('cypress test text');

    formElement
      .get('[data-cy="submit"]')
      .click();
  });
});

/* eslint-enable no-undef */
