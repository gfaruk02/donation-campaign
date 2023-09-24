import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <div className="pt-5"> 
            <Navbar></Navbar>
            </div>
            <div className="pt-5">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;