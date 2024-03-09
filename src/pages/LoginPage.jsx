
/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: login page for Space client
 */

import { NavLink, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";

export default function LoginPage() {

    const navigate = useNavigate();
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!!user) {
            navigate(`/space`);
        }
    }, [user])

    function onLogin(e) {
        e.preventDefault();
        let username = e.target.username?.value;
        let password = e.target.password?.value;
        if (!username || !password) return;
        loginService(username, password);
        if (!user) {
            setMessage("Invalid login credentials");
        }
    }

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto opacity-75 login-box">
                <form onSubmit={onLogin} className="flex flex-col bg-gray-900 py-10 px-10 border border-gray-500 rounded-2xl">
                    <h2 className="py-10 text-2xl text-teal-600 font-medium text-center">Login</h2>
                    <div className="user-box flex flex-col">
                        <input type="text" name="username" id="username" required className="text-black px-2 border rounded-lg border-teal-600 py-1" />
                        <label>Username</label>
                    </div>
                    <div className="user-box flex flex-col my-2">
                        <input type="password" name="password" id="password" required className="text-black px-2 border rounded-lg border-teal-600 py-1" />
                        <label>Password</label>
                    </div>
                    <button className="rounded-xl my-5 py-2 px-2 bg-gradient-to-r from-cyan-900 to-teal-900 text-white">Login</button>
                    <NavLink to="/space/users/signup" className="text-center text-teal-600 hover:text-teal-200 transition-all ease duration-3000">Sign Up</NavLink>
                </form>
                {authLoading ? <h2>Loading...</h2> : null}
                <p className="text-center py-2 text-xl text-teal-300">{message}</p>
            </main>
        </div>
    )
}