import { NavLink, json } from "react-router-dom";
import swal from "sweetalert";

const PhoneCard = ({ phone }) => {
  const { id, brand_name, image, phone_name, price, rating } = phone;

  const handleAddToFavorite =()=> {
   
    // localstorage ---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    let addedFavoritePhoneArr = []
   
    const favoritePhone = JSON.parse(localStorage.getItem('favorite'))


    if(!favoritePhone){
       addedFavoritePhoneArr.push(phone)
       localStorage.setItem('favorite', JSON.stringify(addedFavoritePhoneArr))
       swal("Good job!", "Product added succesfully!", "success");
    }else{
        
      const isExist = favoritePhone.find(phone => phone.id === id)
         if(!isExist){
        addedFavoritePhoneArr.push(...favoritePhone,phone)
        localStorage.setItem('favorite', JSON.stringify(addedFavoritePhoneArr))     
         swal("Good job!", "Product added succesfully!", "success");
         }else{
          swal("!", "No Dublicet", "error");
         }
        

    }
  }


  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
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
            <button onClick={handleAddToFavorite} className="text-black bg-green-500 w-full text-center font-bold text-xl py-2">
              Add To Favorit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
