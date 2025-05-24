import Container from "../shared/Container";
import { Link } from "react-router-dom";
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
    <Container
      style={{ backgroundImage: "url('src/assets/hero-image.jpg')" }}
      className="relative bg-cover sm:bg-fixed pt-64 py-32"
    >
      <div className="flex items-center">
        <div className="absolute inset-0 backdrop-blur" />
        <div className="grid grid-cols-6 gap-y-4 pb-48 z-2">
          <div className="text-5xl col-span-6 font-special font-bold">
            Get Connected.
          </div>
          <div className="text-2xl col-span-5 font-special">
            23% of students are on CC Hive. Check if your friends are here:
          </div>
          <div className="col-span-5 ">
            <div className="flex gap-4 items-center">
              <input
                className="border-1 border-secondary rounded px-2 w-6/10"
                type="text"
                placeholder="Search by Student ID"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Link
                to={"/register"}
                className="flex-1 text-center bg-accent text-background
                                rounded border-2 border-accent
                                hover:bg-background hover:text-accent
                                transform transition hover:scale-107 group
                                "
              >
                <div className="w-full group group-hover:animate-spin">
                  <img
                    src="/icon.svg"
                    alt="logo"
                    className="w-8 h-8 absolute hidden left-1/9
                   group-hover:animate-spin group-hover:block "
                  />
                  <img
                    src="/icon.svg"
                    alt="logo"
                    className="w-8 h-8 absolute hidden left-2/3
                  group-hover:animate-spin group-hover:block"
                  />
                </div>
                Get Started
              </Link>
            </div>
            <ul className="absolute text-text/77">
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
    </Container>
  );
};

export default HeroSection;
