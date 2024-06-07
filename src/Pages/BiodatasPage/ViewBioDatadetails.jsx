import { Link, useParams } from "react-router-dom";
import useBio from "../../Hooks/useBio";

const ViewBioDatadetails = () => {
    const [biodata,loading]=useBio();
    const { id } = useParams();
    const bio = biodata?.find((user) => user?._id === id);
    // console.log(bio);

   

    if(loading){
        return(
            <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        </div>
        )
    }
     const {biodataType,name,profileImage,dateOfBirth,height,weight,age,occupation,race,fathersName,mothersName,permanentDivision,presentDivision,expectedPartnerAge,expectedPartnerHeight,expectedPartnerWeight,contactEmail,mobileNumber,biodataId}=bio;


    return (
        <div>
            <h1 className="text-3xl  text-green-500 font-bold uppercase text-center">Biodata Details</h1>
            <div className="w-full mx-auto mt-7 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="w-1/2 mx-auto h-56 md:h-64 lg:h-80" src={profileImage} alt="avatar" />

            <div className="py-5 bg-slate-300 text-center">
                <h1  className="text-xl font-semibold text-gray-800 dark:text-white">Biodata Id : {biodataId} </h1>
                <h1  className="text-xl font-semibold text-gray-800 dark:text-white">Name : {name} </h1>
                <h1>Biodata Type : {biodataType} </h1>
                <h1>Permanent Division : {permanentDivision}</h1>
                <h1>Age : {age} </h1>
                <h1>Occupation : {occupation} </h1>
                <h1>Date Of Birth : {dateOfBirth} </h1>
                <h1>race : {race} </h1>
                <h1>fathersName : {fathersName} </h1>
                <h1>mothersName : {mothersName} </h1>
                <h1>presentDivision : {presentDivision} </h1>
                <h1>expectedPartnerAge : {expectedPartnerAge} </h1>
                <h1>race : {race} </h1>
                <h1>expectedPartnerHeight : {expectedPartnerHeight} </h1>
                <h1>height : {height} </h1>
                <h1>weight : {weight} </h1>
                <h1>expectedPartnerWeight : {expectedPartnerWeight} </h1>
                
                <div className="space-x-4">
                <Link to={"/"} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">Back Home</span>
                </Link>
                <Link to={"/"} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">Add favourits</span>
                </Link>
                <Link to={"/"} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">Request Contact</span>
                </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ViewBioDatadetails;