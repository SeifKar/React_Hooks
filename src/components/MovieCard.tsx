import React from 'react';
import { Movie } from '../types/movie';
import '../styles/MovieCard.css';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="rating">Rating: {movie.rating}/5</div>
            </div>
        </div>
    );
};

export default MovieCard;
