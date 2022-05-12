import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className='movie-card'>
      <h3 onClick={event => props.getClickedMovie(event.target.id)} id={props.id} className='titles'>{props.title}</h3>
      <img onClick={event => props.getClickedMovie(event.target.id)} id={props.id} className='posters' src={props.poster} />
    </div>
  )
}

export default MovieCard;
