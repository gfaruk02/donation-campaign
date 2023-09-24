import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    // console.log(id);
    const donations = useLoaderData();
    const {id} = useParams()
    console.log(id);
    const donate = donations.find(item => item.id === id );
    // console.log(donate);
    const styles ={
        backgroundColor: donate.text_color
    }
    return (
        <div className="max-w-6xl mx-auto pb-10" >
            <div className=" relative">
            <img className="h-screen w-full" src={donate.image} alt="" />
            <div className="hero-overlay absolute h-24 bg-gray-500 bg-opacity-90 -mt-24"> 
                <button style={styles} className=" mt-7 ml-7 text-white rounded-md px-4 py-2"> 
                Donate $ {donate.price}
                </button>
            </div>
            </div>
            
            <h1 className="text-4xl font-bold pt-10 pb-6"> {donate.title} </h1>
            <p> {donate.description} </p>
        </div>
    );
};

export default DonationDetails;