import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import api from "../lib/api";

const CreateListingForm = () => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        price: '',
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (newListing) => {
            const res = await api.post('/listings', newListing);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['listings'] });
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(form);
        setForm(
            {
                title: '',
                description: '',
                price: '',
            }
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Listing</h2>

            <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                />
            <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
                required
                />
            <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
                />

            <button
                type="submit"
                disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Submitting...' : 'Post Listing'}
                </button>
            {mutation.isError && <p className="text-red-500">Failed to create listing.</p>}
        </form>
    );
};

export default CreateListingForm;