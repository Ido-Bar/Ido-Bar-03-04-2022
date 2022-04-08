/// <reference types="cypress" />
import travelUtils from "../utils/travelUtils.js";
import homePage from "../pageObjectModels/homePage";
import homeSocialMediaBar from "../pageObjectModels/homeSocialMediaBar";

describe("Test button functionality", function () {
  beforeEach(function () {
    cy.fixture("travelData").then((data) => {
      this.travelData = data;
    });
  });

  it("checkc if the dynamic whatsapp button redirects to whatsapp website on click", function () {
    const home = new homePage();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    home.clickWhatsAppButton();
  });

  it("checks if the social media bar whatsapp button redirects to whatsapp website on click", function () {
    const social = new homeSocialMediaBar();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    social.clickWhatsAppButton();
  });

  it("checks if the social media bar linkedin button redirects to linkedin website on click", function () {
    const social = new homeSocialMediaBar();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    social.clickLinkedinButton();
  });

  it("checks if the social media bar facebook button redirects to facebook website on click", function () {
    const social = new homeSocialMediaBar();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    social.clickFacebookButton();
  });

  it("checks if the social media bar abra button redirects to abra website on click", function () {
    const social = new homeSocialMediaBar();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    social.clickAbraButton();
  });
});
