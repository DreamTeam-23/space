
import { useLoaderData, useNavigate, NavLink } from "react-router-dom"
import Header from "../components/Header"
import axios from "axios";
import DOMAIN from "../services/endpoint";
import Reminder from "../components/Reminder";
import useAuthStore from "../store/AuthStore";

export default function Dashboard() {

    const data = useLoaderData();
    const navigate = useNavigate();
    const { logoutService, user } = useAuthStore((state) => state)

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto opacity-75 login-box">
                <div className="flex flex-col bg-gray-900 py-10 px-10 border border-gray-500 rounded-2xl">
                    <h2 className="py-10 text-2xl text-teal-600 font-medium text-center">Dashboard</h2>
                    {data.map((reminder) =>
                        reminder.completed ? "" :
                            <Reminder user={user} category={reminder.category} title={reminder.title} reminderId={reminder.reminderId}/>
                    )}
                    <NavLink to="/space/reminders/create" className="py-2 rounded-xl my-5 py-2 px-2 bg-slate-700">Add Goals</NavLink>
                </div>
            </main>
        </div>
    )
}

export async function reminderLoader({ params }) {
    const res = await axios.get(`${DOMAIN}/api/reminders/${params.userId}`)
    return res.data
}