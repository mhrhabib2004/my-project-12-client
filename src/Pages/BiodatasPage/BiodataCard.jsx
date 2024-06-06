import { Link } from "react-router-dom";

const BiodataCard = ({bio}) => {
    // console.log(bio);
    const {biodataType,name,profileImage,dateOfBirth,height,weight,age,occupation,race,fathersName,mothersName,permanentDivision,presentDivision,expectedPartnerAge,expectedPartnerHeight,expectedPartnerWeight,contactEmail,mobileNumber,biodataId}=bio;
    return (
        <div>
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56 md:h-64 lg:h-80" src={profileImage} alt="avatar" />

            <div className="py-5 text-center">
                <h1>Biodata Id :{biodataId} </h1>
                <h1>Biodata Type :{biodataType} </h1>
                <h1>Permanent Division : {permanentDivision} </h1>
                <h1>Age :{age} </h1>
                <h1>Occupation : {occupation} </h1>
                <Link to={`/ViewProfile/`} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white"> View Profile</span>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default BiodataCard;