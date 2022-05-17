describe('Rancid Tomatillos main page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to visit the page and render the correct elements', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(1)
    .contains('Mulan');
  });

  it('should be able to fetch movie data and display it on the page', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    []
  ).as('getMovies');
    // cy.get('getMovies')
    //   .should('have.length', 40)
  });

  it('should not be able to fetch movie data and should display error message', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    }, {
      forceNetworkError: true
    }),
    cy.contains('h1', 'Something went wrong, please refresh!');
  });
});
