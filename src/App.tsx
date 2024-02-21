import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import NavBar from "./components/NavBar";
import useLocalStorage from "./hooks/useLocalStorage";
import { JobHunterAPI } from "./api/api";
import UserContext from "./auth/UserContext";
import RoutesList from "./components/routes/RoutesList";
import Footer from "./Footer";

export const TOKEN_STORAGE_KEY = "token";

export interface DecodedToken {
  [key: string]: any;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface CurrentUser {
  data: any;
  infoLoaded: boolean;
}

export interface SignUpData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  const [currentUser, setCurrentUser] = useState({
    data: null,
    infoLoaded: true,
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
      <main className="bg-[#23272F] min-h-screen flex flex-col">
        <NavBar logout={logout} />
        <div className="container mx-auto px-12 p-4 flex flex-col justify-center flex-grow">
          <RoutesList
            login={login}
            signup={signup}
            currentUser={currentUser.data}
          />
        </div>
        <Footer />
      </main>
    </UserContext.Provider>
  );
}

export default App;
