import heroImage from "../../assets/hero-image.jpg";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const HeroSection = () => {
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
      className="relative min-h-[calc(100vh-4rem)] bg-fixed bg-cover bg-center flex items-center lg:p-32 "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 backdrop-blur bg-background/81 z-1" />
      <div className="grid grid-cols-6 px-4 gap-y-4 pb-48 z-2">
        <div className="text-5xl col-span-6 font-special">Get Connected.</div>
        <div className="text-2xl col-span-5 font-special">
          23% of students are on CC Hive. Check if your friends are here:
        </div>
        <div className="col-span-4">
          <input
            className="border-1 border-secondary rounded px-2 w-[77%]"
            type="text"
            placeholder="Search by Student ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ul className="absolute">
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
};

export default HeroSection;
