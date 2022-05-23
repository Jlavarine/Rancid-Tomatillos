describe('Rancid Tomatillos main page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to visit the main page by accessing `http://localhost:3000`', () => {
    cy.url('http://localhost:3000')
  });

  it('should be able to visit the main page and render the title', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
  });

  it('should be able to visit the main page and render the movies', () => {
    cy.get('.movie-container').should('exist')
    .children()
    .eq(1)
    .contains('Mulan');
  });

  it('should be able to visit the main page and render the footer with information', () => {
    cy.get('.footer').should('exist')
    cy.get('.developer-1').should('exist')
    cy.get('.developer-2').should('exist')
    cy.get('.school').should('exist')
  });

  it('should be able to fetch movie data and display it on the page', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies: [
          {
            "id": 694919,
            "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            "title": "Money Plane",
            "average_rating": 6.666666666666667,
            "release_date": "2020-09-29"
          },
          {
            "id": 337401,
            "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
            "title": "Mulan",
            "average_rating": 4.909090909090909,
            "release_date": "2020-09-04"
          }
        ]
      }
    })
    cy.get('.movie-container').children().should('have.length', 2)
  });

  it('should be able to display error message if fetch return a 500 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {
        error: "Server down try again."
      }
    })
    cy.contains('h1', 'Something went wrong, please refresh!');
    cy.get('.movie-container').children().should('have.length', 0)
  });

  it('should be able to display error message if fetch return a 404 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      body: {
        error: "URL cannot be found."
      }
    })
    cy.contains('h1', 'Something went wrong, please refresh!');
  });
});
