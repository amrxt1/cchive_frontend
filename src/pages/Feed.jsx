import { useAuth } from "../context/AuthContext";
import RecentListings from "../components/feed/RecentListings";
import RecentReviews from "../components/feed/RecentReviews";
import StudyGroupActivity from "../components/feed/StudyGroupActivity";
import Container from "../components/shared/Container";

const Feed = () => {
  const { user } = useAuth();
  return (
    <>
      <Container className="min-h-screen">
        <div className="pt-4 lg:pt-8 font-semibold text-xl text-primary ">
          {user.first_name}'s Feed
        </div>
        <RecentListings />
        <StudyGroupActivity />
        <RecentReviews />
      </Container>
    </>
  );
};

export default Feed;
