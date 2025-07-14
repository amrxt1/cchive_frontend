import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "/icon.svg";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav
      className="bg-surface sticky w-full top-0 z-50 flex justify-between items-center 
                    px-4 py-3 h-16 border-b-3 border-primary "
    >
      <Link to="/home">
        <div className="flex w-12 items-center">
          <img src={logo} alt="CCHive logo" />
        </div>
      </Link>
      <div className="hidden sm:flex sm:gap-4">
        {user ? (
          <>
            <Link to="/feed">Feed</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/study_groups">Study Groups</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/tutoring">Tutor</Link>
            <Link to="/tutoring/request">Get Tutored</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
