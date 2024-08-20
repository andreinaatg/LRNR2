describe('Home Page E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('Should display the correct title', () => {
      cy.title().should('eq', 'LRNR'); // Replace with the expected title
  });

  it('Should display the navigation bar', () => {
    cy.get('nav').should('be.visible');
});

it('Should have a working link to the Quiz Generation page via the BEGIN JOURNEY button', () => {
    cy.get('button').contains('BEGIN JOURNEY').click();
    cy.url().should('include', '/quiz-generation');
});

it('Should display the homepage header', () => {
    cy.get('h1').should('contain.text', 'Your guided path to programming enlightenment');
});
});
