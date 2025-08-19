import { useFeedReviews } from "../../hooks/useFeedReviews";

function Review({ review }) {
  return (
    <div className="text-md bg-surface mb-4 rounded-lg p-4">
      <p className="pb-2">
        <span className="text-primary font-bold">{review.reviewer}</span>
        {" reviewed :"}
      </p>
      <p>
        <span className="italic">{review.reviewed}</span>
      </p>
      <p className="text-primary font-bold">Rating: {review.rating}</p>
    </div>
  );
}

const RecentReviews = () => {
  const { data: reviews, isLoading } = useFeedReviews();

  return (
    <div>
      <div className="text-primary pt-4 text-2xl font-bold">Recent Reviews</div>

      {reviews &&
        reviews.map((review) => {
          return <Review key={review.id} review={review} />;
        })}

      {!reviews && (
        <div className="text-primary pt-4 text-lg font-bold">
          No recent reviews
        </div>
      )}
    </div>
  );
};

export default RecentReviews;
