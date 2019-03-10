import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
            
        )
    }
}

class MoviePoster extends Component {
    render(){
        return(
            <img src='https://www.much.com/wp-content/uploads/2015/11/7-Costumes.jpg'></img>
        )
    }
}

export default Movie;