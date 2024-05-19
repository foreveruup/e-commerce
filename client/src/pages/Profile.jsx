import React, { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginState) {
      getUserData();
    } else {
      toast.error("You must be logged in to access this page");
      navigate("/");
    }
  }, [loginState, navigate]);

  const getUserData = async () => {
    try {
      const response = await axios(`http://localhost:3000/users/${localStorage.getItem("id")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = response.data;
      setUserData({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      toast.error("Error fetching user data");
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${localStorage.getItem("id")}`, {
        ...userData,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  return (
      <>
        <SectionTitle title="User Profile" path="Home | User Profile" />
        <form className="max-w-7xl mx-auto text-center px-10" onSubmit={updateProfile}>
          <ProfileForm userData={userData} setUserData={setUserData} />
          <button
              className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10"
              type="submit"
          >
            Update Profile
          </button>
        </form>
      </>
  );
};

const ProfileForm = ({ userData, setUserData }) => {
  return (
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4">
        <ProfileInput label="Your Name" value={userData.name} setValue={(value) => setUserData({ ...userData, name: value })} />
        <ProfileInput label="Your Lastname" value={userData.lastname} setValue={(value) => setUserData({ ...userData, lastname: value })} />
        <ProfileInput label="Your Email" value={userData.email} setValue={(value) => setUserData({ ...userData, email: value })} />
        <ProfileInput label="Your Password" value={userData.password} setValue={(value) => setUserData({ ...userData, password: value })} />
      </div>
  );
};

const ProfileInput = ({ label, value, setValue }) => {
  return (
      <div className="form-control w-full lg:max-w-xs">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
            type={label === "Your Password" ? "password" : "text"}
            placeholder="Type here"
            className="input input-bordered w-full lg:max-w-xs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
      </div>
  );
};

export default Profile;
