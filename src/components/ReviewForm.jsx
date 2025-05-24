import { useState } from "react";
import { useReviewSubmit } from "../hooks/useReviewSubmit";

const ReviewForm = ({ reviewableType, reviewableId, className }) => {
  const [form, setForm] = useState({ content: "", rating: 1 });

  const { mutate, isLoading, isError } = useReviewSubmit({
    reviewableType,
    reviewableId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
    setForm({ content: "", rating: 1 });
  };

  return (
    <div className={className}>
      <h3 className="text-primary font-semibold font-special text-xl">
        Leave a Review
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          required
          placeholder="Write your thoughts..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          rows={4}
        ></textarea>

        <div>
          <label>Rating (1 to 5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={form.rating}
            onChange={(e) =>
              setForm({ ...form, rating: Number(e.target.value) })
            }
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Review"}
        </button>

        {isError && (
          <p className="text-red-500 text-sm mt-2">Could not submit review.</p>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
