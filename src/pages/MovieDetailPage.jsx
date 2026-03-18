import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import Rating from "../components/Rating";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  function fetchMovie() {
    axios.get(`http://localhost:3000/movies/${id}`).then((response) => {
      const movie = response.data.result;

      let voteSum = 0;
      movie.reviews.forEach((review) => {
        voteSum += review.vote;
      });

      const averageVote = Math.ceil(voteSum / movie.reviews.length);
      movie.average_vote = averageVote;

      setMovie(movie);
    });
  }

  if (!movie) return <h1>Caricamento...</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <div className="row">
        <div className="col-4">
          <img
            src={`http://localhost:3000/${movie.image}`}
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <div className="mb-2 border-bottom">
            <strong>Regista:</strong>
            <p>{movie.director}</p>
          </div>
          <div className="mb-2 border-bottom">
            <strong>Genere:</strong>
            <p>{movie.genre}</p>
          </div>
          <div className="mb-2 border-bottom">
            <strong>Rating:</strong>
            <Rating vote={movie.average_vote} maxVote={5} />
          </div>
          <div className="mb-2 border-bottom">
            <strong>Abstract:</strong>
            <p>{movie.abstract}</p>
          </div>
        </div>
      </div>
      <h2 className="mt-4">Recensioni</h2>
      {movie.reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
