import { useLoaderData } from "react-router-dom";
import FavoritesDataCard from "./FavoritesDataCard";

const FavouritesBiodata = () => {
    const favorites=useLoaderData();
    // console.log(favorites)
    
    return (
        <div>
            
   <div className="flex flex-col mt-6">
     <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
       <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
         <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            
             <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
               
                 <div>
        
        {
           favorites.map(favorite=><FavoritesDataCard key={favorite._id} favorite={favorite}></FavoritesDataCard>)
       }
   
      </div>
               {/* Repeat similar structure for other team members */}
             </tbody>
           </table>
         </div>
       </div>
     </div>
   </div>
     </div>
    );
};

export default FavouritesBiodata;

{/* <div>
        
        {
           favorites.map(favorite=><FavoritesDataCard key={favorite._id} favorite={favorite}></FavoritesDataCard>)
       }
   
      </div> */}