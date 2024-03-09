
/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: router jsx for Space client
 */

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

export function Router() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/space" element={<HomePage />} />
                <Route path="/space/users/login" element={<LoginPage />} />
                <Route path="/space/users/signup" element={<SignupPage />} />
                <Route path="/space/about" element={<About />} />
                <Route path="/space/contact" element={<Contact />} />
                <Route path="/space/dashboard" element={<Dashboard />} />
            </Route>
        )
    )
    return router;
}

