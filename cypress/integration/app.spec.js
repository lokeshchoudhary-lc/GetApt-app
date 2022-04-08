describe('Home page', () => {
    it("Test Welcom", () => {
        cy.visit('http://localhost:3000');
        cy.get('h1').contains("Welcome to Next.js");
    });
})