import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";




const SocialLogin = () => {
    const { googleSignIn } = useAuth();
   
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate('/');
            
        })
    }

    return (
      
            
            <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <button onClick={handleGoogleSignIn} className="flex items-center gap-2">
                    <FaGoogle ></FaGoogle>
                    Continue with Google
                </button>
            </div>
        
    );
};

export default SocialLogin;