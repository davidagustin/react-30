// Projects data - inline to avoid import issues
const projects = [
  { id: 1, slug: "drum-kit", title: "JavaScript Drum Kit" },
  { id: 2, slug: "clock", title: "JS and CSS Clock" },
  { id: 3, slug: "css-variables", title: "CSS Variables" },
  { id: 4, slug: "array-cardio-1", title: "Array Cardio Day 1" },
  { id: 5, slug: "flex-panel", title: "Flex Panel Gallery" },
  { id: 6, slug: "type-ahead", title: "Type Ahead" },
  { id: 7, slug: "array-cardio-2", title: "Array Cardio Day 2" },
  { id: 8, slug: "canvas", title: "Fun with HTML5 Canvas" },
  { id: 9, slug: "dev-tools", title: "Dev Tools Domination" },
  { id: 10, slug: "checkboxes", title: "Hold Shift and Check Checkboxes" },
  { id: 11, slug: "video-player", title: "Custom Video Player" },
  { id: 12, slug: "key-sequence", title: "Key Sequence Detection" },
  { id: 13, slug: "slide-in", title: "Slide in on Scroll" },
  { id: 14, slug: "references", title: "JavaScript References VS Copying" },
  { id: 15, slug: "localstorage", title: "LocalStorage" },
  { id: 16, slug: "mouse-shadow", title: "Mouse Move Shadow" },
  { id: 17, slug: "sort-articles", title: "Sort Without Articles" },
  { id: 18, slug: "reduce-times", title: "Adding Up Times with Reduce" },
  { id: 19, slug: "webcam", title: "Webcam Fun" },
  { id: 20, slug: "speech-detection", title: "Speech Detection" },
  { id: 21, slug: "geolocation", title: "Geolocation" },
  { id: 22, slug: "follow-along", title: "Follow Along Link Highlighter" },
  { id: 23, slug: "speech-synthesis", title: "Speech Synthesis" },
  { id: 24, slug: "sticky-nav", title: "Sticky Nav" },
  { id: 25, slug: "event-capture", title: "Event Capture, Propagation, Bubbling and Once" },
  { id: 26, slug: "stripe-nav", title: "Stripe Follow Along Nav" },
  { id: 27, slug: "click-drag", title: "Click and Drag" },
  { id: 28, slug: "video-speed", title: "Video Speed Controller" },
  { id: 29, slug: "countdown", title: "Countdown Timer" },
  { id: 30, slug: "whack-a-mole", title: "Whack A Mole" },
];

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have sidebar with all project links", () => {
    cy.get("aside nav a").should("have.length", projects.length);
  });

  it("should highlight active project in sidebar", () => {
    cy.visit("/project/drum-kit");
    cy.get("aside nav a[href='/project/drum-kit']").should("have.class", "bg-blue-100");
  });

  it("should navigate to homepage from sidebar logo", () => {
    cy.visit("/project/drum-kit");
    cy.get("aside a[href='/']").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should navigate to project from sidebar link", () => {
    cy.get("aside nav a[href='/project/clock']").click();
    cy.url().should("include", "/project/clock");
    cy.contains("h1", "JS and CSS Clock").should("be.visible");
  });

  it("should navigate back to homepage from project page", () => {
    cy.visit("/project/drum-kit");
    cy.contains("a", "← Back to Projects").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should maintain sidebar visibility across pages", () => {
    cy.get("aside").should("be.visible");
    cy.visit("/project/drum-kit");
    cy.get("aside").should("be.visible");
    cy.visit("/project/clock");
    cy.get("aside").should("be.visible");
  });

  it("should display correct project numbers in sidebar", () => {
    projects.forEach((project, index) => {
      cy.get(`aside nav a[href='/project/${project.slug}']`).within(() => {
        cy.contains("span", `${(index + 1).toString().padStart(2, "0")}.`).should("exist");
      });
    });
  });

  it("should have responsive sidebar layout", () => {
    cy.get("aside").should("have.css", "position", "fixed");
    cy.get("main").should("have.class", "ml-64");
  });
});

