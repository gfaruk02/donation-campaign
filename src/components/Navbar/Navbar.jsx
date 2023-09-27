import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-auto">
                <div className=" z-0 pl-2 md:pl-5 lg:pl-0">
                    <Logo></Logo>
                </div>
                <div className="flex gap-3 md:gap-6 pr-2 md:pr-5 lg:pr-0 pt-3 text-base md:text-lg font-normal z-0 text-[#0B0B0B]">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                            
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;