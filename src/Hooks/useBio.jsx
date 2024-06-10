import { useEffect, useState } from "react";

const useBio = (pageNumber) => {
    const [biodata, setBiodata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_LINK}/bio?page=${pageNumber}`);
            const data = await response.json();
            setBiodata(data);
            setLoading(false);
        };

        fetchData()
            .catch(error => {
                console.error("Error fetching biodata:", error);
                setLoading(false);
            });
    }, [pageNumber]);

    return [biodata, loading];
};
    
export default useBio;
