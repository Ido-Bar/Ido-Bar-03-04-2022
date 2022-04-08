/// <reference types="cypress" />

class homeUpperPanel {
  rightArrowSelector = "img[alt='Right arrow']";
  leftArrowSelector = "img[alt='Left arrow']";
  lastDotSelector = "li:nth-child(5) div:nth-child(1)"
  dotsContainerSelector ="div[class='slick-slider portfolio__Slider-sc-80s039-2 cCmxEs slick-initialized'] ul[class='slick-dots']";

  clickRightArrow() {
    cy.get(this.rightArrowSelector).click();
  }

  clickLeftArrow() {
    cy.get(this.leftArrowSelector).click();
  }

  clickLastDot() {
    cy.get(this.dotsContainerSelector)
    .find(this.lastDotSelector)
    .click();
  }

  checkIfFirstDotIsActive() {
    const value = "rgb(120, 70, 161)";

    cy.get(this.dotsContainerSelector)
    .children()
    .first()
    .find("div")
    .should("have.css", "background-color", value);
  }

  checkIfSecondDotIsActive() {
    const value = "rgb(120, 70, 161)";

    cy.get(this.dotsContainerSelector)
    .children()
    .eq(1)
    .find("div")
    .should("have.css", "background-color", value);
  }
  
  checkIfLastDotIsActive() {
    const value = "rgb(120, 70, 161)";

    cy.get(this.dotsContainerSelector)
    .children()
    .last()
    .find("div")
    .should("have.css", "background-color", value);
  }
}

export default homeUpperPanel;
