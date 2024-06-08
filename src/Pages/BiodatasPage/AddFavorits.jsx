import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useBio from "../../Hooks/useBio";

const AddFavorits = () => {

    const [biodata,loading]=useBio();
    const {id}=useParams();

    const fabiodata= biodata.find(fadata=>fadata._id===id)
    console.log(fabiodata);
    const {user}=useAuth();
    const {biodataType,name,profileImage,dateOfBirth,height,weight,age,occupation,race,fathersName,mothersName,permanentDivision,presentDivision,expectedPartnerAge,expectedPartnerHeight,expectedPartnerWeight,contactEmail,mobileNumber}=biodata;

    const handeleaddfavorits = e =>{
        e.preventDefault();
        const form = e.target;
        
        const BiodataType=biodataType;
        const Name=name;
        const ProfileImage=profileImage;
        const DateOfBirth=dateOfBirth;
        const Height=height;
        const Weight=weight;
        const Age=age;
        const Occupation=occupation;
        const Race=race;
        const FathersName=fathersName;
        const MothersName=mothersName;
        const PermanentDivision=permanentDivision;
        const PresentDivision=presentDivision;
        const ExpectedPartnerAge=expectedPartnerAge;
        const ExpectedPartnerHeight=expectedPartnerHeight;
        const ExpectedPartnerWeight=expectedPartnerWeight;
        const ContactEmail=contactEmail;
        const MobileNumber=mobileNumber;

        const fabio={BiodataType,Name,ProfileImage,DateOfBirth,Height,Weight,Age,Occupation,Race,FathersName,MothersName,PermanentDivision,PresentDivision,ExpectedPartnerAge,ExpectedPartnerHeight,ExpectedPartnerWeight,ContactEmail,MobileNumber};

        // console.log(fabio)

    }
   if(loading){
    return <h1>habib</h1>
   }

    

    return (
        <div>
            <form onSubmit={handeleaddfavorits}>
                <input name="email" hidden value={user?.email}  type="email" />
            </form>
        </div>
    );
};

export default AddFavorits;