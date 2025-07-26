import { Link } from "react-router-dom";
import Container from "../shared/Container";
const JoinUs = () => {
  return (
    <Container className="my-32 relative" noPadding>
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-100 via-yellow-100 to-purple-100" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none -z-10 animate-spin-slow" />
      <div
        className="p-4 py-16 md:p-16 text-center font-special 
                      border-primary flex justify-center
                      bg-none shadow-md hover:shadow-lg"
      >
        <div
          className="pb-8 w-full md:w-[50%] lg:w-[40%] xl:w-[33%] flex flex-col gap-12
                     border-2 p-8 rounded-lg bg-surface/44 
                     backdrop-blur-2xl shadow-lg"
        >
          <h1 className="text-4xl font-bold text-primary">Join the Fun</h1>
          <p className=" text-lg lg:text-2xl text-left font-display">
            Since you've scrolled thus far, we would recommend joining and
            exploring. Networking, Marketplace, Collaboration, and much more...
            all at <span className="text-primary">CC Hive</span>! and the fun
            part?{" "}
            <span className="text-primary">
              It's exclusive to only the students!
            </span>
          </p>
          <Link to={"/register"}>
            <button
              className=" bg-accent py-2 rounded border-2 border-accent text-background
                            text-lg font-bold
                            hover:bg-background hover:text-accent w-full
                            transform transition hover:scale-107  "
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
