
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
    const { id } = useParams();
    // console.log(id);
    const Donations = useLoaderData()
    // console.log(phones);
    const [donate, setDonate] = useState([]);
    console.log(donate);
    const styles ={
        backgroundColor: donate.text_color
    }
    useEffect(() => {
        const findDonation = Donations?.find(donate => donate.id === id);
        setDonate(findDonation);
    }, [id, Donations]);
    const handleToDonate = () =>{
        const addDonations = [];
        const donateItem = JSON.parse(localStorage.getItem('donate'));
        if(!donateItem){
            addDonations.push(donate)
            localStorage.setItem('donate', JSON.stringify(addDonations))
            swal("Good job!", "You Phone Added!", "success");
        }else{
            const isExists = donateItem.find(donate=>donate.id === id)
            if(!isExists){
                addDonations.push(...donateItem,donate)
            localStorage.setItem('donate', JSON.stringify(addDonations))
            swal("Good job!", "You donate Added!", "success");
            }else{
                swal("Erron!", "No Duplicate. already added", "error");
            }
            
        }
    }
    return (
        <div className="max-w-6xl mx-auto pb-10" >
            <div className=" relative">
            <img className="h-screen w-full" src={donate.image} alt="" />
            <div className="hero-overlay absolute h-24 bg-gray-500 bg-opacity-90 -mt-24"> 
                <button onClick={handleToDonate} style={styles} className=" mt-7 ml-7 text-white rounded-md px-4 py-2"> 
                Donate $ {donate.price}
                </button>
            </div>
            </div>
            
            <h1 className="text-4xl font-bold pt-10 pb-6"> {donate.title} </h1>
            <p> {donate.description} </p>
        </div>
    );
};

export default Details;