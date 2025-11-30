/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to wait for page to be fully loaded
       * @example cy.waitForPageLoad()
       */
      waitForPageLoad(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("waitForPageLoad", () => {
  cy.window().should("have.property", "document");
  cy.document().should("have.property", "readyState", "complete");
});

export {};

