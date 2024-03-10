
import DOMAIN from "../services/endpoint";
import axios from "axios"
import useAuthStore from "../store/AuthStore";
import { useLoaderData, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

export default function ProfilePage() {

    const { user } = useAuthStore((state) => state);
    const [editMode, setEditMode] = useState(false)
    const [message, setMessage] = useState("");
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data)

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto opacity-75 login-box">
                <h2 className="text-2xl text-teal-600 font-medium text-center">Your Profile</h2>
                <p className="text-center pb-7">Username: {user.username}</p>
                <h2 className="text-2xl text-teal-600 font-medium text-center">Your Badges</h2>
                <p className="text-center pb-7">{user.badges}</p>
                <h2 className="py-10 text-2xl text-teal-600 font-medium text-center">Your Completed Goals</h2>
                {data.map((goal)=>goal.completed?<div>{goal.title} on {goal.createDate}</div>:"")}
            </main>
        </div>
    )
}

export async function userLoader({ params }) {
    const res = await axios.get(`${DOMAIN}/api/reminders/${params.userId}`)
    return res.data
}