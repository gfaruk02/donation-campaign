import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link to="/"><img className=" h-10 md:h-14 " src="https://i.ibb.co/hCSq431/Logo.png" alt="Donation" /></Link>
        </div>
    );
};

export default Logo;