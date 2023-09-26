import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center text-center bg-slate-200">
            <div> 
            <h1 className="text-2xl pb-5">Oops! You`re lost.</h1>
            <p className="text-base">The page you are looking for was not found</p>

            {/* <link to='/'> <button>Go Home Page</button></link> */}
            <NavLink to='/'><button className="mt-5  py-3 px-4 bg-red-500 rounded-md text-base font-semibold text-white">Go Home Page</button> </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;