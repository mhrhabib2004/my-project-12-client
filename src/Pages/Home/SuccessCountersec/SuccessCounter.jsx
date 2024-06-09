
import  { useState, useEffect } from 'react';
const SuccessCounter = () => {
    const [dashboardData, setDashboardData] = useState({
        totalBiodataCount: 0,
        maleBiodataCount: 0,
        femaleBiodataCount: 0,
        premiumBiodataCount: 0,
        totalRevenue: 0
      });
      
    
      useEffect(() => {
        fetch("http://localhost:5000/dashboard")
          .then(res => res.json())
          .then(data => setDashboardData(data))
          .catch(err => console.error("Error fetching dashboard data:", err));
      }, []);

    return (
        <div className="mt-7">
        <h1 className="text-3xl text-green-500 font-bold uppercase text-center">Admin Dashboard</h1>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div>
            <h1 className="uppercase text-center font-bold">total biodata</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.totalBiodataCount}</h2>
        </div> 
    </div>
        <div className="w-full  mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div>
            <h1 className="uppercase text-center font-bold">girls biodata</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.femaleBiodataCount}</h2>
        </div> 
    </div>
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div>
            <h1 className="uppercase text-center font-bold">boys biodata</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.maleBiodataCount}</h2>
        </div> 
    </div>
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div>
            <h1 className="uppercase text-center font-bold">marriages have been completed</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">5</h2>
        </div> 
    </div>
        
        </div>
</div>
    );
};

export default SuccessCounter;