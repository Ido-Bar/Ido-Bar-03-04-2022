/// <reference types="cypress" />

class homeFooter {
  textFieldsContainerSelector = ".Footer__Div-sc-159s1ql-3";
  footerTabselector = "#footer";

  writeName(name) {
    cy.get(this.textFieldsContainerSelector)
    .children()
    .eq(0)
    .type(name);
  }

  writeEmail(email) {
    cy.get(this.textFieldsContainerSelector)
    .children()
    .eq(1)
    .type(email);
  }

  writePhoneNumber(phoneNumber) {
    cy.get(this.textFieldsContainerSelector)
    .children()
    .eq(2)
    .type(phoneNumber);
  }

  checkIfFooterVisible() {
    cy.get(this.footerTabselector)
    .should("be.visible");
  }

  checkIfFooterHidden() {
    cy.get(this.footerTabselector)
    .should("be.hidden");
  }

  checkName(name) {
    cy.get(this.textFieldsContainerSelector)
    .children()
    .eq(0)
    .invoke("text", name)
    .should("contain", name);
  }

  checkEmail(email) {
    cy.get(this.textFieldsContainerSelector)
    .children()
    .eq(1)
    .invoke("text", email)
    .should("contain", email);
  }

  checkPhoneNumber(phoneNumber) {
    cy.get(this.textFieldsContainerSelector)
    .children()
    .eq(2)
    .invoke("text", phoneNumber)
    .should("contain" , phoneNumber);
  }
}

export default homeFooter;
