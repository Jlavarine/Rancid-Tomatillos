import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className='movie-card'>
      <img src={props.poster} />
      <h2>{props.title}</h2>
    </div>
  )
}



export default MovieCard;
