import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

interface NavBarProps {
  logout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const loggedInNavBar = () => {
    return (
      <nav>
        <p>Welcome, {currentUser.data}</p>
        <button onClick={logout}>Logout</button>
      </nav>
    );
  };

  const loggedOutNavBar = () => {
    return (
      <nav>
        <button>Login</button>
        <button>Sign Up</button>
      </nav>
    );
  };
  return (
    <div className="flex flex-row justify-between">
      <Link className="text-2xl" to="/">
        Jobly
      </Link>
      {currentUser ? loggedInNavBar() : loggedOutNavBar()}
    </div>
  );
};

export default NavBar;
