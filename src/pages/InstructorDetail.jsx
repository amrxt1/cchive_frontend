import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../lib/api";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import Container from "../components/shared/Container";

const InstructorDetail = () => {
  const { id } = useParams();

  const {
    data: instructor,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["instructor", id],
    queryFn: async () => {
      const res = await api.get(`/instructors/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <p>Loading Instructor...</p>;
  if (error) return <p>Could not load Instructor</p>;

  return (
    <Container className="min-h-screen">
      <div className="mt-4">
        <div className="bg-surface rounded-lg px-8 py-4">
          <h1 className="text-primary text-xl font-semibold">
            {instructor.first_name} {instructor.last_name}
          </h1>
          <p className="font-semibold">Department: {instructor.department}</p>
          <p>
            <span className="text-secondary font-semibold">
              Average Rating:
            </span>{" "}
            {instructor.avg_rating}
          </p>
        </div>
        <div className="bg-surface mt-4 rounded-lg px-8 py-4">
          <ReviewForm reviewableType="Instructor" reviewableId={id} />
          <ReviewList reviewableType="Instructor" reviewableId={id} />
        </div>
      </div>
    </Container>
  );
};

export default InstructorDetail;
