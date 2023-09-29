

const FavoriteCart = ({phone}) => {
    const { brand_name, image, phone_name, price, rating } = phone;
    return (
        <div>
            <div className=" ">
      <div className="relative flex w-full flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold ">{brand_name}</h2>
          <h2 className="text-2xl font-bold my-3">{phone_name}</h2>
          
          
          <a className=" " >
            <button className="text-black bg-green-500 w-full text-center font-bold text-xl py-2">
              Add To Favorit
            </button>
          </a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default FavoriteCart;