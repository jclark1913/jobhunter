import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="text-white flex justify-center">
      <div className="flex flex-col">
        <h1 className="font-6xl font-bold">JobHunter</h1>
        <h1 className="text-4xl font-bold  border p-12 rounded-lg border-gray-500 w-full flex flex-row mb-">
          <p>Find your next job in </p>
          <div className="w-2"></div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-600">
            software
          </p>
        </h1>
        <div className="flex flex-row gap-4 items-stretch justify-items-stretch justify-between mt-4">
          <p className="text-lg border rounded-lg p-12  border-gray-500">
            Browse <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-600 font-extrabold">companies</p>
          </p>
          <p className="text-lg border rounded-lg p-12  border-gray-500">
            Find <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-600 font-extrabold">jobs</p>
          </p>
          <p className="text-lg border rounded-lg p-12  border-gray-500">
            Jumpstart your <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-600 font-extrabold">career</p>
          </p>
        </div>
        <small className="text-center mt-4">
          Ready to unlock your career potential?{" "}
          <Link to="/login">Sign in </Link> to your account or{" "}
          <Link to="/signup">register</Link> to get started.
        </small>
      </div>
    </div>
  );
};

export default Homepage;
