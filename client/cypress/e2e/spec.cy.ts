// import function from the application source

describe("TypeScript spec", () => {
  it("works", () => {
    cy.wrap("foo").should("equal", "foo");
  });
});

// uncomment to get a lint error
// const aCypressString: string = 42;
