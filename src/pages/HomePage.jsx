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
      <div className="row">
        {movies.map((movie) => (
          <div className="col-3" key={movie.id}>
            <MovieCard
              key={movie.id}
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

// bonus Tiziano film piu votato get best film oppure filtro sulla rotta che ho gia inventare un fare un edpoint col
