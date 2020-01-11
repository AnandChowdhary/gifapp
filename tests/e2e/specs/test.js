describe("Example e2e test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains(".logo span", "GIFAPP");
  });
});
