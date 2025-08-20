import { useCourses } from "../hooks/useCourses";
import { Link } from "react-router-dom";
import Container from "../components/shared/Container";
import { useState } from "react";

const Courses = () => {
  const { data: courses, isLoading, error } = useCourses();
  const [search, setSearch] = useState("");

  const searchResult =
    courses?.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase()),
    ) || [];

  return (
    <Container>
      <div>
        <h1 className="text-primary mt-4 text-2xl font-bold">Courses 📚</h1>

        {isLoading && <p>Loading courses...</p>}
        {error && <p className="text-red-500">Failed to load courses.</p>}

        <input
          type="text"
          placeholder="Search"
          className="bg-background text-md border-surface mt-2 w-full rounded-md border-1 px-2 py-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="mt-4 grid grid-cols-1 gap-4">
          {searchResult?.map((course) => (
            <div className="bg-surface rounded-lg px-4 py-8" key={course.id}>
              <Link to={`/courses/${course.id}`}>
                <h3 className="text-primary text-xl font-semibold hover:underline">
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
