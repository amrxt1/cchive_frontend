import { useListings } from "../../hooks/useListings";
import { Link } from "react-router-dom";

const Listing = ({ listing }) => {
  return (
    <>
      <div className="bg-surface p-6 rounded-2xl shadow-md flex flex-col gap-4 hover:shadow-lg transition">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-text-primary">
            {listing.title}
          </h3>
          <p className="text-lg font-bold text-primary">
            ${parseFloat(listing.price).toFixed(2)}
          </p>
        </div>
        <p className="text-sm text-text-secondary line-clamp-2">
          {listing.description}
        </p>
        <div className="flex justify-end">
          <Link
            to={`/user/${listing.seller_id}`}
            className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full hover:bg-primary/30 transition"
          >
            @{listing.seller}
          </Link>
        </div>
      </div>
    </>
  );
};

const RecentListings = () => {
  const { data: listings, isLoading, error } = useListings();
  return (
    <div className="grid grid-cols-1 pt-4 gap-4 lg:grid-cols-3 ">
      {isLoading && <p className="text-secondary">Loading Listings...</p>}
      {error && <p className="text-error">Failed to load Listings.</p>}

      {listings?.map((listing) => (
        <Listing listing={listing} key={listing.id} />
      ))}
    </div>
  );
};

export default RecentListings;
