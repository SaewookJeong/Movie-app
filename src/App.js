import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {


  state = {
  }
 
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matirx",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt17CbuO6O_UFAcJk5ANxI9zxMyelme4bqCxdWnMMQ8LsRPiyO",
          },
          {
            title: "Full Metal Jacket",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9W11_NxcB8nSNcQrwZ23_fjphIAUVwDaMpH0sPQ-IYWBCO9IQPQ"
          },
          {
            title: "oldBoy",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BzRz_tY3ldrXFORKVS3Ua8HYwd0q4p638yF96sDjOT8eTRa1bg"
          },
          {
            title: "star Wars",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pVhSYheAJXPYqMR2YzeXC0ldyFM8iOCNIAGZU0WRLtMmYCRo"
          },
          {
            title: "Transpotting",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pVhSYheAJXPYqMR2YzeXC0ldyFM8iOCNIAGZU0WRLtMmYCRo"
          }        
        ]
      })
    },5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
export default App;
