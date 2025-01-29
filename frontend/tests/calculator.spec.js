describe("Calculator UI Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000");
  });

  it("should display result when adding two numbers", () => {
    cy.get("#num1").type("5");
    cy.get("#num2").type("3");
    cy.get("button").contains("Add").click();
    cy.get("#result").should("contain", "8");
  });

  it("should display result when subtracting two numbers", () => {
    cy.get("#num1").type("5");
    cy.get("#num2").type("3");
    cy.get("button").contains("Subtract").click();
    cy.get("#result").should("contain", "2");
  });

  it("should display result when multiplying two numbers", () => {
    cy.get("#num1").type("5");
    cy.get("#num2").type("3");
    cy.get("button").contains("Multiply").click();
    cy.get("#result").should("contain", "15");
  });

  it("should display error message for division by zero", () => {
    cy.get("#num1").type("5");
    cy.get("#num2").type("0");
    cy.get("button").contains("Divide").click();
    cy.get("#result").should("contain", "Error! Division by zero.");
  });
});
