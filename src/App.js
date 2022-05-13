import React, { Component } from 'react';
import movieData from './data';
// import logo from './logo.svg';
import './App.css';
import MovieContainer from './MovieContainer';
import MovieDescription from './MovieDescription';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      clickedMovie: ''
    }
  }
  componentDidMount = () => {
    this.setState({movies: movieData.movies})
  }

  getClickedMovie = (id) => {
    const numberId = parseInt(id)
    const selectedMovie = this.state.movies.find(movie => movie.id === numberId)
    this.setState({movies: [...this.state.movies], clickedMovie: selectedMovie})
}

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.clickedMovie
        ? <MovieDescription movies={this.state.clickedMovie} />
        : <MovieContainer movies={this.state.movies} getClickedMovie={this.getClickedMovie}/>
        }
      </main>
    )
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
