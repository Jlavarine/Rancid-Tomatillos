import React, { Component } from 'react'
import App from './App'
import NoPageFound from './NoPageFound'
import './MovieDescription.css'
import { Link } from 'react-router-dom'
import { fetchData, fetchMovieTrailer } from './APIcalls'

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
    fetchData(`/${this.props.id}`)
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
    fetchData(`/${this.props.id}/videos`)
    .then(response => {
      if (!response.ok) {
        console.log('Could not load video trailer, please refresh!')
      } else {
        return response.json()
      }
    })
    .then(data => this.setState({videos: data.videos[0]}))
    .catch(error => {
      console.log('Could not load video trailer, please refresh!')
    })
  }

  render() {
    if(!this.state.error) {
      return (
        <section style={{backgroundImage: `url(${this.state.movie.backdrop_path})`}} className='movie-description' src={this.state.movie.backdrop_path} alt={this.state.movie.title}>
        <div className='poster-box'>
        <img className='poster-path' src={this.state.movie.poster_path} alt={this.state.movie.title}/>
        </div>
        <div className='trailer-details-box'>
          <div className='trailer-box'>
            <iframe className='youtube-movie' src={`https://www.youtube.com/embed/${this.state.videos.key}`} alt={this.state.movie.title} width='750px' height='400px'></iframe>
          </div>
          <div className='movie-details-box'>
          <p className='desc-title'>Title: {this.state.movie.title}</p><br/>
          <p className='desc-overview'>Overview: {this.state.movie.overview}</p><br/>
          <p className='desc-runtime'>Runtime: {this.state.movie.runtime} mins</p><br/>
          <p className='desc-rating'>Average Rating: {Math.round(this.state.movie.average_rating)}/10</p><br/>
          <p className='desc-release'>Release Date: {this.state.movie.release_date}</p><br/>
          <Link to='/'>
          <button className='return-button'>Return</button>
          </Link>
          </div>
          </div>
          </section>
        )
    }else if(this.state.error) {
      return (
        <NoPageFound />
      )
    }
  }
}
export default MovieDescription
