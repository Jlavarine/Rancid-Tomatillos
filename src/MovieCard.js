import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'


const MovieCard = (props) => {
  return (
    <Link to={`/${props.id}`}>
      <div className='movie-card'>
        <h3 onClick={event => props.getClickedMovie(event.target.id)} id={props.id} className='titles'>{props.title}</h3>
        <img onClick={event => props.getClickedMovie(event.target.id)} id={props.id} className='posters' src={props.poster} />
      </div>
    </Link>

  )
}

export default MovieCard;
