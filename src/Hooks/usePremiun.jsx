import { useEffect, useState } from "react";

const usePremiun = () => {
    const [premium,setPremium]=useState([]);
    const [loding,setloding]=useState(true);
        useEffect (()=>{
            fetch('http://localhost:5000/premium')
            .then(res=>res.json())
            .then(data=>{
                setPremium(data)
                setloding(false)
            })
        },[])
        return [premium,loding]
    }

export default usePremiun;