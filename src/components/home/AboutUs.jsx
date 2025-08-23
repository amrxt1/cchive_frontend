import Container from "../shared/Container";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Container>
      <h1 className="font-special col-span-6 text-center text-3xl font-semibold">
        About Us
      </h1>
      <div className="text-text/70 border-surface mt-4 grid gap-y-2 rounded-lg border-2 p-4">
        <p>
          Cchive was built as a project by{" "}
          <span className="text-text italic">
            Team#6 for CS275 in Winter 2025
          </span>
          . Our goal was to create a private, student-only platform that makes
          it easy to collaborate, share resources, and connect with peers on
          campus.
        </p>
        <p>
          From study groups to peer tutoring and a safe marketplace for student
          needs, every feature was designed with{" "}
          <span className="text-text italic">campus life in mind</span>. Built
          by students who understand the challenges of college life, Cchive is
          about making your campus experience more connected and productive.
        </p>
        <p>
          We’re proud to share our work with the community! A project born in a
          classroom, now ready to help students thrive.
        </p>
        <div className="grid grid-cols-2 gap-2 font-bold">
          <Link
            className="bg-primary text-surface w-full rounded-md py-1 text-center"
            to={"/contact"}
          >
            Contact Us
          </Link>
          <Link
            className="bg-accent text-surface w-full rounded-md py-1 text-center"
            to={"/register"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
