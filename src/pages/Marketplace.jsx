import { useListings } from "../hooks/useListings";
import { useState } from "react";
import ListingsContainer from "../components/shared/ListingsContainer";
import CreateListingForm from "../components/CreateListingForm";
import Container from "../components/shared/Container";

const Marketplace = () => {
  const { data: listings, isLoading, error } = useListings();
  const [showForm, setShowForm] = useState(false);

  return (
    <Container className="min-h-screen pt-4">
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
          <ListingsContainer listings={listings} heading={""} />
        </div>
      </div>
    </Container>
  );
};

export default Marketplace;
