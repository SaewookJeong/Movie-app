import React, { Component } from 'react';
import proTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static proTypes = {
        title: proTypes.number,
        poster: proTypes.string
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div> 
        )
    }
}

class MoviePoster extends Component {
    render(){
        return(
            <img src={this.props.poster} alt="poster"></img>
        )
    }
}

export default Movie;