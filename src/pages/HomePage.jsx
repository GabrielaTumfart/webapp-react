import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [bestMovie, setBestMovie] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((response) => {
      const results = response.data.results;
      setMovies(results);

      let best = results[0];
      results.forEach((movie) => {
        if (movie.avg_vote > best.avg_vote) {
          best = movie;
        }
      });
      setBestMovie(best);
    });
  }, []);
  return (
    <div>
      <h1>Lista Film</h1>
      {bestMovie && (
        <div>
          🏆 Film più votato: <strong>{bestMovie.title}</strong>{" "}
          {Math.ceil(bestMovie.avg_vote)}/5
        </div>
      )}
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
