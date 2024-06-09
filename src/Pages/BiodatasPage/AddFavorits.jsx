import React from 'react';
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useBio from "../../Hooks/useBio";
import Swal from "sweetalert2";

const AddFavorits = () => {
    const [biodata, loading] = useBio();
    const { id } = useParams();
    const { user } = useAuth();

    // Find the biodata entry with the matching ID
    const fabiodata = biodata.find(fadata => fadata._id === id);
    
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!fabiodata) {
        return <h1>No biodata found</h1>
    }

    // Destructure the biodata entry
    const { biodataType, name, profileImage, dateOfBirth, height, weight, age, occupation, race, fathersName, mothersName, permanentDivision, presentDivision, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber,biodataId } = fabiodata;

    const handleAddFavorites = e => {
        e.preventDefault();

        const fabio = {
            Biodataid: biodataId,
            BiodataType: biodataType,
            Name: name,
            ProfileImage: profileImage,
            DateOfBirth: dateOfBirth,
            Height: height,
            Weight: weight,
            Age: age,
            Occupation: occupation,
            Race: race,
            FathersName: fathersName,
            MothersName: mothersName,
            PermanentDivision: permanentDivision,
            PresentDivision: presentDivision,
            ExpectedPartnerAge: expectedPartnerAge,
            ExpectedPartnerHeight: expectedPartnerHeight,
            ExpectedPartnerWeight: expectedPartnerWeight,
            ContactEmail: contactEmail,
            MobileNumber: mobileNumber,
            email: user?.email,
        };

        fetch(`${import.meta.env.VITE_LINK}/addfavourits`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fabio),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Added to Favorites",
                    text: "The biodata has been added to your favorites successfully.",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            })
            .catch(error => {
                console.error("Error adding to favorites:", error);
                Swal.fire({
                    title: "Error",
                    text: "There was an error adding the biodata to favorites.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            });
    };

    return (
        <div>
            
            <form onSubmit={handleAddFavorites}>

                <input name="email" hidden value={user?.email} type="email" readOnly />
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="flex items-center justify-center">
                        <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                            <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" alt="" />
                        </div>
                        <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                            <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg" alt="" />
                        </div>
                        <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                            <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg" alt="" />
                        </div>
                    </div>

                    <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
                        <span className="border-b-8 border-yellow-300">Are you sure to add </span> this user Favourites collection
                    </h2>
                  
                    <button className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700" type="submit">Add to Favorites</button>
                   
                </div>
            </div>
               
            </form>
        </div>
    );
};

export default AddFavorits;