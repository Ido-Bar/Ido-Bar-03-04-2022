/// <reference types="cypress" />

class homePage {
  backToTopButtonSelector = ".backToTop__BtnGoUp-z83xj1-0";
  nameFieldSelector = "#name";
  emailFieldSelector = "#email";
  phoneNumberFieldSelector = "#telephone";
  companyFieldSelector = "#company";
  whatsAppButtonSelector = ".callUsWhatsapp__BtnWhatsapp-rkzbui-0.cjunrQ";
  inputFieldsContainerSelector = "#section-inputs";
  upperPortfolioAnimationSelector = ".customers__Animation-fb9045-1";

  clickWhatsAppButton() {
    const url = "https://api.whatsapp.com/send?phone=972544945333"
    const response = "success";

    cy.intercept(url, response)
    .as("whatsAppResponse")
    .get(this.whatsAppButtonSelector)
    .invoke("removeAttr", "target")
    .click()
    .wait("@whatsAppResponse")
    .should("exist");
  }

  clickBackToTopButton() {
    cy.get(this.backToTopButtonSelector)
    .click();
  }
  
  scrollToPortfolio() {
    cy.get(this.upperPortfolioAnimationSelector)
    .scrollIntoView();
  }

  scrollToBottom() {
    cy.get(this.inputFieldsContainerSelector)
    .scrollIntoView();
  }

  writeName(name) {
    cy.get(this.nameFieldSelector)
    .type(name, { force: true });
  }

  writeEmail(email) {
    cy.get(this.emailFieldSelector)
    .type(email, { force: true });
  }

  writePhoneNumber(phoneNumber) {
    cy.get(this.phoneNumberFieldSelector)
    .type(phoneNumber, { force: true });
  }

  writeCompany(company) {
    cy.get(this.companyFieldSelector)
    .type(company, { force: true });
  }

  checkName(name) {
    cy.get(this.nameFieldSelector)
    .invoke("text", name)
    .should("contain", name);
  }

  checkEmail(email) {
    cy.get(this.emailFieldSelector)
    .invoke("text", email)
    .should("contain", email);
  }

  checkPhoneNumber(phoneNumber) {
    cy.get(this.phoneNumberFieldSelector)
    .invoke("text", phoneNumber)
    .should("contain", phoneNumber);
  }

  checkCompany(company) {
    cy.get(this.companyFieldSelector)
    .invoke("text", company)
    .should("contain", company);
  }

  checkIfToTopButtonHidden() {
    cy.get(this.backToTopButtonSelector)
    .should("have.css","visibility","hidden");
  }

  checkIfToTopButtonVisible() {
    cy.get(this.backToTopButtonSelector)
    .should("have.css","visibility","visible");
  }
}

export default homePage;
