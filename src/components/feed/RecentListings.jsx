import { useFeedListings } from "../../hooks/useFeedListings";
import ListingsContainer from "../shared/ListingsContainer";

const RecentListings = () => {
  const { data: listings, isLoading } = useFeedListings();

  if (isLoading) return <p className="p-4">Loading pending requests...</p>;

  if (!listings.length) return <p className="p-4">No pending requests.</p>;

  return (
    <>
      <ListingsContainer listings={listings} />
    </>
  );
};

export default RecentListings;
