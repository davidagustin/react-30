describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the main title", () => {
    cy.contains("h1", "JavaScript30 - React Edition").should("be.visible");
  });

  it("should display the subtitle", () => {
    cy.contains("p", "30 vanilla JavaScript projects rebuilt with React, TypeScript, and Tailwind CSS").should("be.visible");
  });

  it("should display all 30 project cards", () => {
    // Filter to only homepage cards (not sidebar)
    cy.get("main a[href^='/project/']").should("have.length", 30);
  });

  it("should display project cards with correct structure", () => {
    // Filter to only homepage cards (not sidebar)
    cy.get("main a[href^='/project/']").first().within(() => {
      cy.get("span").should("exist"); // Project number
      cy.get("h2").should("exist"); // Project title
      cy.get("p").should("exist"); // Project description
    });
  });

  it("should navigate to project page when clicking a card", () => {
    // Filter to only homepage cards (not sidebar) and click first
    cy.get("main a[href='/project/drum-kit']").first().click();
    cy.url().should("include", "/project/drum-kit");
    cy.contains("h1", "JavaScript Drum Kit").should("be.visible");
  });

  it("should have sidebar visible", () => {
    cy.get("aside").should("be.visible");
    cy.contains("aside", "JavaScript30").should("be.visible");
  });

  it("should display project numbers in correct format", () => {
    // Filter to only homepage cards (not sidebar)
    cy.get("main a[href^='/project/']").first().within(() => {
      cy.get("span").first().invoke("text").should("match", /^\d{2}$/);
    });
  });

  it("should have hover effects on project cards", () => {
    // Filter to only homepage cards (not sidebar)
    cy.get("main a[href^='/project/']").first().should("have.class", "group");
  });
});

