/// <reference types="cypress" />

// Link assertions

describe("Account for all hyper-links", () => {
  it("displayed links should render clickable", () => {
    const pages = ["subscriptions", "profile", "shop"];
    pages.forEach((page) => {
      cy.visit("http://localhost:3000/");
      cy.get(`a[href*=${page}]`).click();
      cy.location("pathname").should("eq", `/${page}`);
      cy.go("back");
    });
  });
});
