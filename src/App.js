import React, { Component } from 'react';
// import movieData from './data';
// import logo from './logo.svg';
import './App.css';
import MovieContainer from './MovieContainer';
import MovieDescription from './MovieDescription';

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
    // fetch('https://httpstat.us/500')
    //rancid-tomatillos.herokuapp.com/api/v2/movies
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
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
    if (this.state.clickedMovie || this.state.clickedHome) {
      return (
        <main className='App'>
          <h1>Rancid Tomatillos</h1>
          <MovieDescription movies={this.state.clickedMovie} returnToMainView={this.returnToMainView}/>
        </main>
      )
    } else if (this.state.error) {
      return (
        <h1 className='App'>{this.state.error}</h1>
      )
    } else {
      return (
        <main className='App'>
          <h1>Rancid Tomatillos</h1>
          <MovieContainer movies={this.state.movies} getClickedMovie={this.getClickedMovie}/>
        </main>
      )
    }
  }
}

// <MovieContainer movies={this.state.movies} getClickedMovie={this.getClickedMovie}/>









// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
