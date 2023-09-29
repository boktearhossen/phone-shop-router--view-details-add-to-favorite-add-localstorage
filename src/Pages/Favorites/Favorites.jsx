import { useEffect, useState } from "react";
import FavoriteCart from "./FavoriteCart";

const Favorites = () => {

   const [favorites, setFavorites] = useState([])
   const [notFound, setNotFound] = useState(false)
   const [isShow, setIsShow] = useState(false)
   const [totalPrice, setTotalPrice] = useState(0)
   
   useEffect( () => {
    const favoritePhone = JSON.parse(localStorage.getItem('favorite'))
    if(favoritePhone){
        setFavorites(favoritePhone)
        const total = favoritePhone.reduce((preValue, currentValue)=> preValue + currentValue.price ,0)
        setTotalPrice(total)

    }else{
        setNotFound('data noto found')


    }
    },[])

    const handleRemove =() => {
        localStorage.clear()
        setFavorites('')
        setNotFound('data noto found')
    }



    return (
        <div>
           {
            // delete all button ========>>>>>>>>>>>>>>>>>>>>>>>
             notFound ? <h2 className="flex  justify-center items-center h-screen">notFound </h2>
           
           
           : <div >
                {favorites.length > 0 && (
                    <div> 
                        <button onClick={handleRemove} className="py-2 px-6 mt-6 bg-green-500 block mx-auto">Delete All</button>
                        <h2>totalPrice: {totalPrice}</h2>
                    </div>
                )
                }


                <div className="grid grid-cols-2 gap-8 mt-16">
                {
                isShow ? favorites.map(phone =>  <FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)
                :
                favorites.slice(0,4).map(phone =>  <FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)
                } 
                </div>
               
               
                {/* see more button========================>>>>>>>>>>>>>>>>>>>>>> */}
               {
               favorites.length > 4 && 
              <button onClick={() => setIsShow(!isShow)} className="py-2 px-6 mt-6 bg-green-500 block mx-auto">{isShow ? "See Less" : "See More"}</button>
               }
             
             </div>
           }
        </div>
    );
};

export default Favorites;