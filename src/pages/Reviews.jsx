import Container from "../components/shared/Container";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <Container className="min-h-screen">
      <div>Welcome to the Reviews Page</div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <Link to={"/courses"}>
            <h1 className="text-2xl text-primary font-bold">Courses</h1>
          </Link>
        </div>
        <div>
          <Link to={"/instructors"}>
            <h1 className="text-2xl text-primary font-bold">Instructors</h1>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
