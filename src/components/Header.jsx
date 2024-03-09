
/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: header component for Space client
 */

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import useAuthStore from "../store/AuthStore";

export default function Header() {

    const { logoutService, user } = useAuthStore((state) => state)
    const [expandedMenu, setExpandedMenu] = useState(window.innerWidth > 500 ? true : false);

    function toggleMenu() {
        setExpandedMenu(!expandedMenu)
    }

    return (
        <header className="sticky z-50 top-0 md:flex justify-between bg-gradient-to-r from-black to-teal-900 text-white">
            {expandedMenu && <div className="flex flex-col md:flex-row">
                <NavLink to="/space" className="flex py-2 md:py-4 mx-auto" ><IoHomeSharp size={20} className=" text-center mx-2" /> Home</NavLink>
            </div>}
            {expandedMenu && <div className="flex flex-col md:block md:py-4">
                <NavLink to="/space/about" className="text-center py-2 md:py-4 px-5" >About</NavLink>
                <NavLink to="/space/contact" className="text-center py-2 md:py-4 px-5" >Contact</NavLink>
            </div>}
            {expandedMenu && <div className="flex flex-col md:block md:py-4">
                {!user && <NavLink to="/space/users/login" className="text-center py-2 md:py-4 px-5" >Login</NavLink>}
                {!user && <NavLink to="/space/users/signup" className="text-center py-2 md:py-4 px-5" >Signup</NavLink>}
                {user && <NavLink className="text-center py-2 md:py-4 px-5">{user.username}</NavLink>}
                {user && <NavLink to="/space" onClick={logoutService} className="text-center py-2 md:py-4 px-5">Logout</NavLink>}
            </div>}
            {expandedMenu && <div onClick={toggleMenu} className="text-center py-2 md:py-4 text-2xl md:hidden">&#127828;</div>}
            <div className="flex justify-between md:hidden">
                {!expandedMenu && <NavLink to="/space" className="py-2 px-2 md:hidden"><div className="flex">Space</div></NavLink>}
                {!expandedMenu && <div onClick={toggleMenu} className="text-3xl md:hidden">&#127828;</div>}
            </div>
        </header>
    )
}