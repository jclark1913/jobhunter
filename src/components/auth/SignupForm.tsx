import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import { CgDetailsLess } from "react-icons/cg";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export interface SignupFormProps {
  signup: (formData: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
  }) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ signup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<any>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signup(formData);
      navigate("/companies");
    } catch (err) {
      setFormErrors(err);
    }
  };

  const handleChange = (e: any) => {
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
        <h1 className="text-3xl font-extrabold pt-5">Sign Up</h1>
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
          <div className="flex flex-row align-middle items-center gap-4">
            <BsPersonBoundingBox className="text-3xl" />
            <input
              id="firstName"
              placeholder="First name (Optional)"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2"
            />
          </div>
          <div className="flex flex-row align-middle items-center gap-4">
            <CgDetailsLess className="text-3xl" />
            <input
              id="lastName"
              placeholder="Last name (Optional)"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2"
            />
          </div>
          <div className="flex flex-row align-middle items-center gap-4">
            <MdOutlineEmail className="text-3xl" />
            <input
              id="email"
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2"
            />
          </div>
          <div className="flex justify-center gap-10">
            <button
              type="submit"
              className="border border-normalborder rounded-md px-5 py-2 bg-inherit hover:bg-gradient-to-r from-gradientstart to-[#0a65ff] hover:text-white"
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm text-center pb-3">
            <a
              className="underline underline-offset-4 text-gray-500 hover:text-white"
              href="/login"
            >
              Already have an account? Click here to sign in.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
