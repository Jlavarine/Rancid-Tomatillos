import React from 'react';
// import App from './App';
import './MovieContainer.css';
import MovieCard from './MovieCard';

const MovieContainer = (props) => {
  const movieCards = props.movies.map(movie => {
    return (
      <MovieCard
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        getClickedMovie={props.getClickedMovie}
      />
    )
  })

  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )
}



export default MovieContainer;
