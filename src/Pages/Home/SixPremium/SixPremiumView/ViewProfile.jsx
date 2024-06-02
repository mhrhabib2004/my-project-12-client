import { Link, useParams } from "react-router-dom";
import usePremiun from "../../../../Hooks/usePremiun";

const ViewProfile = () => {
    const [premiumusers,loading] = usePremiun(); 
    const { id } = useParams();
    const premiumuser = premiumusers?.find((user) => user?._id === id);

    if(loading){
        return(
            <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        </div>
        )
    }

    const { BiodataId, BiodataType, ProfileImage, PermanentDivision, Age, Occupation } = premiumuser;
    
    return (
        <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56 md:h-64 lg:h-80" src={ProfileImage} alt="avatar" />

            <div className="py-5 text-center">
                <h1>Biodata Id : {BiodataId}</h1>
                <h1>Biodata Type : {BiodataType}</h1>
                <h1>Permanent Division : {PermanentDivision}</h1>
                <h1>Age : {Age}</h1>
                <h1>Occupation : {Occupation}</h1>
                <Link to={"/"} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">Back Home</span>
                </Link>
            </div>
        </div>
    );
};

export default ViewProfile;
