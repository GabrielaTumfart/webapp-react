import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <div>
      <h1>Lista Film</h1>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          director={movie.director}
          genre={movie.genre}
          image={movie.image}
        />
      ))}
    </div>
  );
}
