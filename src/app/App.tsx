"use client";
import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
import NavBar from "./components/NavBar";
import useLocalStorage from "./hooks/useLocalStorage";
import { JobHunterAPI } from "./api/api";

export const TOKEN_STORAGE_KEY = "token";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);

  useEffect(
    function fetchUserOnTokenChange() {
      async function fetchCurrentUser() {
        if (token) {
          try {
            let { username } = decode(token);
            JobHunterAPI.token = token;
            let currentUser = await JobHunterAPI.getUser(username);

            setCurrentUser(currentUser);
          } catch (err) {
            console.error(
              "App fetchUserOnTokenChange: problem fetching user",
              err
            );
            setCurrentUser(null);
          }
        }
      }
      fetchCurrentUser();
    },
    [token]
  );

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default App;
