import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import MovieDescription from './MovieDescription';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      clickedMovie: '',
      clickedHome: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        this.setState({error: 'Something went wrong, please refresh!'})
      } else {
        return response.json()
      }
    })
    .then(data => this.setState({movies: data.movies}))
    .catch(error => {
      console.log('Something went wrong, please refresh!')
      this.setState({error: 'Something went wrong, please refresh!'})
    })
  }

  getClickedMovie = (id) => {
    const numberId = parseInt(id)
    const selectedMovie = this.state.movies.find(movie => movie.id === numberId)
    this.setState({movies: [...this.state.movies], clickedMovie: selectedMovie})
  }

  returnToMainView = () => {
    this.setState({movies: [...this.state.movies], clickedMovie: '', clickedHome: ''})
  }

  render() {
    return (
      <main className='App'>
        <h1>🍿 Rancid Tomatillos 🍿</h1>
        <Route exact path="/" render={() => <MovieContainer movies={this.state.movies} getClickedMovie={this.getClickedMovie} /> } />
        <Route path="/:id" render={({match}) => {
          return <MovieDescription {...match.params.id} movies={this.state.clickedMovie} returnToMainView={this.returnToMainView}/>
        }}/>
        {this.state.error && <h1>{this.state.error}</h1>}
      </main>
    )
  }


  // <Route exact path='/:id' render={({match}) => {
  //   return <MovieDescription id={match.params.id} /> }} />
// <Route exact path="/movies/:movie_id" render={() => <MovieDescription movies={this.state.movies} returnToMainView={this.returnToMainView} /> } />




  // render() {
  //   if (this.state.clickedMovie || this.state.clickedHome) {
  //     return (
  //       <main className='App'>
  //         <h1>🍿 Rancid Tomatillos 🍿</h1>
  //         <MovieDescription movies={this.state.clickedMovie} returnToMainView={this.returnToMainView}/>
  //       </main>
  //     )
  //   } else if (this.state.error) {
  //     return (
  //       <h1 className='App'>{this.state.error}</h1>
  //     )
  //   } else {
  //     return (
  //       <main className='App'>
  //         <h1>🍿 Rancid Tomatillos 🍿</h1>
  //         <MovieContainer movies={this.state.movies} getClickedMovie={this.getClickedMovie}/>
  //       </main>
  //     )
  //   }
  // }
}
export default App;
