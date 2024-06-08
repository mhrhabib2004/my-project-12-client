

const FavoritesDataCard = ({favorite}) => {
    const { Biodataid,Name,PermanentDivision,Occupation} = favorite;
    console.log(favorite)
    return (
        <div>
      
   <div className="flex flex-col mt-6">
     <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
       <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
         <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
           
               <tr>
               
                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{Biodataid}</td>

                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{Name}</td>
                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Design Director</td>

                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{PermanentDivision}</td>

                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <button>Delete </button>
                 </td>

                 
                
               </tr>
               {/* Repeat similar structure for other team members */}
             
           </table>
         </div>
       </div>
     </div>
   </div>
     </div>
    );
};

export default FavoritesDataCard;