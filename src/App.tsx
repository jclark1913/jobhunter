import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import NavBar from "./components/NavBar";
import useLocalStorage from "./hooks/useLocalStorage";
import { JobHunterAPI } from "./api/api";
import UserContext from "./auth/UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({
    data: null,
    infoLoaded: false,
  });
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);

  useEffect(
    function fetchUserOnTokenChange() {
      async function fetchCurrentUser() {
        if (token) {
          try {
            const decoded = jwtDecode<DecodedToken>(token);
            const username = decoded.username;
            JobHunterAPI.token = token;
            let currentUser = await JobHunterAPI.getUser(username);

            setCurrentUser({
              infoLoaded: true,
              data: currentUser,
            });
          } catch (err) {
            console.error(
              "App fetchUserOnTokenChange: problem fetching user",
              err
            );
            setCurrentUser({
              infoLoaded: true,
              data: null,
            });
          }
        }
      }
      fetchCurrentUser();
    },
    [token]
  );

  // Logging in and out
  /** Handles log out */
  const logout = () => {
    setCurrentUser({
      infoLoaded: false,
      data: null,
    });
    setToken(null);
  };

  /** Handles log in */
  const login = async (loginData: LoginData) => {
    let token = await JobHunterAPI.loginUser(loginData);
    setToken(token);
  };

  const signup = async (signupData: SignUpData) => {
    let token = await JobHunterAPI.registerUser(signupData);
    setToken(token);
  };

  if (!currentUser.infoLoaded) return <div>Loading...</div>;

  return (
    <UserContext.Provider
      value={{
        currentUser: currentUser.data,
        setCurrentUser,
      }}
    >
      <div>
        <NavBar logout={logout} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
