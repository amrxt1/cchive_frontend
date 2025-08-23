import { Link } from "react-router-dom";
import Container from "../shared/Container";
const JoinUs = () => {
  return (
    <Container className="relative my-32" noPadding>
      <div class="bg-primary/17 absolute -top-10 -left-10 h-96 w-96 rounded-full blur-3xl"></div>
      <div class="bg-accent/17 absolute right-10 bottom-0 h-96 w-56 rounded-full blur-3xl"></div>

      <div className="font-special flex justify-center bg-none p-4 py-16 text-center md:p-16">
        <div className="bg-surface/34 flex w-full flex-col gap-12 rounded-lg p-8 pb-8 shadow-lg backdrop-blur-2xl md:w-[50%] lg:w-[40%] xl:w-[33%]">
          <h1 className="text-primary text-4xl font-bold">Join the Fun</h1>
          <p className="font-display lg:text-2xl">
            Since you've scrolled thus far, we would recommend joining and
            exploring. Networking, Marketplace, Collaboration, and much more...
          </p>
          <p className="text-lg">
            All at <span className="text-primary">CC Hive</span>! and the fun
            part?{" "}
            <span className="text-primary">
              It's exclusive to only the students!
            </span>
          </p>
          <Link to={"/register"}>
            <button className="bg-accent border-accent text-surface hover:bg-background hover:text-accent w-full transform rounded border-2 py-2 text-lg font-bold transition hover:scale-107">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default JoinUs;
