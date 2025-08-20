import Container from "../components/shared/Container";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <Container className="min-h-screen">
      <div className="text-primary mt-4 text-2xl font-bold">Reviews</div>
      <p className="text-text/70 mt-2">
        Help your fellow students make informed decisions about courses and
        instructors.
      </p>

      <div className="my-4 flex flex-col gap-2">
        <div className="bg-surface rounded-md px-2 py-4">
          <Link to={"/courses"}>
            <h1 className="text-primary text-2xl font-bold">Courses</h1>
            <p className="text-text/70">
              Read honest reviews about course difficulty, workload, and content
              from fellow students.
            </p>
          </Link>
        </div>
        <div className="bg-surface rounded-md px-2 py-4">
          <Link to={"/instructors"}>
            <h1 className="text-primary text-2xl font-bold">Instructors</h1>
            <p className="text-text/70">
              Discover what students think about teaching styles, accessibility,
              and grading fairness.
            </p>
          </Link>
        </div>
      </div>

      <div className="bg-accent/10 border-accent/20 mt-6 rounded-lg border p-4">
        <p className="text-text/70 text-sm">
          <strong>Community Guidelines:</strong> Reviews should be constructive
          and respectful. Focus on helping others make informed academic
          decisions.
        </p>
      </div>
    </Container>
  );
};

export default Reviews;
