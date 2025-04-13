import { useInstructors } from '../hooks/useInstructors';
import { Link } from 'react-router-dom';

const Instructors = () => {
  const { data: instructors, isLoading, error } = useInstructors();

  return (
    <div >
      <h1 >Instructors 👩‍🏫</h1>

      {isLoading && <p>Loading instructors...</p>}
      {error && <p className="text-red-500">Failed to load instructors.</p>}

      <div >
        {instructors?.map((instructor) => (
          <Link
            to={`/instructors/${instructor.id}`}
            key={instructor.id}
          >
            <h3 >
              {instructor.first_name} {instructor.last_name}
            </h3>
            <p >{instructor.department}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
