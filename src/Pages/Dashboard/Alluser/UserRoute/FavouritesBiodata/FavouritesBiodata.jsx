import { useLoaderData } from "react-router-dom";
import FavoritesDataCard from "./FavoritesDataCard";

const FavouritesBiodata = () => {
    const favorites=useLoaderData();
    // console.log(favorites)
    
    return (
       <div>
         {
            favorites.map(favorite=><FavoritesDataCard key={favorite._id} favorite={favorite}></FavoritesDataCard>)
        }
    
       </div>
    );
};

export default FavouritesBiodata;