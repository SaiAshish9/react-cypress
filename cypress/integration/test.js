const text = Cypress.env("test");

describe("renders home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders correctly", () => {
    cy.get(".App").should("exist");
  });

  it("test", () => {
    // cy.get().type()
    // /* ==== Generated with Cypress Studio ==== */
    // cy.get('.App-link').click();
    // cy.get('.App-header').click();
    // cy.get('.App-header').click();
    // /* ==== End Cypress Studio ==== */
    cy.findByText(text).should("exist");
    cy.findByText(text).click();
    cy.url().should("include", "/");
    cy.findByText(text).should("exist");
  });

  it("test1", () => {});
});
