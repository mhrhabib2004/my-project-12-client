
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaEdit, FaFileContract, FaHome, FaUser } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { MdOutlineApproval } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";
import { SiFavro } from "react-icons/si";




const Dashboard = () => {
    // const [cart] = useCart();
    const { user } = useAuth();

    // TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            {/* <div className="w-64 min-h-screen bg-orange-400 ">
                
            </div> */}
            <aside className="flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto bg-sky-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


                <div className="flex flex-col justify-between flex-1 mt-6">
                    <ul className=" text-md font-semibold">
                        {/* <a
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
            href="#"
          >
            
            <span className="mx-4 font-medium">Dashboard</span>
          </a> */}

                        {
                           isAdmin ? <>
                           <li >
                            <NavLink className="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200 gap-3" to="/dashboard">
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


                           </> : <>
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


                           
                           </>
                        }
                        <hr className="my-6 border-gray-200 dark:border-gray-600" />

                        <a
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                            href="#"
                        >

                            <span className="mx-4 font-medium">Logout</span>
                        </a>
                    </ul>

                    <a href="#" className="flex items-center px-4 -mx-2">
                        <img
                            className="object-cover mx-2 rounded-full h-9 w-9"
                            src={user?.photoURL}
                        />
                        <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</span>
                    </a>
                </div>
            </aside>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;