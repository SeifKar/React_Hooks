import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { Movie } from './types/movie';
import './App.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 5
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 5
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMovie, setNewMovie] = useState<Movie>({
    title: "",
    description: "",
    posterURL: "",
    rating: 1
  });

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  const handleAddMovie = (e: React.FormEvent) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 1
    });
    setShowAddForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Collection</h1>
        <button 
          className="add-movie-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add New Movie'}
        </button>
      </header>

      {showAddForm && (
        <form onSubmit={handleAddMovie} className="add-movie-form">
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
            required
          />
          <textarea
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
            required
          />
          <input
            type="url"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value})}
            required
          />
          <select
            value={newMovie.rating}
            onChange={(e) => setNewMovie({...newMovie, rating: Number(e.target.value)})}
          >
            {[1,2,3,4,5].map(num => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
          <button type="submit">Add Movie</button>
        </form>
      )}

      <Filter
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
