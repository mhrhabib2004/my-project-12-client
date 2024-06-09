import { useState } from "react";
import Swal from "sweetalert2";

const FavoritesDataCard = ({ favorite }) => {
  const [mydatalist, setmydatalist] = useState([favorite]);
  const { Biodataid, Name, PermanentDivision, Occupation, _id } = favorite;

  const handledelete = _id => {
    console.log(_id)
    Swal({
        title: "Are you sure?",
        text: "Are you sure that you want to return this book?",
        icon: "warning",
        dangerMode: true,
    })

        .then(willDelete => {
            if (willDelete) {
               
                fetch(`${import.meta.env.VITE_LINK}/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) { 
                            Swal({
                                title: "thanks",
                                text: "your Book return sucsess",
                                icon: "sucsess",
                                dangerMode: true,
                            })
                        }

                    })
                const remening = mydatalist.filter(data => data._id !== _id);
                setmydatalist(remening);
            }
        });

}
  return (
    <div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <tbody>
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{Biodataid}</td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{Name}</td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Design Director</td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{PermanentDivision}</td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{Occupation}</td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <button onClick={() => handledelete(_id)}>Delete</button>
                    </td>
                  </tr>
                
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