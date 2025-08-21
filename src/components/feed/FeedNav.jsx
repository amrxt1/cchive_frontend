import React from "react";
import { Link } from "react-router-dom";

const navButtons = [
  { name: "Marketplace", to: "/marketplace" },
  { name: "Chat", to: "/study_groups" },
  { name: "Reviews", to: "/reviews" },
  { name: "Tutoring", to: "/tutoring" },
];

function FeedNavButton({ button }) {
  return (
    <Link
      to={button.to}
      className="bg-primary text-surface flex items-center justify-center rounded-md py-2 text-lg font-bold"
    >
      {button.name}
    </Link>
  );
}

const FeedNav = () => {
  return (
    <div className="mt-2 grid grid-cols-2 gap-2">
      {navButtons.map((btn, i) => {
        return <FeedNavButton button={btn} key={i} />;
      })}
    </div>
  );
};

export default FeedNav;
