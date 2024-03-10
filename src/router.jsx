
import { Route, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard, { reminderLoader } from "./pages/Dashboard";
import CreateReminderPage from "./pages/CreateReminderPage";
import ProfilePage, { userLoader } from "./pages/ProfilePage";
import TimerPage from "./pages/TimerPage";

export function Router() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/space" element={<HomePage />} />
                <Route path="/space/users/login" element={<LoginPage />} />
                <Route path="/space/users/signup" element={<SignupPage />} />
                <Route path="/space/about" element={<About />} />
                <Route path="/space/contact" element={<Contact />} />
                <Route path="/space/dashboard/:userId" element={<Dashboard />} loader={reminderLoader}/>
                <Route path="/space/reminders/create" element={<CreateReminderPage />} />
                <Route path="/space/user/profile/:userId" element={<ProfilePage />} loader={userLoader}/>
                <Route path="/space/timer" element={<TimerPage />} />
                <Route path="/*" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/space" />} />
            </Route>
        )
    )
    return router;
}
