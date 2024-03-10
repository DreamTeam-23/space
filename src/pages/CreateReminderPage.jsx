
import { NavLink, useNavigate } from "react-router-dom"
import useAuthStore from "../store/AuthStore"
import DOMAIN from "../services/endpoint";
import axios from "axios";
import Header from "../components/Header";

export default function CreateReminderPage() {

    const { user } = useAuthStore((state) => state);
    const navigate = useNavigate();

    async function handleReminderSubmit(e) {
        e.preventDefault()
        const userId = user.userId;
        const category = e.target.category.value;
        const title = e.target.title.value;
        const newReminder = { userId, category, title }
        const res = await axios.post(`${DOMAIN}/api/reminders`, newReminder)
        if (res?.data.success) {
            navigate(`/space/dashboard/${user.userId}`)
        }
    }

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto opacity-75 login-box">
                <form onSubmit={handleReminderSubmit} className="py-2">
                    <div className="user-box py-10">
                        <select name="category" className="rounded border border-teal-300 bg-slate-800">
                            <option value="Health">Health</option>
                            <option value="Study/Career">Study/Career</option>
                            <option value="Finance">Finance</option>
                        </select>
                        <input className="hidden" />
                        <label>Category</label>
                    </div>
                    <div className="user-box">
                        <input name="title" />
                        <label>Title</label>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </main>
        </div>
    )
}