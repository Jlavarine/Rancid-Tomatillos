import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className='movie-card'>
      <h3 className='titles'>{props.title}</h3>
      <img className='posters' src={props.poster} />
    </div>
  )
}

export default MovieCard;
