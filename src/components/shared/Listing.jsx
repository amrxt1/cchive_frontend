import { Link } from "react-router-dom";

const Listing = ({ listing }) => {
  return (
    <div className="bg-surface flex h-full flex-col justify-between gap-4 rounded-lg p-4 shadow-md transition hover:shadow-lg">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-text-primary text-xl font-bold">
            {listing.title}
          </h3>
          <p className="text-text-secondary mt-1 line-clamp-2 text-sm">
            {listing.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-primary text-lg font-bold">
          ${parseFloat(listing.price).toFixed(2)}
        </p>
        <Link
          to={`/user/${listing.seller_id}`}
          className="bg-primary/20 text-primary hover:bg-primary/30 rounded-full px-3 py-1 text-xs transition"
        >
          @{listing.seller}
        </Link>
      </div>
    </div>
  );
};

export default Listing;
