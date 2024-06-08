

const FavoritesDataCard = ({favorite}) => {
    // const { Biodataid,Name,PermanentDivision,Occupation} = favorite;
    console.log(favorite)
    return (
        <div>
            
        <div className="flex items-center gap-x-3">
     <h2 className="text-lg font-medium text-gray-800 dark:text-white">Team members</h2>
     <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">100 users</span>
   </div>
   <div className="flex flex-col mt-6">
     <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
       <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
         <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
             <thead className="bg-gray-50 dark:bg-gray-800">
               <tr>
                 <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  Name
                 </th>
                 
                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">BioData Id </th>

                 <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                 Permanent Address

                 </th>
                 
                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Occupation
                 </th>

                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Delete</th>

               </tr>
             </thead>
             <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
               <tr>
               
                
                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"></td>

                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">authurmelo@example.com</td>
                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Design Director</td>

                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">authurmelo@example.com</td>

                 <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">authurmelo@example.com</td>

                 
                
               </tr>
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

export default FavoritesDataCard;