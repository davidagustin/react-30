describe("API Endpoints", () => {
  it("should return healthy status from health endpoint", () => {
    cy.request("GET", "/api/health").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("status", "healthy");
      expect(response.body).to.have.property("timestamp");
      expect(response.body).to.have.property("environment");
    });
  });

  it("should return valid timestamp in health response", () => {
    cy.request("GET", "/api/health").then((response) => {
      const timestamp = new Date(response.body.timestamp);
      expect(timestamp.getTime()).to.be.a("number");
      expect(timestamp.getTime()).to.be.greaterThan(0);
    });
  });

  it("should return environment in health response", () => {
    cy.request("GET", "/api/health").then((response) => {
      expect(response.body.environment).to.be.a("string");
      expect(["development", "production", "test"]).to.include(
        response.body.environment,
      );
    });
  });
});

