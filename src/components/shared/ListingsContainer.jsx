import Listing from "./Listing";

const ListingsContainer = ({ listings }) => {
  return (
    <>
      <div className="pt-4 text-2xl font-bold  text-primary">
        Recent Listings
      </div>
      <div className="grid grid-cols-1 pt-2 gap-4 lg:grid-cols-3">
        {listings?.map((listing) => (
          <Listing listing={listing} key={listing.id} />
        ))}
      </div>
    </>
  );
};

export default ListingsContainer;
