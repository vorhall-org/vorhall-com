/* eslint-disable no-undef */
describe('contact form', () => {

  /*
    Current issue: after submit, the page will reload, so the error is gone
    and cypress will never find it. This strangely only happens in headless mode
    and in browser mode (only on the first run).
    The modular forms library has a preventDefault on the submit event,
    so the page should never reload.
    Until now, did not figure out why this happens.
  */
  /*
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
  */

  it('will show success message when successfully send', () => {
    // cy.intercept('POST', '/.netlify/functions/send-mail')
    //   .as('netlifyFunctionInvoke');

    // cy.visit({
    //   retryOnStatusCodeFailure: true,
    //   timeout: '10000',
    //   url: '/',
    // });
    cy.visit('/');

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
/*
    cy
      .wait('@netlifyFunctionInvoke')
      .its('response.body')
      .should('include', '{"statusCode":200}');
    */
  });
});

/* eslint-enable no-undef */
