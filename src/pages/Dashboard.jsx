
import { NavLink } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header"

export default function Dashboard() {

    const [expandedForm, setExpandedForm] = useState(false)

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <main className="flex-1 mx-auto opacity-75 login-box">
                <div className="flex flex-col bg-gray-900 py-10 px-10 border border-gray-500 rounded-2xl">
                    <h2 className="py-10 text-2xl text-teal-600 font-medium text-center">Dashboard</h2>
                    <div className="py-2 my-2 rounded-2xl text-white bg-teal-900">
                        <div className="pl-2">Study</div>
                        <div className="pl-2 bg-gray-500 flex">
                            <div className="">Intense</div>
                            <div className="px-1">S</div>
                            <div className="px-1">M</div>
                            <div className="px-1">T</div>
                            <div className="px-1">W</div>
                            <div className="px-1">T</div>
                            <div className="px-1">F</div>
                            <div className="px-1">S</div>
                            <div className="px-1">12 streaks</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="pl-2">2 badges</div>
                            <div className="pr-2">8 days till next badge</div>
                        </div>
                    </div>
                    <div className="py-2 my-2 rounded-2xl text-white bg-teal-900">
                        <div className="pl-2">Study</div>
                        <div className="pl-2 bg-gray-500 flex">
                            <div className="">Intense</div>
                            <div className="px-1">S</div>
                            <div className="px-1">M</div>
                            <div className="px-1">T</div>
                            <div className="px-1">W</div>
                            <div className="px-1">T</div>
                            <div className="px-1">F</div>
                            <div className="px-1">S</div>
                            <div className="px-1">12 streaks</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="pl-2">2 badges</div>
                            <div className="pr-2">8 days till next badge</div>
                        </div>
                    </div>
                    <div className="py-2 my-2 rounded-2xl text-white bg-teal-900">
                        <div className="pl-2">Study</div>
                        <div className="pl-2 bg-gray-500 flex">
                            <div className="">Intense</div>
                            <div className="px-1">S</div>
                            <div className="px-1">M</div>
                            <div className="px-1">T</div>
                            <div className="px-1">W</div>
                            <div className="px-1">T</div>
                            <div className="px-1">F</div>
                            <div className="px-1">S</div>
                            <div className="px-1">12 streaks</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="pl-2">2 badges</div>
                            <div className="pr-2">8 days till next badge</div>
                        </div>
                    </div>
                    {expandedForm && <form className="py-2">
                        <div className="user-box">
                        <input />
                        <label>Category</label>
                        </div>
                        <button type="submit">Create</button>
                        <button onClick={() => setExpandedForm(false)}>Cancel</button>
                    </form>}
                    <button onClick={() => setExpandedForm(true)} className="py-2 rounded-xl my-5 py-2 px-2 bg-slate-700">Add Goals</button>
                </div>
            </main>
        </div>
    )
}