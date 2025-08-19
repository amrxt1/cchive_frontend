import { useFeedListings } from "../../hooks/useFeedListings";
import ListingsContainer from "../shared/ListingsContainer";

const RecentListings = () => {
  const { data: listings, isLoading } = useFeedListings();

  if (isLoading)
    return (
      <p className="text-primary pt-4 text-lg font-bold">
        Loading recent Listings...
      </p>
    );

  return (
    <>
      <ListingsContainer listings={listings} heading={"Recent Listings"} />
    </>
  );
};

export default RecentListings;
