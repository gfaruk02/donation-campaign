import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-auto">
                <div className=" z-0">
                    <Logo></Logo>
                </div>
                <div className="flex gap-6 pt-3 text-lg font-normal z-0 text-[#0B0B0B]">
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