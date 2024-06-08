import useBio from "../../../Hooks/useBio";

const SuccessCounter = () => {
    const [bio] =useBio();
    return (
        <div className="mt-7">
            <h1 className="text-3xl text-green-500 font-bold uppercase text-center">Success Counter</h1>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div>
                <h1 className="uppercase text-center font-bold">total biodata</h1>
                <h2 className="text-center text-4xl font-bold mt-4">{bio.length}</h2>
            </div> 
        </div>
            <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div>
                <h1 className="uppercase text-center font-bold">girls biodata</h1>
                <h2 className="text-center text-4xl font-bold mt-4">88</h2>
            </div> 
        </div>
            <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div>
                <h1 className="uppercase text-center font-bold">boys biodata</h1>
                <h2 className="text-center text-4xl font-bold mt-4">88</h2>
            </div> 
        </div>
            <div className="w-full mt-4 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div>
                <h1 className="uppercase text-center font-bold">total marriages completed</h1>
                <h2 className="text-center text-4xl font-bold mt-4">88</h2>
            </div> 
        </div>
            </div>
        </div>
    );
};

export default SuccessCounter;