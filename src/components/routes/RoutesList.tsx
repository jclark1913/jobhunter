import React from "react";
import { Routes, Route } from "react-router-dom";

const RoutesList: React.FC<RoutesListPropx> = ({
  login,
  signup,
  currentUser,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        {currentUser ? (
          <>
            <Route path="/login" />
            <Route path="/signup" />
          </>
        ) : (
          <>
            <Route path="/companies" />
            <Route path="/companies/:handle" />
            <Route path="/jobs" />
            <Route path="/profile" />
          </>
        )}
      </Routes>
    </div>
  );
};
