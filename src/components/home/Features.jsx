import { Link } from "react-router-dom";
import Container from "../shared/Container";

function Feature({ title, desc, to, bgUrl = "" }) {
  return (
    <div
      className="relative sm:grayscale hover:grayscale-0 col-span-6 w-[100%] 
                  aspect-2/1 flex flex-col justify-end  p-3 rounded-2xl 
                  bg-center bg-cover mb-12 lg:mb-0 lg:aspect-3/2 lg:col-span-3
                  bg-gray-500"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <Link to={to} className="z-10">
        <h3 className="hover:text-primary text-2xl font-special z-2">
          {title}
        </h3>
      </Link>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
const Features = () => {
  return (
    <Container className="pt-16">
      <div className="grid grid-cols-6 gap-4 lg:gap-16">
        <h1 className="text-3xl col-span-6 font-special">
          What Awaits you at CC Hive:
        </h1>
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
    </Container>
  );
};

export default Features;
