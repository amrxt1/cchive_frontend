import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav >
      <Link to="/home" >
        <img src={logo} alt="CCHive logo" />
        <span >CCHive</span>
      </Link>
      <div >
        {user ? (
          <>
            <span >
              Welcome, <span >{user.first_name + " "+user.last_name}</span>
            </span>
            <Link to="/feed" >Feed</Link>
            <Link to="/marketplace" >Marketplace</Link>
            <Link to="/study_groups" >Study Groups</Link>
            <Link to="/courses" >Courses</Link>
            <Link to="/instructors" >Instructors</Link>
            <Link to="/tutoring" >Tutor</Link>
            <Link to="/tutoring/request" >Get Tutored</Link>
            <button
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" >Login</Link>
            <Link
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
