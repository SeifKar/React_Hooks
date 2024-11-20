import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types/movie';
import '../styles/MovieList.css';

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
