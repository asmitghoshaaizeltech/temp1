import React, { FC } from "react";
import Navbar from "../component/navbar/navbar";

interface ChildernProps{
Component:  React.ComponentType;
}

const AuthLayout: React.FC<ChildernProps> = function ( {Component}) {
    return (
        <div className="flex h-screen max:h-screen min:w-screen max:w-screen">
             {/* <div className="hidden md:block h-screen max:h-screen min:w-screen max:w-screen"> <Sidebar /> </div> */}
            <div className="flex flex-col w-full">
                <div className=" "><Navbar /> </div>
                <div className=""><Component /> </div>
            </div>
        </div>
    )
}
export default AuthLayout;