import { useState } from "react";
import useBio from "../../Hooks/useBio";
import BiodataCard from "./BiodataCard";

const BiodatasPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [biodata, loading] = useBio(currentPage);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
       <div className="flex">
        <div className="w-1/2">

        </div>
         <div className="">
            

            <div className="grid w-full md:grid-cols-2 lg:grid-cols-2 gap-5 grid-cols-1">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    biodata.map((bio, index) => (
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
