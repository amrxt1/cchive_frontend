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
    title: "Course Reviews",
    desc: "Leave reviews for instructors and courses.",
    to: "/courses",
  },
];

function Feature({ title, desc, to, bgUrl = "", right }) {
  return (
    <div
      className="bg-surface col-span-6 grid grid-cols-2 overflow-clip rounded-md"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      {right && <ImageDiv />}
      <div className="flex h-40 flex-col justify-center gap-2 px-4">
        <Link to={to} className="z-10">
          <h3 className="hover:text-primary font-special z-2 text-2xl">
            {title}
          </h3>
        </Link>
        <p className="text-md">{desc}</p>
      </div>
      {!right && <ImageDiv />}
    </div>
  );
}

function ImageDiv() {
  return <div className="bg-teal-700 p-2">Image goes here</div>;
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
            right={index % 2 == 1 ? true : false}
          />
        ))}
      </div>
    </Container>
  );
};

export default Features;
