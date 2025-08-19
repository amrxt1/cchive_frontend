import Listing from "./Listing";

const ListingsContainer = ({ listings, heading }) => {
  return (
    <>
      <div className="text-primary pt-4 text-2xl font-bold">{heading}</div>
      <div className="grid grid-cols-1 gap-4 pt-2 lg:grid-cols-3">
        {listings?.map((listing) => (
          <Listing listing={listing} key={listing.id} />
        ))}
      </div>
    </>
  );
};

export default ListingsContainer;
