
import {  Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import LoadingCard from "../Pages/Sherd/LoadingCard/LoadingCard";
import useRole from "../Hooks/useRole";
import UserButton from "../Pages/Dashboard/UserButton/UserButton";
import AdminButton from "../Pages/Dashboard/AdminButton/AdminButton";




const Dashboard = () => {
    // const [cart] = useCart();
    const { user} = useAuth();



    // TODO: get isAdmin value from the database
    const [role,isLoading] = useAdmin();
    // const [role,isLoading]=useRole();
    // const isAdmin = false;
    console.log(role,'sssss')

    if(isLoading){
        return <LoadingCard></LoadingCard>
    }

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
          {role === 'admin' && <AdminButton></AdminButton>}

                    {role === 'user' && <UserButton></UserButton>}
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