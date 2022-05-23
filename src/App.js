import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import MovieDescription from './MovieDescription';
import Footer from './Footer';
import { Route, Link } from 'react-router-dom';
import { fetchData } from './APIcalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
  fetchData('/')
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

  render() {
    return (
      <main className='App'>
        {this.state.error ? <h1>{this.state.error}</h1> : <h1>🍿 Rancid Tomatillos 🍿</h1>}
        <Route exact path="/" render={() => <MovieContainer movies={this.state.movies}  /> } />
        <Route exact path="/:id" render={({match}) => <MovieDescription  id={match.params.id} /> }/>
        <Footer />
      </main>
    )
  }
}

export default App;
