import React, { Component } from 'react'
import App from './App'
import './MovieDescription.css'

class MovieDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
      videos: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movies.id}`)
    .then(response => {
      if (!response.ok) {
        this.setState({error: 'Something went wrong, please refresh!'})
      } else {
        return response.json()
      }
    })
    .then(data => this.setState({movie: data.movie}))
    .catch(error => {
      console.log('Something went wrong, please refresh!')
      this.setState({error: 'Something went wrong, please refresh!'})
    })
    this.fetchTrailerData()
  }

  fetchTrailerData = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movies.id}/videos`)
    .then(response => {
      if (!response.ok) {
        this.setState({error: 'Something went wrong, please refresh!'})
      } else {
        return response.json()
      }
    })
    .then(data => this.setState({videos: data.videos[0]}))
    .catch(error => {
      console.log('Something went wrong, please refresh!')
      this.setState({error: 'Something went wrong, please refresh!'})
    })
  }

  render() {
      return (
            <div style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}} className='movie-description' src={this.state.movie.backdrop_path}>
              <div className='poster-box'>
                <img className='poster-path' src={this.state.movie.poster_path}/>
              </div>
              <div className='trailer-details-box'>
                <div className='trailer-box'>
                <iframe src={`http://www.youtube.com/embed/${this.state.videos.key}`} width='900px' height='400px'></iframe>
                </div>
                <div className='movie-details-box'>
                <p>Title: {this.state.movie.title}</p>
                <br/>
                <p>Overview: {this.state.movie.overview}</p>
                <br/>
                <p>Runtime: {this.state.movie.runtime} mins</p>
                <br/>
                <p>Average Rating: {this.state.movie.average_rating}</p>
                <br/>
                <p>Release Date: {this.state.movie.release_date}</p>
                <br/>
                <button className='return-button' onClick={() => this.props.returnToMainView()}>Return</button>
                </div>
              </div>
            </div>
      )
}
}

export default MovieDescription
