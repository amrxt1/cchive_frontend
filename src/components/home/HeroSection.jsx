import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const HeroSection = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:3000/api/v1/search_users").then((res) =>
        res.json(),
      ),
  });

  const [query, setQuery] = useState("");
  const lowercaseQuery = query.toLowerCase();
  const filtered = query.length >= 3 ? users.filter((u) => u.username.toLowerCase().includes(lowercaseQuery)).slice(0, 10) : [];

  return (
    <Container className="py-32">
      <div className="z-2 grid grid-cols-6 gap-y-4 pb-40">
        <div className="font-special col-span-6 text-5xl font-bold">
          Get Connected.
        </div>
        <div className="font-special col-span-5 text-2xl">
          23% of students are on CC Hive. Check if your friends are here:
        </div>
        <div className="flex relative items-center gap-4 col-span-5 text-lg font-semibold pb-4">
          <input
            className="border-surface border-2 w-6/10 rounded-md px-2"
            type="text"
            placeholder="Search by Student ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link
            to={"/register"}
            className="bg-accent text-surface rounded-md border-2 text-center px-2"
          >
            Get Started
          </Link>
          <ul className="text-text/77 text-lg absolute top-full">
            {filtered.map((user) => (
              <li key={user.username}>
                {user.first_name} {user.last_name}{" "}
                <span>({user.username})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
