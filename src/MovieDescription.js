import React, { Component } from 'react'
import App from './App'
import './MovieDescription.css'

class MovieDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movies.id}`)
    // .then(response => response.json())
    .then(response => {
      // if (response.status === '500') {
      if (!response.ok) {
        this.setState({error: 'Something went wrong, please refresh!'})
      } else {
        // console.log(response)
        return response.json()
      }
    })
    .then(data => this.setState({movie: data.movie}))
    .catch(error => {
      console.log('Something went wrong, please refresh!')
      this.setState({error: 'Something went wrong, please refresh!'})
    })
  }

  render() {
    if (!this.state.error) {
      return (
        <div style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}} className='movie-description' src={this.state.movie.backdrop_path}>
          <div className='poster-box'>
            <img className='poster-path' src={this.state.movie.poster_path}/>
          </div>
          <div className='movie-details-box'>
            <p>Title: {this.state.movie.title}</p>
            <p>Overview: {this.state.movie.overview}</p>
            <p>Runtime: {this.state.movie.runtime} mins</p>
            <p>Average Rating: {this.state.movie.average_rating}</p>
            <p>Release Date: {this.state.movie.release_date}</p>
            <button onClick={() => this.props.returnToMainView()}>Return</button>
          </div>
        </div>
      )
    } else if (this.state.error) {
      return (
        <h1 className='App'>{this.state.error}</h1>
      )
    }
  }
}

export default MovieDescription
