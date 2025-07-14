import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../lib/api";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import Container from "../components/shared/Container";

const CourseDetail = () => {
  const { id } = useParams();

  const {
    data: course,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await api.get(`/courses/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <p>Loading Course...</p>;
  if (error) return <p>Could not load course.</p>;
  return (
    <Container className="min-h-screen">
      <div className="mt-4">
        <div className="bg-surface px-8 py-4 rounded-lg">
          <h1 className="text-primary text-xl font-semibold">{course.title}</h1>
          <p className="font-semibold">
            {course.subject + " " + course.course_number}
          </p>
          <p className="py-2 text-text-muted">{course.description}</p>
          <p>
            <span className="text-secondary font-semibold">Credits:</span>{" "}
            {course.credits}
          </p>
          <p>
            <span className="text-secondary font-semibold">
              Average Rating:
            </span>{" "}
            {course.avg_rating}
          </p>
        </div>
        <div className="px-8 py-4 mt-4 bg-surface rounded-lg ">
          <ReviewForm reviewableType="Course" reviewableId={id} />
          <ReviewList reviewableType="Course" reviewableId={id} />
        </div>
      </div>
    </Container>
  );
};

export default CourseDetail;
