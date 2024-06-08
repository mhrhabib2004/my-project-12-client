import { useContext } from "react";
import { AuthContext } from "../Provaiders/AuthProvider";



const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;