import React, { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [id, setId] = useState(localStorage.getItem("id"));
  const [userData, setUserData] = useState({});
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await axios(`http://localhost:3000/users/${id}`);
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

  useEffect(() => {
    if (loginState) {
      getUserData();
    } else {
      toast.error("You must be logged in to access this page");
      navigate("/");
    }
  }, [loginState, navigate]);

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, {
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
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4">
            <div className="form-control w-full lg:max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full lg:max-w-xs"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
            </div>
            <div className="form-control w-full lg:max-w-xs">
              <label className="label">
                <span className="label-text">Your Lastname</span>
              </label>
              <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full lg:max-w-xs"
                  value={userData.lastname}
                  onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
              />
            </div>
            <div className="form-control w-full lg:max-w-xs">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full lg:max-w-xs"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div className="form-control w-full lg:max-w-xs">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full lg:max-w-xs"
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </div>
          </div>
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

export default Profile;
