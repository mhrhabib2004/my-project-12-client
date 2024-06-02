import  { useState, useEffect } from 'react';
import usePremiun from "../../../Hooks/usePremiun";
import SixPremiumcard from "./SixPremiumcard";

const SixPremium = () => {
    const [premiumuser] = usePremiun();
    const [sortOrder, setSortOrder] = useState('ascending');
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {
        if (premiumuser.length) {
            sortUsers(premiumuser, sortOrder);
        }
    }, [premiumuser, sortOrder]);

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const sortUsers = (users, order) => {
        const sorted = [...users].sort((a, b) => {
            if (order === 'ascending') {
                return a.Age - b.Age;
            } else {
                return b.Age - a.Age;
            }
        });
        setSortedUsers(sorted);
    };

    return (
        <div className='mt-7 uppercase text-center'>
             
                <h1 className='text-4xl font-bold'> six <span className='text-green-600'>premium</span> member</h1>
                
            <div className="flex mt-7 justify-center mb-4">
               
                <label htmlFor="sortOrder" className="mr-2">Sort by age:</label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                    className="border rounded p-2"
                >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            <div className="mt-7 gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {sortedUsers.map(item => (
                    <SixPremiumcard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default SixPremium;
