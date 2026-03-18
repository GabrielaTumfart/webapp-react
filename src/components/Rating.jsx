export default function Rating({ vote, maxVote }) {
  function renderStars() {
    const stars = [1, 2, 3, 4, 5].map((currentStar) => {
      const starClass = currentStar <= vote ? "bi-star-fill" : "bi-star";
      return <i key={currentStar} className={`bi ${starClass}`}></i>;
    });
    return stars;
  }

  return <div>{renderStars()}</div>;
}
