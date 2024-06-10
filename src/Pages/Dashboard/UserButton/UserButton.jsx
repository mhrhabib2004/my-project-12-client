import { FaEdit, FaFileContract } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { SiFavro } from "react-icons/si";
import { NavLink } from "react-router-dom";
const UserButton = () => {
    return (
        <div>
             <li >
                            <NavLink  className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-3" to="/dashboard/editbio">
                            <FaEdit />
                                Edit Biodata</NavLink>
                        </li>
                        <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-3" to="/dashboard/viewbio">
                            <CiViewTable />
                                View Biodata</NavLink>
                        </li>
                        <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-3" to="/dashboard/contactreq">
                            <FaFileContract />
                            My Contact Request</NavLink>
                        </li>
                        <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-2" to="/dashboard/favouritesbio">
                            <SiFavro />
                            Favourites Biodata</NavLink>
                        </li>
                        <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-2" to="/dashboard/gotmarrid">
                            <SiFavro />
                            Got Married Route</NavLink>
                        </li>

        </div>
    );
};

export default UserButton;