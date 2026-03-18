export default function MovieCard({ id, title, director, genre, image }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{director}</p>
      <p>{genre}</p>
    </div>
  );
}
