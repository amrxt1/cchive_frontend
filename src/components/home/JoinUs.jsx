import { Link } from "react-router-dom";
import Container from "../shared/Container";
const JoinUs = () => {
  return (
    <Container className="pt-16">
      <div
        className="p-16 text-center font-special rounded-2xl
                      border-2 border-primary flex justify-center
                      bg-surface shadow-md hover:shadow-lg"
      >
        <div className="pb-8 w-[50%] flex flex-col gap-12">
          <h1 className="text-4xl font-bold text-primary">Join the Fun</h1>
          <div className=" text-2xl text-left font-display">
            Since you've scrolled thus far, we would recommend joining and
            exploring. <br /> Networking, Marketplace, Collaboration, and much
            more... all at{" "}
            <span className="text-primary font-semibold">CC Hive</span>
            ! and the fun part? <br /> It's exclusive to only the students!
          </div>
          <Link to={"/register"}>
            <button
              className=" bg-accent px-3 py-1 rounded border-2 border-accent text-background
                            hover:bg-background hover:text-accent w-full
                            transform transition hover:scale-107 "
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default JoinUs;
