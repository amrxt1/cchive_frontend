import { useAuth } from "../context/AuthContext";
import RecentListings from "../components/feed/RecentListings";
import RecentReviews from "../components/feed/RecentReviews";
import StudyGroupActivity from "../components/feed/StudyGroupActivity";
import FeedNav from "../components/feed/FeedNav";
import Container from "../components/shared/Container";

const Feed = () => {
  const { user } = useAuth();
  return (
    <>
      <Container className="min-h-screen">
        <div className="text-primary pt-4 text-xl font-semibold lg:pt-8">
          {user.first_name}'s Feed
        </div>
        <FeedNav />
        <RecentListings />
        <StudyGroupActivity />
        <RecentReviews />
      </Container>
    </>
  );
};

export default Feed;
