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
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              director={movie.director}
              genre={movie.genre}
              image={movie.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// bonus Tiziano film piu votato get best film oppure filtro sulla rotta che ho gia inventare un fare un endpoint col miglior film
