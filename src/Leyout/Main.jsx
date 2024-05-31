import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sherd/Navbar/Navbar";
import Footer from "../Pages/Sherd/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;