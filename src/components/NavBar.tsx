import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./auth/UserContext";
import { NavLink } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../ThemeContext";

// flex flex-row justify-between

interface NavBarProps {
  logout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ logout }) => {
  const { currentUser } = useContext(UserContext);
  const { theme, toggleTheme } = useTheme();

  const loggedInNavBar = () => {
    return (
      <nav className="flex flex-row gap-4">
        <NavLink to="/companies">Companies</NavLink>
        <p>Jobs</p>
        <p>Edit Profile</p>
        <Link onClick={logout} to="/">
          Logout {currentUser.firstName || currentUser.username}
        </Link>
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
    <nav className="border-b border-opacity-50 border-gray-500 text-primarytext">
      <div className="flex container lg:py-4 px-4 flex-wrap items-center justify-between mx-auto">
        <Link
          className="text-2xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-gradientstart to-gradientend"
          to="/"
        >
          JobHunter
        </Link>
        <div className="flex flex-row gap-4">
          {currentUser ? loggedInNavBar() : loggedOutNavBar()}
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
