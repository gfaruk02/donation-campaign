import { useEffect, useState } from "react";
import ShowDonate from "../ShowDonate/ShowDonate";


const Donation = () => {
    const [donations, setDonations] = useState([])
    const [showDonation, setShowDonation] = useState(false)
    useEffect(()=>{
        const donateItems = JSON.parse(localStorage.getItem('donate'))
        setDonations(donateItems)
    },[])
    return (
        <div>
            <div className=" max-w-6xl mx-auto"> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
            {
                   showDonation ? donations.map(donate=>(<ShowDonate key={donate.id} donate={donate}></ShowDonate>)) :
                   donations.slice(0,4).map(donate=>(<ShowDonate key={donate.id} donate={donate}></ShowDonate>))
            }
            </div>
           <div className="text-center"> 
           {
                donations.length > 4 &&  <button
                onClick={()=>setShowDonation(!showDonation)}
               className={`show-button ${showDonation ? 'hidden' : 'visible'}`} >
                <span className="px-5 py-3 rounded-lg mt-5 bg-green-300 block mx-auto"> Show All</span>
                </button>
              }
           </div>
            </div> 
        </div>
    );
};

export default Donation;