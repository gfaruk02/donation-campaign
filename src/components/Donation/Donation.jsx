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
            <div > 
            <div className="grid grid-cols-1 md:grid-cols-2">
           
           
            {
                   showDonation ? donations.map(donate=>(<ShowDonate key={donate.id} donate={donate}></ShowDonate>)) :
                   donations.slice(0,4).map(donate=>(<ShowDonate key={donate.id} donate={donate}></ShowDonate>))
            }
            </div>
              {
                donations.length > 4 &&  <button
                onClick={()=>setShowDonation(!showDonation)}
                className="px-5 py-3 rounded-lg mt-5 bg-green-300 block mx-auto" > {
                    showDonation ? "" : "See More"
                }</button>
              }
            </div>
            
        </div>
    );
};

export default Donation;