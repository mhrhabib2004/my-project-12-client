import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import Swal from "sweetalert2";



const EditBioData = () => {
    const {user}=useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onsubmit = async (data) =>{
        console.log(data);
       
        fetch(`${import.meta.env.VITE_LINK}/bio`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
                
            },
            body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId){
                Swal({
                    title: "WoW",
                    text: "You added biodata successfully",
                    icon: "success",
                    confirmaButtonText:'cool'
                  })
            }
        })
    }
  
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Biodata Type
                        </label>
                        <div className="relative mt-2">
                            <select
                            {...register("biodataType", { required: true })}
                                id=" BiodataType"
                                name="biodataType"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                
                            >
                                <option>Male</option>
                                <option>Female</option>

                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Name</label>
                        <input
                        {...register("name", { required: true })}
                            id="name"
                            type="text"
                            name="name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password"> Profile Image</label>
                        <input
                        {...register("profileImage", { required: true })}
                            id="ProfileImage"
                            type="text"
                           name="profileImage"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="dateofbirth">Date of Birth</label>
                        <input
                       {...register("dateOfBirth", { required: true })}
                            id="dateofbirth"
                            type="date"
                            name="dateOfBirth"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    {/* date */}
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="heightFeet">Height</label>
                        <div className="flex space-x-2">
                            <select
                            {...register("height", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightFeet" name="height" >
                                <option value="">Feet</option>
                                {[...Array(8)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1} ft</option>
                                ))}
                            </select>
                            <select
                            {...register("heightinc", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightInches" name="heightinc">
                                <option value="">Inches</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i}>{i} in</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="weightKg">Weight </label>
                        <div>
                            <select 
                             {...register("weight", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="weightKg" name="weight" required>
                                <option value="">Kilograms</option>
                                {[...Array(151)].map((_, i) => (
                                    <option key={i} value={i + 30}>{i + 30} kg</option>
                                ))}
                            </select>

                        </div>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Age</label>
                        <input
                        {...register("age", { required: true })}
                            id="password"
                            type="number"
                            min={0}
                            name="age"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <select 
                        {...register("occupation", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="occupation" name="occupation" required>
                            <option value="">Select occupation</option>
                            <option value="doctor">Doctor</option>
                            <option value="teacher">Teacher</option>
                            <option value="engineer">Engineer</option>
                            <option value="artist">Artist</option>
                            <option value="student">Student</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="race">Race</label>
                        <select
                        {...register("race", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="race" name="race" required>
                            <option value="">Select race</option>
                            <option value="hindi">Hindu</option>
                            <option value="muslim">Muslim</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Fathers Name</label>
                        <input
                        {...register("fathersName", { required: true })}
                            id="fathersname"
                            type="text"
                            name="fathersName"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Mothers Name</label>
                        <input
                        {...register("mothersName", { required: true })}
                            id="mothersname"
                            name="mothersName"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="division">Permanent Division Name </label>
                        <select 
                        {...register("permanentDivision", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"   id="division" name="permanentDivision" required>
                            <option value="">Select division</option>
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
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                        <label htmlFor="division">Present Division Name </label>
                        <select 
                        {...register("presentDivision", { required: true })}

                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"   id="division" name="presentDivision" required>
                            <option value="">Select division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Expected Partner Age</label>
                        <input
                        {...register("expectedPartnerAge", { required: true })}
                            id="PartnerAge"
                            type="number"
                            name="expectedPartnerAge"
                            min={0}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="heightFeet">Expected Partner Height</label>
                        <div className="flex space-x-2">
                            <select
                            {...register("expectedPartnerHeight", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightFeet" name="expectedPartnerHeight" >
                                <option value="">Feet</option>
                                {[...Array(8)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1} ft</option>
                                ))}
                            </select>
                            <select 
                            {...register("expectedPartnerinc", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightInches" name="expectedPartnerinc">
                                <option value="">Inches</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i}>{i} in</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                       
                        <div>
                        <label htmlFor="expectedPartnerWeight">Expected Partner Weight</label>
                        <div>
                            <select
                                {...register("expectedPartnerWeight", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                id="weightKg"
                                name="expectedPartnerWeight"
                            >
                                <option value="">Kilograms</option>
                                {[...Array(151)].map((_, i) => (
                                    <option key={i} value={i + 30}>{i + 30} kg</option>
                                ))}
                            </select>
                          
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Mobaile Number</label>
                        <input
                        {...register("mobileNumber", { required: true })}
                            id="number"
                            type="number"
                            name="mobileNumber"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                   

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                        <input
                        {...register("contactEmail", { required: true })}
                            id="emailAddress"
                            type="email"
                            name="contactEmail"
                            value={user?.email}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                </div>
                <input className="px-8 mt-7 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit" value="add" />

                
            </form>
        </section>
    );
};

export default EditBioData;