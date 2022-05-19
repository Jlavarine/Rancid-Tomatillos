import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'


const MovieCard = (props) => {
  return (
    <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
      <div className='movie-card'>
        <h3 id={props.id} className='titles'>{props.title}</h3>
        <img id={props.id} className='posters' src={props.poster} alt={props.title}/>
      </div>
    </Link>
  )
}

export default MovieCard;
