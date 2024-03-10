import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import useAuthStore from "../store/AuthStore";

export default function Header() {
    const { logoutService, user } = useAuthStore((state) => state);
    const [expandedMenu, setExpandedMenu] = useState(false);

    // Function to toggle the expanded menu state
    const toggleMenu = () => setExpandedMenu(!expandedMenu);

    // Close the menu when the window is resized to a wider view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setExpandedMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-black to-teal-900 text-white">
            <div className="flex justify-between items-center p-4">
                <NavLink to="/space" className="text-lg font-bold">Space</NavLink>
                <div onClick={toggleMenu} className="text-3xl cursor-pointer z-50">
                    {expandedMenu ? <IoCloseSharp /> : <IoMenuSharp />}
                </div>
            </div>
            {expandedMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-start pt-20 text-xl">
                    <NavLink to="/space/" className="py-2" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/space/about" className="py-2" onClick={toggleMenu}>About</NavLink>
                    {!user && <NavLink to="/space/contact" className="py-2" onClick={toggleMenu}>Contact</NavLink>}
                    {user && <NavLink to={`/space/dashboard?userId=${user.userId}`} className="py-2" onClick={toggleMenu}>Dashboard</NavLink>}
                    {user && <NavLink to={`/space/user/profile/${user.userId}`}><span className="py-2">{user.username}</span></NavLink>}
                    {user && <NavLink to="/space/" onClick={() => { logoutService(); toggleMenu(); }} className="py-2">Logout</NavLink>}
                </div>
            )}
        </header>
    );
}
