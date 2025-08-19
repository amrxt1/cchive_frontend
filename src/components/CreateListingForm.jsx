import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import api from "../lib/api";

const CreateListingForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newListing) => {
      const res = await api.post("/listings", newListing);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listings"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
    setForm({
      title: "",
      description: "",
      price: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-surface mt-4 rounded-lg p-4">
      <h2 className="text-primary text-lg font-bold">Create New Listing</h2>
      <div className="grid gap-y-2 py-4">
        <input
          className="bg-background text-md rounded-md px-2 py-1"
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="bg-background text-md resize-none rounded-md px-2 py-1"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={4}
          required
        />
        <input
          className="bg-background text-md rounded-md px-2 py-1"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
      </div>

      <button
        type="submit"
        disabled={mutation.isLoading}
        className="bg-primary text-surface w-full rounded-lg px-4 py-1 text-lg font-bold"
      >
        {mutation.isLoading ? "Submitting..." : "Post Listing"}
      </button>
      {mutation.isError && (
        <p className="text-red-500">Failed to create listing.</p>
      )}
    </form>
  );
};

export default CreateListingForm;
