import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginData, SignUpData } from "../../App";
import { Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import ProfileForm from "../auth/ProfileForm";

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
        <Route path="/" element={<Homepage />} />
        {!currentUser ? (
          <>
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
          </>
        ) : (
          <>
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/profile" element={<ProfileForm />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutesList;
