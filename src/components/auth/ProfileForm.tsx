import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import { JobHunterAPI } from "../../api/api";
import LoadingModal from "../LoadingModal";
import { VscAccount } from "react-icons/vsc";
import { CgDetailsLess } from "react-icons/cg";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const ProfileForm: React.FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  });
  // const [formErrors, setFormErrors] = useState<any>([]);

  const [saveConfirmed, setSaveConfirmed] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    let username = formData.username;
    let updatedUser = currentUser;
    setSaveConfirmed(false);

    try {
      updatedUser = await JobHunterAPI.editUser(username, profileData);
    } catch (errors) {
      // setFormErrors(errors);
      return;
    }

    setFormData((data) => ({ ...data }));
    // setFormErrors([]);
    setSaveConfirmed(true);

    setCurrentUser((currentUser: any) => ({
      ...currentUser,
      data: updatedUser,
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
    // setFormErrors([]);
  };

  if (!saveConfirmed) return <LoadingModal />;

  return (
    <div className="flex flex-col align-middle justify-center items-center text-xl">
      <div className="flex flex-col text-left justify-center align-middle items-center rounded-md border border-normalborder pb-6 w-1/2 gap-3 bg-gradient-to-b from-white/5 to-sitebackground shadow-l">
        <h1 className="text-3xl font-extrabold pt-5 text-primarytext">
          Edit Profile
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-row align-middle items-center gap-4">
            <VscAccount className="text-3xl text-primarytext" />
            <input
              type="text"
              placeholder="username"
              required
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2 text-secondarytext"
            />
          </div>
          <div className="flex flex-row align-middle items-center gap-4">
            <BsPersonBoundingBox className="text-3xl text-primarytext" />
            <input
              type="text"
              placeholder="first name"
              required
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2 text-secondarytext"
            />
          </div>
          <div className="flex flex-row align-middle items-center gap-4">
            <CgDetailsLess className="text-3xl text-primarytext" />
            <input
              type="text"
              placeholder="last name"
              required
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2 text-secondarytext"
            />
          </div>
          <div className="flex flex-row align-middle items-center gap-4">
            <MdOutlineEmail className="text-3xl text-primarytext" />
            <input
              type="text"
              placeholder="email"
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-normalborder rounded-md p-2 text-secondarytext"
            />
          </div>
          <div className="flex justify-center gap-10">
            <button
              type="submit"
              className="border border-normalborder rounded-md text-secondarytext px-5 py-2 bg-inherit hover:bg-gradient-to-r from-gradientstart to-gradientend"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
