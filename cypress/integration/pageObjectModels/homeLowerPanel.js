/// <reference types="cypress" />

class homeLowerPanel {
  dotsContainerSelector ="div[class='slick-slider customers__Slider-fb9045-4 kgTZws slick-initialized'] ul[class='slick-dots']";
  secondDotSelector = "//section[@class='customers__Customers-fb9045-0 hYqFxv']//li[2]//div[1]";

  clickSecondDot() {
    cy.get(this.dotsContainerSelector)
    .children()
    .eq(1)
    .find("div")
    .click();
  }

  checkIfFirstDotIsActive() {
    const value = "rgb(61, 28, 87)";

    cy.get(this.dotsContainerSelector)
    .children()
    .first()
    .find("div")
    .should("have.css", "background-color", value);
  }

  checkIfSecondDotIsActive() {
    const value = "rgb(61, 28, 87)";
    
    cy.get(this.dotsContainerSelector)
    .children()
    .eq(1)
    .find("div")
    .should("have.css", "background-color", value);
  }

  checkIfLastDotIsActive() {
    const value = "rgb(61, 28, 87)"; 
    
    cy.get(this.dotsContainerSelector)
    .children()
    .last()
    .find("div")
    .should("have.css", "background-color", value);
  }
  
}

export default homeLowerPanel;
