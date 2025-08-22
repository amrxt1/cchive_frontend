import { useReviews } from "../hooks/useReviews";

const ReviewList = ({ reviewableType, reviewableId, className }) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useReviews({ reviewableType, reviewableId });

  if (isLoading) return <p>Loading reviews...</p>;
  if (error) return <p>Failed to load reviews.</p>;

  if (!reviews || reviews.length === 0)
    return (
      <p className="py-2 font-semibold">
        No reviews yet. Be the first to write one!
      </p>
    );

  return (
    <div className={className}>
      <h3>Reviews</h3>

      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <div>
              <span>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
              <span>Rating: {review.rating}/5</span>
            </div>
            <p className="text-primary">{review.author} says :</p>
            <p className="text-text/70">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
