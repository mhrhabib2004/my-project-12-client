import useBio from "../../Hooks/useBio";
import BiodataCard from "./BiodataCard";

const BiodatasPage = () => {
    const [biodata] = useBio();
    // console.log(biodata)
    return (
        <div className="md:flex">
            {/* filter start */}
            <div className="w-1/2">
                <h1>hi its filter</h1>
            </div>
            {/* filter end */}

            {/*--biodata start--*/}

            <div className="grid w-full md:grid-cols-2 lg:grid-cols-2 gap-5 grid-cols-1">
                {
                    biodata.map(bio=>
                        <BiodataCard key={bio._id} bio={bio}></BiodataCard>
                    )
                }
            </div>
        </div>
    );
};

export default BiodatasPage;