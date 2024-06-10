
import {  FaHome, FaUser } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { MdOutlineApproval } from "react-icons/md";

import { NavLink } from "react-router-dom";
const AdminButton = () => {
    return (
        <div>
                                       <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-3" to="admindashboard">
                                <FaHome></FaHome>
                                Admin Dashboard</NavLink>
                        </li>
                        <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-3" to="/dashboard/manage">
                                <FaUser></FaUser>
                                Manage Users</NavLink>
                        </li>
                        <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-3" to="/dashboard/approvedPremium">
                            <RiUserStarFill />
                                Approved Premium</NavLink>
                        </li>
                        <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-2" to="/dashboard/approvedContactRequest">
                            <MdOutlineApproval />
                                Approved Contact Request</NavLink>
                        </li>

        </div>
    );
};

export default AdminButton;