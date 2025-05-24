import { useCourses } from "../hooks/useCourses";
import { Link } from "react-router-dom";
import Container from "../components/shared/Container";

const Courses = () => {
  const { data: courses, isLoading, error } = useCourses();

  return (
    <Container>
      <div>
        <h1>Courses 📚</h1>

        {isLoading && <p>Loading courses...</p>}
        {error && <p className="text-red-500">Failed to load courses.</p>}

        <div className="grid grid-cols-3 gap-4">
          {courses?.map((course) => (
            <div className="px-4 py-8 bg-surface rounded-lg">
              <Link to={`/courses/${course.id}`} key={course.id}>
                <h3 className="text-primary font-semibold text-xl hover:underline">
                  {course.title}
                </h3>
                <p>
                  {course.subject} {course.course_number}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Courses;
