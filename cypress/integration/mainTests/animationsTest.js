/// <reference types="cypress" />
import travelUtils from "../utils/travelUtils.js";
import homePage from "../pageObjectModels/homePage";
import homeAnimations from "../pageObjectModels/homeAnimations";

describe("Test animations functionality", function () {
  beforeEach(function () {
    cy.fixture("travelData").then((data) => {
      this.travelData = data;
    });
  });

  it("checks if logo animation is animating by default", function () {
    const animations = new homeAnimations();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    animations.checkIfLogoActive();
    animations.checkIfLogoAnimationChanged();
  });

  it("checks if logo animation is still animating when not in view", function () {
    const animations = new homeAnimations();
    const home = new homePage();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    home.scrollToBottom();
    animations.checkIfLogoActive();
    animations.checkIfLogoAnimationChanged();
  });

  it("checks if portfolio background animation not animating when not in view", function () {
    const animations = new homeAnimations();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    animations.checkIfPortolioBackgroundNotChanging();
  });

  it("checks if portfolio background animations is animating when in view", function () {
    const animations = new homeAnimations();
    const home = new homePage();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    animations.checkIfPortolioBackgroundNotChanging();
    home.scrollToPortfolio();
    animations.checkIfPortolioBackgroundChanging();
  });

  it("checks if portfolio background animation is not animating when the user stops viewing it", function () {
    const home = new homePage();
    const animations = new homeAnimations();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    animations.checkIfPortolioBackgroundNotChanging();
    home.scrollToPortfolio();
    animations.checkIfPortolioBackgroundChanging();
    home.clickBackToTopButton();
    animations.checkIfPortolioBackgroundNotChanging();
  });
});
