import { useEffect, useState } from "react";
import ShowDonate from "../ShowDonate/ShowDonate";


const Donation = () => {
    const [donations, setDonations] = useState([])
    const [noData, setNoData] = useState('')
    const [showDonation, setShowDonation] = useState(false)
    useEffect(()=>{
        const donateItems = JSON.parse(localStorage.getItem('donate'))
        if(donateItems){
            setDonations(donateItems)
        }else{
            setNoData('Please go Home and Select Donations');
        }     
    },[])
    return (
        <div>{
            noData? <p className="text-center pt-32 font-bold text-xl lg:text-2xl"> {noData} </p> :
            <div className=" max-w-6xl mx-auto"> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
            {
                   showDonation ? donations.map(donate=>(<ShowDonate key={donate.id} donate={donate}></ShowDonate>)) :
                   donations.slice(0,4).map(donate=>(<ShowDonate key={donate.id} donate={donate}></ShowDonate>))
            }
            </div>
           <div className="text-center pb-10"> 
           {
                donations.length > 4 &&  <button
                onClick={()=>setShowDonation(!showDonation)}
               className={`show-button ${showDonation ? 'hidden' : 'visible'}`} >
                <span className="px-5 py-3 rounded-lg mt-5 bg-[#009444] block mx-auto text-white font-semibold text-base"> See All</span>
                </button>
              }
           </div>
            </div> }
        </div>
    );
};

export default Donation;