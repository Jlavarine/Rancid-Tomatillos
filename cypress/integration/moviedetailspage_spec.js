describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to visit the main page and render the correct elements', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(0).click()
    .get('.movie-description').children().should('have.length', 2)
  });

  it('should be able to visit the movie details page and render the correct elements', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(0).click()
    .get('.movie-description')
    .children()
    .eq(1)
    .contains('Title: Money Plane')
  });

  it('should be able to display return to homepage button and return to homepage when that button is clicked', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(0).click()
    .get('.return-button').click()
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(1)
    .contains('Mulan');
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

it('should not be able to fetch movie data and should display error message', () => {
  cy.intercept({
    method: 'GET',
    url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
  }, {
    forceNetworkError: true
  }),
  cy.contains('h1', 'Something went wrong, please refresh!');
});
})
