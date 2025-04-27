import { useFeedListings } from "../../hooks/useFeedListings";
import { Link } from "react-router-dom";

const Listing = ({ listing }) => {
  return (
    <div
      className="bg-surface p-6 rounded-2xl shadow-md flex 
    flex-col justify-between gap-4 hover:shadow-lg transition h-full"
    >
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-text-primary">
            {listing.title}
          </h3>
          <p className="text-sm text-text-secondary mt-1 line-clamp-2">
            {listing.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-primary">
          ${parseFloat(listing.price).toFixed(2)}
        </p>
        <Link
          to={`/user/${listing.seller_id}`}
          className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full hover:bg-primary/30 transition"
        >
          @{listing.seller}
        </Link>
      </div>
    </div>
  );
};

const RecentListings = () => {
  const { data: listings, isLoading, error } = useFeedListings();
  return (
    <>
      <div className="pt-4 text-2xl font-bold  text-primary">
        Recent Listings
      </div>
      <div className="grid grid-cols-1 pt-2 gap-4 lg:grid-cols-3">
        {isLoading && <p className="text-secondary">Loading Listings...</p>}
        {error && <p className="text-error">Failed to load Listings.</p>}

        {listings?.map((listing) => (
          <Listing listing={listing} key={listing.id} />
        ))}
      </div>
    </>
  );
};

export default RecentListings;
