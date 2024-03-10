
import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

Reminder.propTypes = {
    user: PropTypes.shape({
        userId: PropTypes.string.isRequired
    }).isRequired,
    reminderId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default function Reminder(props) {

    const navigate = useNavigate()

    async function handleCompleteReminder() {
        const completed = true
        const userId = props.user.userId
        const data = { completed, userId }
        const res = await axios.post(`${DOMAIN}/api/reminders/complete/${props.reminderId}`, data)
        if (res?.data.success) {
            navigate(`/space/dashboard/${props.user.userId}`)
        }
    }

    return (
        <div className="py-2 my-2 rounded-2xl text-white bg-teal-900">
            <div className="pl-2 flex">
                <div className="px-2 font-bold">{props.category}</div>
                <div className="px-1">{props.title}</div>
            </div>
            <div className="flex pl-2">
                <button className="px-2 py-2 mr-2 rounded-2xl my-2 bg-teal-500" onClick={handleCompleteReminder}>Completed</button>
                <div className="px-2 py-2 rounded-2xl my-2 bg-red-600 cursor-pointer hover:bg-red-400 transition-all ease duration-3000" onClick={handleCompleteReminder}>Delete</div>
            </div>
        </div>
    )
}