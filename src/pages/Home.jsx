import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";
import marketImage from "../assets/marketplace.jpg";
import tutorImage from "../assets/volunteer.jpg";
import reviewImage from "../assets/review.jpg";
import studyGroup from "../assets/study-group.jpg";

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
      className="relative min-h-[calc(100vh-4rem)] bg-fixed bg-cover bg-center flex items-center lg:p-32 "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/81 z-1" />
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
          <ul className="absolute hidden">
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

function Feature({ title, desc, to, bgUrl }) {
  return (
    <div
      className="col-span-6 w-[100%] aspect-2/1 flex flex-col justify-end  p-3 rounded-2xl bg-center bg-cover mb-12"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <Link to={to}>
        <h3 className="hover:text-primary text-2xl">{title}</h3>
      </Link>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
function Features() {
  return (
    <div className="px-4 grid grid-cols-6 gap-4 pt-16">
      <h1 className="text-3xl col-span-6">What Awaits you at CC Hive:</h1>
      <Feature
        title="Marketplace"
        desc="Buy and sell books, gear, and more."
        to="/marketplace"
        bgUrl={marketImage}
      />
      <Feature
        title="Study Groups"
        desc="Chat, share files, stay organized."
        to="/study_groups"
        bgUrl={studyGroup}
      />
      <Feature
        title="Peer Tutoring"
        desc="Find and offer tutoring help."
        to="/tutoring/request"
        bgUrl={tutorImage}
      />
      <Feature
        title="Course Reviews"
        desc="Leave reviews for instructors and courses."
        to="/courses"
        bgUrl={reviewImage}
      />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="px-4">
      <h1>Testimonials</h1>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="mx-4 my-8 p-3 border-2 flex flex-col gap-3 rounded-2xl bg-accent">
      <h1 className="text-2xl">Join the Fun</h1>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor numquam
        laudantium aut reprehenderit ipsa iusto, dicta non illum dolore tempora
        doloremque temporibus dolores ipsam, sapiente error, aperiam atque
        veniam vitae!
      </div>
      <Link to={"/register"}>Register</Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
      <JoinUs />
    </>
  );
}
