import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginData, SignUpData } from "../../App";
import { Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import LoginForm from "../../auth/LoginForm";
import SignupForm from "../../auth/SignupForm";

interface RoutesListProps {
  login: (loginData: LoginData) => Promise<void>;
  signup: (signupData: SignUpData) => Promise<void>;
  currentUser: any;
}

const RoutesList: React.FC<RoutesListProps> = ({
  login,
  signup,
  currentUser,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        {!currentUser ? (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </>
        ) : (
          <>
            <Route path="/companies" />
            <Route path="/companies/:handle" />
            <Route path="/jobs" />
            <Route path="/profile" />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutesList;
