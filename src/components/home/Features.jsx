import { Link } from "react-router-dom";
import Container from "../shared/Container";

// features obj(s) to display
const features = [
  {
    title: "Marketplace",
    desc: "Buy and sell books, gear, and more.",
    to: "/marketplace",
  },
  {
    title: "Study Groups",
    desc: "Chat, share files, stay organized.",
    to: "/study_groups",
  },
  {
    title: "Peer Tutoring",
    desc: "Find and offer tutoring help.",
    to: "/tutoring/request",
  },
  {
    title: "Reviews",
    desc: "Leave reviews for instructors and courses.",
    to: "/reviews",
  },
];

function Feature({ title, desc, to }) {
  return (
    <div className="bg-surface sticky top-20 col-span-6 overflow-clip rounded-md">
      <div className="px-4 py-8">
        <Link to={to} className="z-10">
          <h3 className="text-primary font-special z-2 text-2xl font-bold">
            {title}
          </h3>
        </Link>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <Container className="pt-16">
      <div className="grid grid-cols-6 gap-8 lg:gap-16">
        <h1 className="font-special col-span-6 text-3xl font-semibold">
          What Awaits you at CC Hive:
        </h1>
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            desc={feature.desc}
            to={feature.to}
          />
        ))}
      </div>
    </Container>
  );
};

export default Features;
