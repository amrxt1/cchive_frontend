import { Link } from "react-router-dom";
import Container from "../shared/Container";

const JoinUs = () => {
  return (
    <Container className="pt-16">
      <div
        className="p-16 text-center font-special rounded-2xl bg-background text-text 
                      border-2 border-accent
                      lg:gap-8 lg:py-16 lg:px-64 "
      >
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-accent">Join the Fun</h1>
          <div className=" text-2xl">
            Since you've scrolled thus far, we would recommend joining and
            exploring. <br /> Networking, Marketplace, Collaboration, and much
            more... all at <span className="text-accent">CC Hive</span>! and the
            fun part? <br /> It's exclusive to only the students!
          </div>
        </div>
        <div className="flex">
          <Link to={"/register"} className="flex-1 ">
            <button className=" bg-accent px-3 py-1 rounded border-2 hover:bg-background hover:text-accent w-full ">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default JoinUs;
