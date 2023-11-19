import React from 'react';
import { DiGithubAlt } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { GrAppleAppStore } from "react-icons/gr";
import SideBarIcon from "@/app/components/UI/SideBarIcon";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<DiGithubAlt size="28"/>}/>
            <SideBarIcon icon={<DiApple size="28"/>}/>
            <SideBarIcon icon={<DiLinux size="28"/>}/>
            <SideBarIcon icon={<GrAppleAppStore size="28"/>}/>




        </div>
    );
};

export default SideBar;