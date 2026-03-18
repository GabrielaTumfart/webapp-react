export default function ReviewCard({ name, vote, text }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{text}</p>
      <p>{vote}</p>
    </div>
  );
}
