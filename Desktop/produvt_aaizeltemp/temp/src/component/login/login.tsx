import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login Data Submitted:", formData);
        // Redirect to navigate page 
        navigate("/navigation");
    };

    return (
        // Use flex for centering and min-h-screen for full height on all devices
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 p-4">
            {/* Card component for a cleaner, more modern look */}
            <div className="flex bg-white w-2/3 h-4/5 rounded-[50px] shadow-2xl">
            {/* Left Section */}
            <div className="flex-[6]">
                {/* Login */}
                <div className="w-full h-full p-10">
                    <h1 className="text-3xl font-bold">Welcome Back!</h1>
                    <div className="w-3/4  mt-10">
                        <h2 className="text-2xl  font-bold">Login</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col mt-7">
                            
                            <label 
                                htmlFor="email" 
                                className="text-gray-500 "
                            >
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

                            <label 
                                htmlFor="password" 
                                className="text-gray-500 mt-3"
                            >
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

                            <button 
                                type="submit" 
                                className="bg-blue-500 text-white font-bold rounded-lg p-2 mt-5 hover:bg-blue-600"
                            >
                                Login
                            </button>

                            <p className="text-center mt-4">
                                Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
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

export default Login;

