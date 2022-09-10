/// <reference types="cypress" />

// Link assertions

describe("Account for all Subscription page hyper-links", () => {
    it("Displayed Sign Up link should render clickable", () => {
        cy.visit("http://localhost:3000/subscriptions");
        cy.get("a[href*='subscriptions']").click();
        cy.location("pathname").should("eq", `/subscriptions`);
        cy.contains("Sign Up").click();
        cy.location("pathname").should("eq", `/login`);
    });
  });
  