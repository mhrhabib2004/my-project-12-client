import { useState } from "react";
import useBio from "../../../../../Hooks/useBio";
import useAuth from "../../../../../Hooks/useAuth";
import ViewBioDatacard from "./ViewBioDatacard";

const ViewBioData = () => {
    const [viewbiodata] = useBio();
    // console.log(viewbiodata,'dddd');
    const {user} = useAuth();
    const userEmail = user?.email;
    // console.log(userEmail);
    const EmailData = viewbiodata.filter((userData) => userData.contactEmail === userEmail);
    // console.log(EmailData);
    // const [myviewbiodata,setmyviewbiodata]=useState(viewbiodata);
    return (
        <div className="grid grid-cols-1 gap-5">
           {
            EmailData.map(data=><ViewBioDatacard key={data._id} data={data}></ViewBioDatacard>)
           }
        </div>
    );
};

export default ViewBioData;