import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const router = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e :any) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // after succcessful signup, redirect to login page
    router("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 p-4">
      {/* Card component for a cleaner, more modern look */}
      <div className="flex bg-white w-2/3 h-4/5 rounded-[50px] shadow-2xl">
        {/* Left Section */}
        <div className="flex-[6]">
          <div className="w-full h-full p-10">
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <div className="w-3/4 mt-5">
              <h2 className="text-2xl font-bold">Sign Up</h2>
              <form onSubmit={handleSubmit} className="flex flex-col mt-5">
                
                {/* Email */}
                <label htmlFor="email" className="text-gray-500 mt-3 ">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Enter Email"
                  className="bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password */}
                <label htmlFor="password" className="text-gray-500 mt-3 ">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Confirm Password */}
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-500 mt-3 "
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="bg-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold rounded-lg p-2 mt-5 hover:bg-blue-600"
                >
                  Sign Up
                </button>

                {/* Login Link */}
                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-500">
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-[4] rounded-r-[50px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="loginPage.png"
            alt="Login Page Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
