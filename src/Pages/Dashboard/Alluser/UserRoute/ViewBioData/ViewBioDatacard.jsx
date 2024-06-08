
const ViewBioDatacard = ({data}) => {
    const {biodataType,name,profileImage,dateOfBirth,height,weight,age,occupation,race,fathersName,mothersName,permanentDivision,presentDivision,expectedPartnerAge,expectedPartnerHeight,expectedPartnerWeight,contactEmail,mobileNumber}=data;
    return (
        <section className="py-10 bg-gray-800 lg:py-0">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
                <div className="h-full pr-12 lg:order-2 lg:mb-40">
                    <div className="relative h-full lg:h-auto">
                        <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                            <img className="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                        </div>
                        <div className="relative lg:-top-12">
                            <img src={profileImage} alt="h11" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
                    <div>
                      
                        <p className="text-xl leading-relaxed text-gray-200 mt-9">name : {name}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">fathersName : {fathersName}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">mothersName : {mothersName}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">dateOfBirth : {dateOfBirth}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">biodataType : {biodataType}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">height : {height}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">weight : {weight}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">age : {age}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">occupation : {occupation}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">race : {race}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">presentDivision : {presentDivision}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">permanentDivision : {permanentDivision}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">expectedPartnerAge : {expectedPartnerAge}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">expectedPartnerHeight : {expectedPartnerHeight}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">expectedPartnerWeight : {expectedPartnerWeight}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">contactEmail : {contactEmail}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-200">mobileNumber : {mobileNumber}</p>
                        <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Explore more </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ViewBioDatacard;