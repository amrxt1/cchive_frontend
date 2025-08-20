import { useInstructors } from "../hooks/useInstructors";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../components/shared/Container";

const Instructors = () => {
  const { data: instructors, isLoading, error } = useInstructors();
  const [search, setSearch] = useState("");

  const searchLower = search.toLowerCase();

  const searchResult = instructors
    ? instructors.filter((c) => {
        return (
          c.first_name.toLowerCase().includes(searchLower) ||
          c.last_name.toLowerCase().includes(searchLower)
        );
      })
    : [];

  return (
    <Container className="min-h-screen">
      <h1 className="text-primary mt-4 text-2xl font-bold">Instructors 👩‍🏫</h1>

      {isLoading && <p>Loading instructors...</p>}
      {error && <p className="text-red-500">Failed to load instructors.</p>}

      <input
        type="text"
        placeholder="Search"
        className="bg-background text-md border-surface mt-2 w-full rounded-md border-1 px-2 py-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-4 grid grid-cols-1 gap-4">
        {searchResult?.map((instructor) => (
          <div className="bg-surface rounded-lg px-4 py-8" key={instructor.id}>
            <Link to={`/instructors/${instructor.id}`}>
              <h3 className="text-primary text-xl font-semibold hover:underline">
                {instructor.first_name} {instructor.last_name}
              </h3>
              <p>{instructor.department}</p>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Instructors;
