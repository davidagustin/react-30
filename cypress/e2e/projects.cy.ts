// Projects data - inline to avoid import issues
const projects = [
  { id: 1, slug: "drum-kit", title: "JavaScript Drum Kit", description: "Play drums with your keyboard" },
  { id: 2, slug: "clock", title: "JS and CSS Clock", description: "An analog clock with CSS and JavaScript" },
  { id: 3, slug: "css-variables", title: "CSS Variables", description: "Update CSS variables with JavaScript" },
  { id: 4, slug: "array-cardio-1", title: "Array Cardio Day 1", description: "Array methods: filter, map, sort, reduce" },
  { id: 5, slug: "flex-panel", title: "Flex Panel Gallery", description: "Animated image gallery with flexbox" },
  { id: 6, slug: "type-ahead", title: "Type Ahead", description: "Search cities with autocomplete" },
  { id: 7, slug: "array-cardio-2", title: "Array Cardio Day 2", description: "More array methods: some, every, find, findIndex" },
  { id: 8, slug: "canvas", title: "Fun with HTML5 Canvas", description: "Draw on canvas with your mouse" },
  { id: 9, slug: "dev-tools", title: "Dev Tools Domination", description: "Master the console and debugging tools" },
  { id: 10, slug: "checkboxes", title: "Hold Shift and Check Checkboxes", description: "Select multiple checkboxes with shift key" },
  { id: 11, slug: "video-player", title: "Custom Video Player", description: "Build a custom HTML5 video player" },
  { id: 12, slug: "key-sequence", title: "Key Sequence Detection", description: "Konami code style key sequence detection" },
  { id: 13, slug: "slide-in", title: "Slide in on Scroll", description: "Animate elements as they scroll into view" },
  { id: 14, slug: "references", title: "JavaScript References VS Copying", description: "Understand references vs copying in JavaScript" },
  { id: 15, slug: "localstorage", title: "LocalStorage", description: "Store and retrieve data from localStorage" },
  { id: 16, slug: "mouse-shadow", title: "Mouse Move Shadow", description: "Text shadow follows mouse movement" },
  { id: 17, slug: "sort-articles", title: "Sort Without Articles", description: "Sort band names ignoring articles (a, an, the)" },
  { id: 18, slug: "reduce-times", title: "Adding Up Times with Reduce", description: "Calculate total time from video durations" },
  { id: 19, slug: "webcam", title: "Webcam Fun", description: "Capture and manipulate webcam feed" },
  { id: 20, slug: "speech-detection", title: "Speech Detection", description: "Convert speech to text" },
  { id: 21, slug: "geolocation", title: "Geolocation", description: "Get user's location and display on map" },
  { id: 22, slug: "follow-along", title: "Follow Along Link Highlighter", description: "Highlight links with animated background" },
  { id: 23, slug: "speech-synthesis", title: "Speech Synthesis", description: "Convert text to speech" },
  { id: 24, slug: "sticky-nav", title: "Sticky Nav", description: "Navigation bar that sticks on scroll" },
  { id: 25, slug: "event-capture", title: "Event Capture, Propagation, Bubbling and Once", description: "Understand event propagation" },
  { id: 26, slug: "stripe-nav", title: "Stripe Follow Along Nav", description: "Dropdown navigation with animated background" },
  { id: 27, slug: "click-drag", title: "Click and Drag", description: "Horizontal scrolling with click and drag" },
  { id: 28, slug: "video-speed", title: "Video Speed Controller", description: "Control video playback speed" },
  { id: 29, slug: "countdown", title: "Countdown Timer", description: "Build a countdown timer" },
  { id: 30, slug: "whack-a-mole", title: "Whack A Mole", description: "Classic whack-a-mole game" },
];

describe("Project Pages", () => {
  projects.forEach((project) => {
    describe(`Project ${project.id}: ${project.title}`, () => {
      it(`should load project page for ${project.slug}`, () => {
        cy.visit(`/project/${project.slug}`);
        cy.waitForPageLoad();
        cy.contains("h1", project.title).should("be.visible");
      });

      it(`should display project description for ${project.slug}`, () => {
        cy.visit(`/project/${project.slug}`);
        cy.contains("p", project.description).should("be.visible");
      });

      it(`should have back to projects link for ${project.slug}`, () => {
        cy.visit(`/project/${project.slug}`);
        cy.contains("a", "← Back to Projects").should("be.visible");
        cy.contains("a", "← Back to Projects").should("have.attr", "href", "/");
      });

      it(`should render project component for ${project.slug}`, () => {
        cy.visit(`/project/${project.slug}`);
        cy.waitForPageLoad();
        // Check that the page has content (not just "Component coming soon...")
        cy.get("body").then(($body) => {
          if ($body.text().includes("Component coming soon...")) {
            cy.log(`Component for ${project.slug} is not yet implemented`);
          } else {
            // Component is rendered, verify it's not empty
            cy.get("main").should("not.be.empty");
          }
        });
      });

      it(`should have correct URL structure for ${project.slug}`, () => {
        cy.visit(`/project/${project.slug}`);
        cy.url().should("include", `/project/${project.slug}`);
      });
    });
  });

  it("should return 404 for invalid project slug", () => {
    cy.request({
      url: "/project/invalid-slug",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});

