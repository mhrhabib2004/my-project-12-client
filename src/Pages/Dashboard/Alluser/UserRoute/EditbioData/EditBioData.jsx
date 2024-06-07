
const EditBioData = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Biodata Type
                        </label>
                        <div className="relative mt-2">
                            <select
                            
                                id=" BiodataType"
                                name=" BiodataType"
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
                            id="name"
                            type="text"
                            name="name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password"> Profile Image</label>
                        <input
                            id="ProfileImage"
                            type="text"
                            name="photo"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Date of Birth
                        </label>
                        <div className="mt-2 flex space-x-2">
                            <select
                                id="day"
                                name="day"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            >
                                <option value="">Day</option>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>

                            <select
                                id="month"
                                name="month"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            >
                                <option value="">Month</option>
                                {months.map((month, index) => (
                                    <option key={index} value={index + 1}>{month}</option>
                                ))}
                            </select>

                            <select
                                id="year"
                                name="year"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            >
                                <option value="">Year</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="heightFeet">Height</label>
                        <div className="flex space-x-2">
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightFeet" name="heightFeet" required>
                                <option value="">Feet</option>
                                {[...Array(8)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1} ft</option>
                                ))}
                            </select>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightInches" name="heightInches" required>
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
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="weightKg" name="weightKg" required>
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
                            id="password"
                            type="number"
                            min={0}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="occupation" name="occupation" required>
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
                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="race" name="race" required>
                            <option value="">Select race</option>
                            <option value="hindi">Hindu</option>
                            <option value="muslim">Muslim</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Fathers Name</label>
                        <input
                            id="fathersname"
                            type="text"
                            name="fathersname"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Mothers Name</label>
                        <input
                            id="mothersname"
                            name="mothersname"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="division">Permanent Division Name </label>
                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"   id="division" name="division" required>
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
                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"   id="division" name="division" required>
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
                            id="PartnerAge"
                            type="number"
                            name="PartnerAge"
                            min={0}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="heightFeet">Expected Partner Height</label>
                        <div className="flex space-x-2">
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightFeet" name="heightFeet" required>
                                <option value="">Feet</option>
                                {[...Array(8)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1} ft</option>
                                ))}
                            </select>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="heightInches" name="heightInches" required>
                                <option value="">Inches</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i}>{i} in</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="weightKg">Expected Partner Weight </label>
                        <div>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="weightKg" name="weightKg" required>
                                <option value="">Kilograms</option>
                                {[...Array(151)].map((_, i) => (
                                    <option key={i} value={i + 30}>{i + 30} kg</option>
                                ))}
                            </select>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Mobaile Number</label>
                        <input
                            id="number"
                            type="number"
                            name="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                        <input
                            id="emailAddress"
                            type="email"
                            name="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>

            </form>
        </section>
    );
};

export default EditBioData;