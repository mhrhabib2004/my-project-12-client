import { useEffect, useState } from "react";

const useBio = () => {
    const [biodata, setBiodata] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_LINK}/bio`)
            .then(res => res.json())
            .then(data => {
                setBiodata(data);
                setLoading(false);
            });
    }, [])
    return [biodata, loading]
}
    
export default useBio;