describe("app e2e", () => {
  beforeEach(() => {
    cy.visit("/");

    // wait for animation
    cy.wait(1500);
  });

  it("should render input and button initially", () => {
    cy.get("button");
    cy.get("input");
  });

  it("should render a button that contains text - press", () => {
    cy.contains("button", "press");
  });
});
