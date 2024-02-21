import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import { NavLink } from "react-router-dom";

// flex flex-row justify-between

interface NavBarProps {
  logout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const loggedInNavBar = () => {
    return (
      <nav className="flex flex-row gap-4">
        <p>Welcome, {currentUser.data}</p>
        <button onClick={logout}>Logout</button>
      </nav>
    );
  };

  const loggedOutNavBar = () => {
    return (
      <nav className="flex flex-row gap-4">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav>
    );
  };
  return (
    <nav className="border-b border-opacity-50 border-gray-500 bg-[#23272F] text-slate-50">
      <div className="flex container lg:py-4 px-4 flex-wrap items-center justify-between mx-auto">
        <Link className="text-2xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-slate-400 to-blue-600" to="/">
          JobHunter
        </Link>
        {currentUser ? loggedInNavBar() : loggedOutNavBar()}
      </div>
    </nav>
  );
};

export default NavBar;
