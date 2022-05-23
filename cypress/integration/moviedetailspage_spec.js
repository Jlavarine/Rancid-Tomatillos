describe('Movie Details Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should be able to visit the movie details page and render the title', () => {
    cy.contains('🍿 Rancid Tomatillos 🍿')
  });

  it('should be able to visit the movie details page and render the poster image', () => {
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    .get('.poster-path').should('exist')
  });

  it('should be able to visit the movie details page and render the trailer box', () => {
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    .get('.youtube-movie').should('exist')
  });

  it('should be able to visit the movie details page and render the correct elements: title, overview, runtime, rating, release', () => {
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    .get('.desc-title').contains('Title: Money Plane')
    .get('.desc-overview').contains('Overview: A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
    .get('.desc-runtime').contains('Runtime: 82 mins')
    .get('.desc-rating').contains('Average Rating: 7/10')
    .get('.desc-release').contains('Release Date: 2020-09-29')
  });

  it('should be able to visit the main page and render the footer with information', () => {
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    cy.get('.footer').should('exist')
    cy.get('.developer-1').should('exist')
    cy.get('.developer-2').should('exist')
    cy.get('.school').should('exist')
  });

  it('should be able to display return to homepage button and return to homepage when that button is clicked', () => {
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    .get('.return-button').click()
    cy.contains('🍿 Rancid Tomatillos 🍿')
    .get('.movie-container')
    .children()
    .eq(1)
    .contains('Mulan');
  });

  it('should be able to fetch individual movie data and change URL based on movie id', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 200,
      body: {
        movie: [
          {
          "id": 694919,
          "title": "Money Plane",
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          "release_date": "2020-09-29",
          "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
          "genres": [
              "Action"
          ],
          "budget": 0,
          "revenue": 0,
          "runtime": 82,
          "tagline": "",
          "average_rating": 6.875
          }
        ]
      }
    })
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    cy.url('http://localhost:3000/694919')
  });

  it('should be able to display error message if fetch return a 500 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 500,
      body: {
        error: "Server down try again."
      }
    })
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    cy.get('.fof-message')
    .contains('That url does not exist! :/');
  });

  it('should be able to display error message if fetch return a 404 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 404,
      body: {
        error: "URL cannot be found."
      }
    })
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    cy.get('.fof-message')
    .contains('That url does not exist! :/');
  });

  it('should be able to fetch individual movie data and check if video exists', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      statusCode: 200,
      body: {
        videos: [
          {
          "id": 330,
          "movie_id": 694919,
          "key": "aETz_dRDEys",
          "site": "YouTube",
          "type": "Trailer"
          }
        ]
      }
    })
    cy.get('.movie-container')
    .children()
    .eq(0).click()
    cy.url('http://localhost:3000/694919')
    cy.get('.youtube-movie')
    .should('exist')
  });
});
