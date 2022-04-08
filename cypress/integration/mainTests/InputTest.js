/// <reference types="cypress" />
import travelUtils from "../utils/travelUtils.js";
import homePage from "../pageObjectModels/homePage";
import homeFooter from "../pageObjectModels/homeFooter";

describe("Test input functionality", function () {
  beforeEach(function () {
    cy.fixture("travelData").then((data) => {
      this.travelData = data;
    })
    cy.fixture("userData").then((data) => {
      this.userData = data;
    });
  });

  it("checks if the footer's text fields are functional by typing in each one", function () {
    const footer = new homeFooter();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    footer.writeName(this.userData.name);
    footer.checkName(this.userData.name);
    footer.writeEmail(this.userData.email);
    footer.checkEmail(this.userData.email);
    footer.writePhoneNumber(this.userData.phoneNumber);
    footer.checkPhoneNumber(this.userData.phoneNumber)
  });

  it("checks if the social media bar's text fields are functional by typing in each one", function () {
    const home = new homePage();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    home.scrollToBottom();
    home.writeName(this.userData.name);
    home.checkName(this.userData.name);
    home.writeEmail(this.userData.email);
    home.checkEmail(this.userData.email);
    home.writePhoneNumber(this.userData.phoneNumber);
    home.checkPhoneNumber(this.userData.phoneNumber);
    home.writeCompany(this.userData.company);
    home.checkCompany(this.userData.company);
  });
});
