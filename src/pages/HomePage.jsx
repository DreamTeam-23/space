
/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: home page for Space client
 */

import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuthStore from "../store/AuthStore";

export default function HomePage() {

    const { user } = useAuthStore((state) => state);

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 flex flex-col items-center">
                <h1 className="text-teal-400 text-3xl text-center py-10">Space</h1>
                <p className="text-teal-400 text-xl text-center">"A space to breathe"</p>
                {!user && <NavLink to="/users/login" className="text-xl text-center my-5 py-5 px-5 rounded-xl bg-gradient-to-r from-teal-900 to-teal-500 text-white">Login</NavLink>}
            </main>
            <Footer />
        </div>
    )
}