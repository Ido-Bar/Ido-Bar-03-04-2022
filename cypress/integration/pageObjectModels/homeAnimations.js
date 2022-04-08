/// <reference types="cypress" />

class homeAnimations {
  upperPortfolioAnimationSelector = ".customers__Animation-fb9045-1";
  logoAnimationSelector = "#logom";

  checkIfLogoActive() {
    const value = "-360px 0px";

    cy.get(this.logoAnimationSelector)
    .invoke("css", "background-position")
    .should("equal", value);
  }

  checkIfLogoAnimationChanged() {
    const value = "-720px 0px";

    cy.get(this.logoAnimationSelector)
    .invoke("css", "background-position")
    .should("equal", value);
  }

  checkIfPortolioBackgroundNotChanging() {
    const value = "matrix(1, 0, 0, 1, 0, 0)";

    cy.get(this.upperPortfolioAnimationSelector)
    .wait(2000)
    .should("not.have.css", "transform", value);
  }

  checkIfPortolioBackgroundChanging() {
    const value = "matrix(1, 0, 0, 1, 0, 0)";

    cy.get(this.upperPortfolioAnimationSelector)
    .wait(2000)
    .should("have.css", "transform", value);
  }
}

export default homeAnimations;
