describe("app", () => {
  beforeEach(() => {
    cy.visit("/");

    // wait for animation
    cy.wait(750);
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

  // it("should render a spinner after button has been clicked", () => {
  //   cy.get("button").click();

  //   cy.get("[data-testid='spinner']");
  // });
  it("should render a successful response after URL has been entered and button has been clicked", () => {
    cy.intercept("POST", "http://localhost:4000/url");
    cy.get("input").type("https://google.com");
    cy.get("button").click();

    cy.get;

    cy.get("[role='response-with-success']");
  });

  it("should render an error response after button has been clicked without URL", () => {
    cy.intercept("POST", "http://localhost:4000/url");
    cy.get("button").click();

    cy.get;

    cy.get("[role='response-with-error']");
  });
});
