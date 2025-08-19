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
        <div className="flex items-center justify-between">
          <h1 className="text-primary text-2xl font-bold">Marketplace</h1>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary text-surface rounded-lg px-4 py-1 text-lg font-bold"
          >
            {showForm ? "Cancel" : "Create Listing"}
          </button>
        </div>

        {showForm && (
          <div>
            <CreateListingForm onSuccess={() => setShowForm(false)} />
          </div>
        )}

        {isLoading && (
          <p className="text-primary pt-4 text-lg font-bold">
            Loading Listings...
          </p>
        )}

        {error && (
          <p className="text-xl text-red-500">Failed to load Listings.</p>
        )}

        <div>
          <ListingsContainer listings={listings} heading={""} />
        </div>
      </div>
    </Container>
  );
};

export default Marketplace;
