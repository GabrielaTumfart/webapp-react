import { Link } from "react-router-dom";
export default function MovieCard({ id, title, director, genre, image }) {
  return (
    <div>
      <img
        src={`http://localhost:3000/${image}`}
        className="card-img-top"
        alt={title}
        style={{ height: "400px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{director}</p>
        <p className="card-text">{genre}</p>
        <Link to={`/movies/${id}`} className="btn btn-dark btn-sm">
          Vedi dettaglio
        </Link>
      </div>
    </div>
  );
}
