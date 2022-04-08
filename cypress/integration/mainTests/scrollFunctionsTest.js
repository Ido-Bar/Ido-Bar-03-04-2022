/// <reference types="cypress" />
import travelUtils from "../utils/travelUtils.js";
import homePage from "../pageObjectModels/homePage";
import homeFooter from "../pageObjectModels/homeFooter";

describe("Test scroll functions", function () {
  beforeEach(function () {
    cy.fixture("travelData").then((data) => {
      this.travelData = data;
    });
  });

  it("checks if the backToTop button is hidden when viewing the top of the page", function () {
    const home = new homePage();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    home.checkIfToTopButtonHidden();
  });

  it("checks if the backToTop button is visible when not viewing the top of the page", function () {
    const home = new homePage();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    home.checkIfToTopButtonHidden();
    home.scrollToBottom();
    home.checkIfToTopButtonVisible();
  });

  it("checks if clicking backToTop button sends you to the top of the page", function () {
    const home = new homePage();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    home.checkIfToTopButtonHidden();
    home.scrollToBottom();
    home.checkIfToTopButtonVisible();
    home.clickBackToTopButton();
    home.checkIfToTopButtonHidden();
  });

  it("checks if footer is visible when viewing the top of the page", function () {
    const footer = new homeFooter();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    footer.checkIfFooterVisible();
  });

  it("checks if footer is hidden when not viewing the top of the page", function () {
    const home = new homePage();
    const footer = new homeFooter();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    home.scrollToBottom();
    footer.checkIfFooterHidden();
  });

  it("checks if footer is visible when viewing the top of the page, scrolls to bottom then checks if footer is hidden, then clicks backToTop button and checks if footer is visible", function () {
    const home = new homePage();
    const footer = new homeFooter();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    footer.checkIfFooterVisible();
    home.scrollToBottom();
    footer.checkIfFooterHidden();
    home.clickBackToTopButton();
    footer.checkIfFooterVisible();
  });
});
