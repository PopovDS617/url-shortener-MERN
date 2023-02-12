describe("app e2e", () => {
  beforeEach(() => {
    cy.visit("/");

    // wait for animation
    cy.wait(1500);
  });

  it("should render input and button initially", () => {
    cy.get("button").should("be.visible");
    cy.get("input").should("be.visible");
  });

  it("should render a button that contains text - press", () => {
    cy.contains("button", "press");
  });

  it("should render an input that is empty initially", () => {
    cy.get("input").should("have.value", "");
  });

  it("should render an input that displays entered value", () => {
    cy.get("input").type("test string");
    cy.get("input").should("have.value", "test string");
  });

  it("should render a spinner after button has been clicked", () => {
    cy.get("button").click();

    cy.get("[data-testid='spinner']");
  });
  // it("should render a response section after button has been clicked", () => {
  //   cy.get("button").click();
  //   cy.wait(4000);
  // });
});
