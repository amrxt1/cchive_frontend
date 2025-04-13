import { useCourses } from '../hooks/useCourses';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { data: courses, isLoading, error } = useCourses();

  return (
    <div >
      <h1 >Courses 📚</h1>

      {isLoading && <p>Loading courses...</p>}
      {error && <p className="text-red-500">Failed to load courses.</p>}

      <div >
        {courses?.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
          >
            <h3 >{course.title}</h3>
            <p >{course.subject}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
