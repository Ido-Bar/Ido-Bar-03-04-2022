/// <reference types="cypress" />

function visitHerolo(url, error ,runnable) {
  cy.visit(url)
  cy.on("uncaught:exception", (error, runnable) => {
    return false;
  });
}

export default { visitHerolo };
