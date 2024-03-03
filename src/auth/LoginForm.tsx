import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";

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
      <TypeAnimation
        className="text-transparent bg-clip-text bg-gradient-to-r from-gradientstart to-[#0a65ff] text-4xl font-extrabold mb-10"
        sequence={["Let's get started!", 3000]}
        cursor={true}
      />
      <div className="flex flex-col text-left justify-center align-middle items-center rounded-md border border-normalborder w-1/2 gap-3 bg-gradient-to-b from-white/5 to-[#040a24] shadow-l">
        <h1 className="text-3xl font-extrabold pt-5">Log In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-row align-middle items-center gap-4">
            <VscAccount className="text-3xl" />
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
          </div>
          <div className="flex flex-row align-middle items-center gap-4">
            <RiLockPasswordLine className="text-3xl" />
            <input
              id="password"
              placeholder="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2"
            />
          </div>
          <div className="flex justify-center gap-10">
            <button
              type="submit"
              className="border border-normalborder rounded-md px-5 py-2 bg-inherit hover:bg-gradient-to-r from-gradientstart to-[#0a65ff] hover:text-white"
            >
              Log In
            </button>
          </div>
          <p className="text-sm text-center pb-3">
            <a
              className="underline underline-offset-4 text-gray-500 hover:text-white"
              href="/signup"
            >
              Don&apos;t have an account? Click here to create one.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
