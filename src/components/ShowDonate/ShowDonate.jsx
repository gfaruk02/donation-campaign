
const ShowDonate = ({donate}) => {
    // console.log(donate);
    const {id, image, title, category, category_bg_color, card_bg_color, text_color, price } = donate || {}
    const bgColor = {
        backgroundColor: card_bg_color
    }
    const bgCategoryColor = {
        backgroundColor: category_bg_color
    }
    const bgButton = {
        backgroundColor: text_color
    }
    const textColor = {
        color: text_color
    }

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md" style={bgColor}>
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="block w-24 text-base font-medium leading-relaxed text-blue-gray-900 antialiased py-1 px-2 rounded-md text-center" style={bgCategoryColor}>
      <span style={textColor}> {category} </span>
    </h6>
    <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased pt-3">
      {title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased" style={textColor}>
      ${price}.00
    </p>
     <button className="py-2 px-3 rounded-lg text-white font-semibold" type="button" style={bgButton}> View Details </button>
  </div>
</div>
        </div>
    );
};

export default ShowDonate;