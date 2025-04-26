import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="mx-4 my-8 p-3 font-special flex flex-col gap-3 rounded-2xl bg-text text-background lg:gap-8 lg:py-32 lg:px-64 lg:mx-32">
      <h1 className="text-3xl ">Join the Fun</h1>
      <div className=" text-2xl">
        Since you've scrolled thus far, we would recommend joining and exploring
        what you've just read about. Networking, Marketplace, Collaboration, and
        much more... all at CC Hive! and the fun part? <br /> It's exclusive to
        only the students!
      </div>
      <div className="flex">
        <Link to={"/register"} className="flex-1 ">
          <button className=" bg-accent px-3 py-1 rounded hover:bg-background hover:text-accent w-[100%]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
