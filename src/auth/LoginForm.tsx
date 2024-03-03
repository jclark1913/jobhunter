import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface LoginFormProps {
  login: (username: string, password: string) => void;
}

const LoginForm = ({ login }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<any>([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate("/companies");
    } catch (err) {
      setFormErrors(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col align-middle justify-center items-center text-xl">
      <h1 className="text-4xl font-extrabold mb-10">Let's get started!</h1>
      <div className="flex flex-col text-left justify-center align-middle items-center rounded-md border border-normalborder w-1/2 gap-3">
        <h1 className="text-2xl font-extrabold pt-5">Log In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            required
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="bg-transparent border border-normalborder rounded-md p-2"
          />
          <input
            id="password"
            placeholder="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-transparent border border-normalborder rounded-md p-2"
          />
          <div className="flex justify-center gap-10 pb-5">
            <button
              type="submit"
              className="border border-normalborder rounded-md px-5 py-2"
            >
              Submit
            </button>
            <button
              type="button"
              className="border border-normalborder rounded-md px-5 py-2"
              onClick={() => navigate("/signup")}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
