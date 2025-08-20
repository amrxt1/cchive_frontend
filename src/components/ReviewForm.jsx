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
      <h3 className="text-primary text-xl font-semibold">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="my-4 grid gap-y-2">
        <textarea
          className="bg-background text-md resize-none rounded-md px-2 py-1"
          required
          placeholder="Write your thoughts..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          rows={4}
        />

        <label>Rating (1 to 5)</label>
        <input
          className="bg-background text-md resize-none rounded-md px-2 py-1"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-surface w-full rounded-lg px-4 py-1 text-lg font-bold"
        >
          {isLoading ? "Submitting..." : "Submit Review"}
        </button>

        {isError && (
          <p className="mt-2 text-sm text-red-500">Could not submit review.</p>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
