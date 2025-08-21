import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import api from "../../lib/api";

const HeroSection = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["search_users"],
    queryFn: async () => {
      const res = await api.get(`/search_users`);
      return res.data;
    },
  });

  const [query, setQuery] = useState("");
  const lowercaseQuery = query.toLowerCase();
  const filtered =
    query.length >= 3
      ? users
          .filter((u) => u.username.toLowerCase().includes(lowercaseQuery))
          .slice(0, 10)
      : [];

  return (
    <Container className="py-32">
      <div className="z-2 grid grid-cols-12 gap-y-4 pb-32">
        <div className="font-special col-span-12 text-5xl font-bold">
          Get Connected.
        </div>
        <div className="font-special col-span-10 text-2xl">
          23% of students are on CC Hive. Check if your friends are here:
        </div>
        <div className="relative col-span-11 flex items-center justify-between gap-4 pb-4 text-lg">
          <input
            className="border-surface w-6/10 rounded-md border-2 px-2"
            type="text"
            placeholder="Search by Student ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link
            to={"/register"}
            className="bg-accent text-surface rounded-md px-2 text-center font-bold"
          >
            Get Started
          </Link>
          <ul className="text-text/77 absolute top-full text-lg">
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
