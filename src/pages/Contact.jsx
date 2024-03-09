
import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useState } from "react";
import Header from "../components/Header";

export default function Contact() {

    const [notification, setNotification] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [contentInput, setContentInput] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const content = e.target.content.value;
        const newMessage = { email, content };
        const res = await axios.post(`${DOMAIN}/api/user/messages`, newMessage);
        if (res?.data.success) {
            setNotification("Thank you for your message! If a response is required, we will get back to you as soon as possible!");
            setEmailInput("");
            setContentInput("");
        }
    }

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto opacity-75 login-box">
                <form onSubmit={handleSubmit} className="flex flex-col bg-gray-900 py-10 px-5 border border-gray-500 rounded-2xl">
                    <h1 className="pb-5 text-2xl text-teal-600 font-medium text-center">Contact Us</h1>
                    <div className="user-box flex flex-col">
                        <input type="email" name='email' id='email' required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="px-2 w-80 border rounded-lg border-slate-700 py-1 text-black" />
                        <label >Email Address</label>
                    </div>
                    <div className="user-box flex flex-col my-2">
                        <textarea type="text" name='content' id='content' placeholder='Tell us your thoughts!' rows="10" cols="40" className="px-2 border rounded-lg border-slate-700 py-1 text-black" value={contentInput} onChange={(e) => setContentInput(e.target.value)} />
                        <label htmlFor="content">Message</label>
                    </div>
                    <button type="submit" className="rounded-xl my-5 py-2 px-2 bg-slate-700 text-white">Send</button>
                </form>
                {notification}
            </main>
        </div>
    )
}