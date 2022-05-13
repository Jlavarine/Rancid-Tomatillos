import React, { Component } from 'react'
import App from './App'
import './MovieDescription.css'
import movieData from './data';
class MovieDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: props.movies
    }
  }

  // componentDidMount = (props) => {
  //   console.log(props)
  //   // this.setState({ movie: props.movies})
  // }
  render() {
    return (
      <h1>{this.state.movie[0].title}</h1>
      // <div className='movie-description'>
        // <img src={this.state.movie.backdrop_path}/>
        // <div>
        //   <img src={this.state.movie.poster_path}/>
        // </div>
        // <div>
          // <p>{this.state.movie.title}</p>
        //   <p>{this.state.movie.release_date}</p>
        //   <p>{this.state.movie.average_rating}</p>
        // </div>
      // </div>
    )
  }

}
export default MovieDescription
