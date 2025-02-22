import  { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user,logOut}=useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navlinks =
        <>
            <Link className='px-3 py-2 text-lg font-normal mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' to={"/"}>Home</Link>
            <Link className='px-3 text-lg font-normal  py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' to={"/biodatas"}>Biodatas</Link>
            <Link className='px-3 text-lg font-normal py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' to={"/AboutUs"}>About Us</Link>
            <Link className='px-3 text-lg font-normal py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' to={"/ContactUs"}>Contac Us</Link>
            <Link className='px-3 text-lg font-normal py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' to={"/dashboard"}>Dashboard</Link>
            
            {
                user ? 
                <Link onClick={handleLogOut} className='px-3 text-lg font-normal py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>Sign Out</Link> :
                <Link className='px-3 text-lg font-normal py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' to={"/login"}>Login</Link>
                
            }

        </>

    return (
        <nav className="fixed z-10 bg-opacity-30 container mx-auto  text-white bg-gray-100 shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="w-28 h-12 " src="https://i.ibb.co/D7Nkz6Y/logo-2.png" alt="Logo" />
                        </a>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {navlinks}
                        </div>

                       {user && <div className="flex items-center mt-4 lg:mt-0">
                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
                                </div>

                                {/* <h3 className="mx-2 text-gray-700 dark:text-gray-200">{user?.displayName}</h3> */}
                            </button>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
