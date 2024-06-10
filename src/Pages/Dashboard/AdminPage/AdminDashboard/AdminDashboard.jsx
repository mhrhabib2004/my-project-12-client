import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBiodataCount: 0,
    maleBiodataCount: 0,
    femaleBiodataCount: 0,
    premiumBiodataCount: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LINK}/dashboard`)
      .then((res) => res.json())
      .then((data) => setDashboardData(data))
      .catch((err) => console.error('Error fetching dashboard data:', err));
  }, []);

  const pieData = {
    labels: ['Total Biodata', 'Male Biodata', 'Female Biodata', 'Premium Biodata'],
    datasets: [
      {
        label: 'Biodata Distribution',
        data: [
          dashboardData.totalBiodataCount,
          dashboardData.maleBiodataCount,
          dashboardData.femaleBiodataCount,
          dashboardData.premiumBiodataCount,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const pieOptions = {
    animation: {
      duration: 0, // Disable animation
    },
  };

  return (
    <div className="mt-7">
      <h1 className="text-3xl text-green-500 font-bold uppercase text-center">Admin Dashboard</h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h1 className="uppercase text-center font-bold">Total Biodata</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.totalBiodataCount}</h2>
          </div>
        </div>
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h1 className="uppercase text-center font-bold">Girls Biodata</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.femaleBiodataCount}</h2>
          </div>
        </div>
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h1 className="uppercase text-center font-bold">Boys Biodata</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.maleBiodataCount}</h2>
          </div>
        </div>
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h1 className="uppercase text-center font-bold">Total Premium Biodata</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.premiumBiodataCount}</h2>
          </div>
        </div>
        <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h1 className="uppercase text-center font-bold">Revenue for Purchasing</h1>
            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{dashboardData.totalRevenue}</h2>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default AdminDashboard;
