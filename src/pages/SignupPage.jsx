
/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: signup page for Space client
 */

import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DOMAIN from "../services/endpoint";
import Header from "../components/Header";

export default function SignupPage() {

    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const newUser = { username, password, email };
        const res = await axios.post(`${DOMAIN}/api/users/`, newUser);
        if (res?.data.success) {
            setMessage(res?.data.message);
            navigate("/space/users/login");
        }
        else {
            setMessage(res?.data.message);
        }
    }

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto opacity-75 login-box">
                <form onSubmit={handleSubmit} className="flex flex-col bg-gray-900 py-10 px-10 border border-gray-500 rounded-2xl">
                    <h2 className="py-10 text-2xl text-teal-600 font-medium text-center">Sign Up</h2>
                    <div className="user-box flex flex-col">
                        <input type="text" name="username" id="username" required className="px-2 border rounded-lg border-teal-600 py-1 text-black" />
                        <label>Username</label>
                    </div>
                    <div className="user-box flex flex-col my-2">
                        <input type="password" name="password" id="password" required className="px-2 border rounded-lg border-teal-600 py-1 text-black" />
                        <label>Password</label>
                    </div>
                    <div className="user-box flex flex-col my-2">
                        <input type="email" name="email" id="email" required className="px-2 border rounded-lg border-teal-600 py-1 text-black" />
                        <label>Email</label>
                    </div>
                    <button className="rounded-xl my-5 py-2 px-2 bg-gradient-to-r from-cyan-900 to-teal-900 text-white">Sign Up</button>
                    <NavLink to="/space/users/login" className="text-center text-teal-600 hover:text-teal-200 transition-all ease duration-3000">Login</NavLink>
                </form>
                <p className="text-center py-2 text-xl text-teal-300">{message}</p>
            </main>
        </div>
    )
}