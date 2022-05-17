describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to visit the page and render the correct elements', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(0).click()
    .get('.movie-description').children().should('have.length', 2)
  });

  it('should be able to visit the page and render the correct elements', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(0).click()
    .get('.movie-description')
    .children()
    .eq(1)
    .contains('Title: Money Plane')
  });

  it('should be able to fetch individual movie data and display it on the page', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919'
    },
    []
  ).as('getMovieInfo');
  cy.contains('🍿 Rancid Tomatillos 🍿')
  .get('.movie-container')
  .children()
  .eq(0).click()
  .get('.movie-description').children().should('have.length', 2)
});
})
