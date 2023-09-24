import { Link } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";



const Donations = ({item}) => {
    const {id, image, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price } = item
    // console.log(item);

    const bgColor = {
        backgroundColor: card_bg_color
    }
    const bgCategoryColor = {
        backgroundColor: category_bg_color
    }
    const textColor = {
        color: text_color
    }
    // const handleAddTodetailes = ()={
        
    // }
    return (
        <div>
   <Link to={`/donations/${id}`}> 
      <button>
   

    <div className=" mt-3 relative flex w-64 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md" style={bgColor}>
  <div className="relative h-56 w-full overflow-hidden rounded-xl  bg-clip-border text-gray-700" style={bgColor}>
    <img

      src={image}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="py-6 px-2 text-left ">
    <div className="mb-2 flex items-center justify-between" style={textColor}>
      <p className="block text-base font-medium leading-relaxed text-blue-gray-900 antialiased py-1 px-3 rounded-md" style={bgCategoryColor}>
        {category}
      </p>
      <p className="block text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       Price : $ {price}
      </p>
    </div>
    <p className="block text-lg font-semibold leading-normal text-gray-700 antialiased opacity-75" style={textColor}>
      {title}
    </p>
  </div>

 
    </div>
    </button>
    </Link>

        </div>
    );
};

export default Donations;