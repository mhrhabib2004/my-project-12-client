import { useState } from "react";
import useBio from "../../Hooks/useBio";
import BiodataCard from "./BiodataCard";

const BiodatasPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [biodata, loading] = useBio(currentPage);

    const [filters, setFilters] = useState({
        ageRange: "",
        biodataTaype: "",
        division: "",
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filteredBiodata = biodata.filter(bio => {
        // Filter by age range
        
        if ( filters.ageRange && bio.age !== filters.ageRange) {
            return false;
        }

        // Filter by biodata type
        if (filters.biodataTaype && bio.biodataType !== filters.biodataTaype) {
            return false;
        }

        // Filter by division
        if (filters.division && bio.presentDivision !== filters.division) {
            return false;
        }

        return true;
    });

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="flex">
            <div className="w-1/3 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Filter Biodata</h2>
                <div className="mb-4">
                    <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">Age Range:</label>
                    <div className="flex items-center mt-1">
                        <input type="number" id="ageMin" name="min" onChange={handleFilterChange} className="w-1/2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block sm:text-sm rounded-md" />
                       
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="biodataType" className="block text-sm font-medium text-gray-700">Biodata Type:</label>
                    <select id="biodataType" name="biodataType" value={filters.biodataType} onChange={handleFilterChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="division" className="block text-sm font-medium text-gray-700">Division:</label>
                    <select id="division" name="division" value={filters.division} onChange={handleFilterChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="">All</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
            </div>
            <div className="w-2/3 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredBiodata.map((bio, index) => (
                            <BiodataCard key={bio._id} index={index} bio={bio}></BiodataCard>
                        ))
                    )}
                </div>
                <div className="flex mt-6 justify-between">
                    {/* Pagination Controls */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextPage}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default BiodatasPage;
