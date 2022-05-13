import React from 'react'
import App from './App'
import './MovieDescription.css'

const MovieDescription = (props) => {
  return (
      <div style={{backgroundImage: `url(${props.movies.backdrop_path})`}} className='movie-description' src={props.movies.backdrop_path}>
        <div className='poster-box'>
          <img className='poster-path' src={props.movies.poster_path}/>
        </div>
        <div className='movie-details-box'>
          <p>Title: {props.movies.title}</p>
          <p>Release Date: {props.movies.release_date}</p>
          <p>Average Rating: {props.movies.average_rating.toFixed(1)}</p>
          <button>Return</button>
        </div>
      </div>
  )
}
export default MovieDescription




// import React, { Component } from 'react'
// import App from './App'
// import './MovieDescription.css'
// import movieData from './data';
// class MovieDescription extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       movie: props.movies
//     }
//   }
//
//   componentDidMount = () => {
//     console.log(this.props)
//     // this.setState({ movie: props.movies})
//   }
//   render() {
//     return (
//       <div className='movie-description'>
//         <img src={this.props.movies.backdrop_path}/>
//         <div>
//           <img src={this.props.movies.poster_path}/>
//         </div>
//         <div>
//           <p>{this.props.movies.title}</p>
//           <p>{this.props.movies.release_date}</p>
//           <p>{this.props.movies.average_rating}</p>
//         </div>
//       </div>
//     )
//   }
//
// }
// export default MovieDescription
