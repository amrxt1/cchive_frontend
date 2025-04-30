import { useListings } from "../hooks/useListings";
import CreateListingForm from "../components/CreateListingForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const { data: listings, isLoading, error } = useListings();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div>
        <h1>Marketplace</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          {showForm ? "Cancel" : "Create Listing"}
        </button>
      </div>

      {showForm && (
        <div>
          <CreateListingForm onSuccess={() => setShowForm(false)} />
        </div>
      )}

      {isLoading && <p className="text-gray-500">Loading Listings...</p>}
      {error && <p className="text-red-500">Failed to load Listings.</p>}

      <div>
        {listings?.map((listing) => (
          <div key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>
              Sold by:{" "}
              <Link to={`/user/${listing.seller_id}`}>{listing.seller}</Link>
            </p>
            <p>${parseFloat(listing.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
