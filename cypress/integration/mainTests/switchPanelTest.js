/// <reference types="cypress" />
import travelUtils from "../utils/travelUtils.js";
import homeUpperPanel from "../pageObjectModels/homeUpperPanel.js";
import homeLowerPanel from "../pageObjectModels/homeLowerPanel.js";

describe("Test switch panel functionality", function () {
  beforeEach(function () {
    cy.fixture("travelData").then((data) => {
      this.travelData = data;
    });
  });

  it("checks if portfolio's right arrow button changes the current active dot in the upper panel", function () {
    const upperPanel = new homeUpperPanel();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    upperPanel.checkIfFirstDotIsActive();
    upperPanel.clickRightArrow();
    upperPanel.checkIfSecondDotIsActive();
  });

  it("checks if portfolio's left arrow button changes the current active dot in the upper panel", function () {
    const upperPanel = new homeUpperPanel();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    upperPanel.checkIfFirstDotIsActive();
    upperPanel.clickLeftArrow();
    upperPanel.checkIfLastDotIsActive();
  });

  it("checks if clicking an empty dots changes the current active dot in the upper panel", function () {
    const upperPanel = new homeUpperPanel();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    upperPanel.checkIfFirstDotIsActive();
    upperPanel.clickLastDot();
    upperPanel.checkIfLastDotIsActive();
  });

  it("checks if active dot will move by it self, moving the current active dot on the lower panel", function () {
    const lowerPanel = new homeLowerPanel();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    lowerPanel.checkIfFirstDotIsActive();
    cy.wait(2000);
    lowerPanel.checkIfLastDotIsActive();
  });

  it("checks if clicking an empty dot changes the current active dot on the lower panel", function () {
    const lowerPanel = new homeLowerPanel();

    travelUtils.visitHerolo(this.travelData.heroloHomePageURL, this.error, this.runnable);
    lowerPanel.checkIfFirstDotIsActive();
    lowerPanel.clickSecondDot();
    lowerPanel.checkIfSecondDotIsActive();
  });
});
