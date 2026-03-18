import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        setMovie(response.data.result[0]);
        setReviews(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!movie) return <p>Caricamento...</p>;
  return (
    <div>
      <h1>Dettaglio Film</h1>
      <MovieCard
        id={movie.id}
        title={movie.title}
        director={movie.director}
        genre={movie.genre}
        image={movie.image}
      />
      <h2>Recensioni</h2>
    </div>
  );
}
