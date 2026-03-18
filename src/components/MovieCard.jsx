import { Link } from "react-router-dom";
export default function MovieCard({ id, title, director, genre, image }) {
  return (
    <div>
      <img src={`http://localhost:3000/${image}`} alt={title} width="200" />
      <h2>{title}</h2>
      <p>{director}</p>
      <p>{genre}</p>
      <Link to={`/movies/${id}`}>Vedi dettaglio</Link>
    </div>
  );
}
