/// <reference types="cypress" />

class socialMediaBar {
  whatsAppButtonSelector = ".socialMediaBar__ImgSocial-sc-1ry1db0-2.jOgeKm";
  linkedInButtonSelector = ".socialMediaBar__ImgSocial-sc-1ry1db0-2.gcUHBk";
  faceBookButtonSelector = ".socialMediaBar__ImgSocial-sc-1ry1db0-2.eufMcD";
  abraButtonSelector = ".socialMediaBar__ImgSocial-sc-1ry1db0-2.bXWGqN";
  //matiLinkSelector = "a[class='commun__ContactText-zi6nvq-7 kTeJTM']";

  clickWhatsAppButton() {
    const url = "https://api.whatsapp.com/send?phone=972544945333";
    const response = "success";

    cy.intercept(url, response)
    .as("whatsAppResponse")
    .get(this.whatsAppButtonSelector)
    .invoke("removeAttr", "target")
    .click({ force: true })
    .wait("@whatsAppResponse")
    .should("exist");
  }

  clickLinkedinButton() {
    const url = "https://www.linkedin.com/platform-telemetry/li/collect";
    const response = "success";

    cy.intercept(url , response)
    .as("linkedInResponse")
    .get(this.linkedInButtonSelector)
    .invoke("removeAttr", "target")
    .click({ force: true })
    .wait(1000)
    .wait("@linkedInResponse")
    .should("exist");
  }

  clickFacebookButton() {
    cy.get(this.faceBookButtonSelector)
    .invoke("removeAttr", "target")
    .click({ force: true })
    .url()
    .should("include", "facebook");
  }

  clickAbraButton() {
    cy.get(this.abraButtonSelector)
    .invoke("removeAttr", "target")
    .click({ force: true })
    .url()
    .should("not.include", "automation");
  }
}

export default socialMediaBar;
