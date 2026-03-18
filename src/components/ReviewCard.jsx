export default function ReviewCard({ review }) {
  return (
    <div className="mb-2 border-bottom">
      <strong>{review.name}</strong>
      <p>{review.text}</p>
      <p>{review.vote}/5</p>
    </div>
  );
}
