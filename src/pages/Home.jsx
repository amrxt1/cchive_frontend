import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";

function Feature({ title, desc, to }) {
  return (
    <Link to={to}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  );
}
function Features() {
  return (
    <div>
      <Feature
        title="Marketplace"
        desc="Buy and sell books, gear, and more."
        to="/marketplace"
      />
      <Feature
        title="Study Groups"
        desc="Chat, share files, stay organized."
        to="/study_groups"
      />
      <Feature
        title="Peer Tutoring"
        desc="Find and offer tutoring help."
        to="/tutoring/request"
      />
      <Feature
        title="Course Reviews"
        desc="Leave reviews for instructors and courses."
        to="/courses"
      />
    </div>
  );
}

function HeroSection() {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:3000/api/v1/search_users").then((res) =>
        res.json()
      ),
  });

  const [query, setQuery] = useState("");
  const filtered = users.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className="min-h-[calc(100vh-var(--spacing)*17)] bg-cover bg-center flex items-center"
    >
      <div className="grid grid-cols-6 px-4 gap-y-4 pb-48">
        <div className="text-4xl col-span-6">Get Connected.</div>
        <div className="text-2xl col-span-4">
          23% of students are on CC Hive. Check if your friends are here:
        </div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Search by username"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ul>
            {filtered.map((user) => (
              <li key={user.username}>
                {user.first_name} {user.last_name}{" "}
                <span>(@{user.username})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
