import { Link } from "react-router-dom";
import Container from "../shared/Container";

// features obj(s) to display
const features = [
  {
    title: "Marketplace",
    desc: "Buy and sell books, gear, and more.",
    to: "/marketplace",
    imageUrl: "/home/books.png",
  },
  {
    title: "Study Groups",
    desc: "Chat, share files, stay organized.",
    to: "/study_groups",
    imageUrl: "/home/study-group.png",
  },
  {
    title: "Peer Tutoring",
    desc: "Find and offer tutoring help.",
    to: "/tutoring/request",
    imageUrl: "/home/tutoring.png",
  },
  {
    title: "Reviews",
    desc: "Leave reviews for instructors and courses.",
    to: "/reviews",
    imageUrl: "/home/reviews.png",
  },
];

function Feature({ title, desc, to, right, imageUrl }) {
  return (
    <div className="bg-surface col-span-6 grid grid-cols-2 overflow-clip rounded-md">
      {right && <ImageDiv imageUrl={imageUrl} />}
      <div className="flex h-40 flex-col justify-center gap-2 px-4">
        <Link to={to} className="z-10">
          <h3 className="text-primary font-special z-2 text-2xl">{title}</h3>
        </Link>
        <p className="text-md">{desc}</p>
      </div>
      {!right && <ImageDiv imageUrl={imageUrl} />}
    </div>
  );
}

function ImageDiv({ imageUrl = false }) {
  return imageUrl ? (
    <div className="scale-77 bg-none p-4">
      <img src={imageUrl} alt="" />
    </div>
  ) : (
    <></>
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
            imageUrl={feature.imageUrl}
            right={index % 2 == 1 ? true : false}
          />
        ))}
      </div>
    </Container>
  );
};

export default Features;
