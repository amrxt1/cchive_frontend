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

export default Listing;
